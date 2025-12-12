import { useState, useRef, useEffect } from 'react'
import { FaTimes, FaPaperPlane, FaRobot, FaSpinner, FaMicrophone } from 'react-icons/fa'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m Luxury Construction\'s AI Assistant. Ask me anything about our Landscaping Design & Install, Concrete Work, or Home Remodeling services.',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [askedQuestions, setAskedQuestions] = useState(new Set())
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return

    const userText = inputValue
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: userText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    
    // Track asked questions to avoid repetition
    setAskedQuestions(prev => new Set([...prev, userText.toLowerCase()]))

    try {
      // Call the API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          conversationHistory: messages,
          askedQuestions: Array.from(askedQuestions)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      // Add bot response
      const botMessage = {
        id: messages.length + 2,
        text: data.reply,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: 'I apologize for the error. Please try rephrasing your question or contact us directly.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chatbot Button - Google Gemini Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group"
        aria-label="Open AI Chatbot"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-700 to-primary-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer">
            {isOpen ? (
              <FaTimes className="text-white text-lg sm:text-xl md:text-2xl" />
            ) : (
              <FaRobot className="text-white text-lg sm:text-xl md:text-2xl" />
            )}
          </div>
        </div>
      </button>

      {/* Chatbot Window - Google Gemini Style */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[440px] max-h-[calc(100vh-120px)] sm:max-h-[700px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-3 sm:p-4 md:p-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-700 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaRobot className="text-sm sm:text-base md:text-lg text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 truncate">Luxury Construction AI</h3>
                <p className="text-xs text-gray-500 truncate">Always ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 flex-shrink-0"
              aria-label="Close chatbot"
            >
              <FaTimes className="text-sm sm:text-base text-gray-600" />
            </button>
          </div>

          {/* Messages Container */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 bg-white"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn px-1 sm:px-0`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-xs md:max-w-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300 ${
                    message.sender === 'user'
                      ? 'bg-primary-700 text-white rounded-br-none shadow-md'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn px-1 sm:px-0">
                <div className="bg-gray-100 text-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl rounded-bl-none flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-3 sm:p-4 md:p-6 bg-white"
          >
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary-700 focus:ring-2 focus:ring-primary-700/20 transition-all duration-300 text-xs sm:text-sm md:text-base bg-gray-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-3 sm:px-4 md:px-5 py-2 sm:py-3 bg-primary-700 text-white font-bold rounded-full hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg flex-shrink-0"
              >
                <FaPaperPlane className="text-xs sm:text-sm" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
