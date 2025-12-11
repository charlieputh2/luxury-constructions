import { useEffect, useState, useCallback } from 'react';

export function useRealtime(url, options = {}) {
  const [data, setData] = useState(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);
  const [ws, setWs] = useState(null);

  const connect = useCallback(() => {
    try {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}${url}`;
      
      const websocket = new WebSocket(wsUrl);

      websocket.onopen = () => {
        setConnected(true);
        setError(null);
        if (options.onConnect) options.onConnect();
      };

      websocket.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          setData(message);
          if (options.onMessage) options.onMessage(message);
        } catch (err) {
          console.error('Failed to parse WebSocket message:', err);
        }
      };

      websocket.onerror = (err) => {
        setError(err);
        setConnected(false);
        if (options.onError) options.onError(err);
      };

      websocket.onclose = () => {
        setConnected(false);
        if (options.onClose) options.onClose();
        if (options.autoReconnect !== false) {
          setTimeout(connect, 3000);
        }
      };

      setWs(websocket);
    } catch (err) {
      setError(err);
      setConnected(false);
    }
  }, [url, options]);

  useEffect(() => {
    connect();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [connect]);

  const send = useCallback(
    (message) => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
      }
    },
    [ws]
  );

  return { data, connected, error, send };
}
