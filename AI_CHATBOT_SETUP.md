# AI Chatbot Setup Guide

## Overview
This document explains how to set up and configure the Gemini AI Chatbot for Luxury Construction.

## Prerequisites
- Node.js 18+ installed
- Gemini API key from Google AI Studio

## Setup Instructions

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikeys)
2. Click "Create API Key"
3. Copy your API key

### 2. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory with:

```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyB81L67oNlBNxMmcpqHeqY6kywsttiIJLw
NEXT_PUBLIC_API_URL=https://luxury-constructions-production-6421.up.railway.app
```

**Important:** 
- The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser
- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`

### 3. Install Dependencies

Run the following command in the `frontend` directory:

```bash
npm install
```

This will install the `@google/generative-ai` package required for the chatbot.

### 4. Start the Development Server

```bash
npm run dev
```

The chatbot will be available at `http://localhost:3000`

## Features

### AI Chatbot Capabilities
- **Professional Responses**: Trained to answer questions about Landscaping, Concrete Work, and Home Remodels
- **Conversation History**: Maintains context across multiple messages
- **Mobile Responsive**: Works seamlessly on all devices
- **Real-time Responses**: Instant AI-powered replies using Gemini API
- **Professional Branding**: Uses company colors and logo styling

### Service Information
The chatbot is trained to provide information about:

**Landscaping Design & Install**
- Permits, Plans, Designs, Engineering
- Pavers (Belgard Premium, Natural Stone, Brick)
- Plants/Planter Boxes
- Sprinkler Systems

**Concrete Work**
- Driveways & Walkways
- Outdoor Steps/Stairs
- Hot Tub Pads
- Walkout Basements
- Sports Courts (Basketball, Pickleball, Multi-Sport)
- Heated Driveway/Walkway Systems

**Home Remodels**
- Full Basement Remodels
- Full Bathroom Remodels
- Siding (Vinyl, Wood, Metal, Composite)
- Roofing (Asphalt, Metal, Wood, Slate, Composite)
- Gutters (Metal, Vinyl)

## API Details

### Endpoint
- **Route**: `/api/chat`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
  "message": "User's question",
  "conversationHistory": [
    {
      "id": 1,
      "text": "Previous message",
      "sender": "user|bot",
      "timestamp": "ISO 8601 timestamp"
    }
  ]
}
```

### Response
```json
{
  "reply": "AI-generated response"
}
```

## Customization

### Modify System Prompt
Edit the `systemPrompt` variable in `/pages/api/chat.js` to change:
- Chatbot personality
- Service information
- Response guidelines
- Company details

### Styling
The chatbot uses Tailwind CSS classes. Modify `/components/AIChatbot.js` to customize:
- Colors (primary-700, accent-gold)
- Button styles
- Message bubble appearance
- Animation effects

### Add Custom Animations
Animations are defined in `/styles/globals.css`:
- `slideUp` - Chatbot window entrance
- `bounce` - Robot icon animation
- `spin` - Loading spinner

## Troubleshooting

### API Key Not Working
1. Verify the API key is correct
2. Check that `NEXT_PUBLIC_GEMINI_API_KEY` is set in `.env.local`
3. Restart the development server after adding the key
4. Ensure the API key has Generative AI API enabled

### Chatbot Not Appearing
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors
4. Verify AIChatbot component is imported in `_app.js`

### Slow Responses
1. Check internet connection
2. Verify Gemini API quota hasn't been exceeded
3. Check browser network tab for API errors
4. Consider implementing response caching

### CORS Issues
- The API route is on the same domain, so CORS shouldn't be an issue
- If deploying to different domains, configure CORS in Next.js

## Security Considerations

### API Key Safety
- ✅ API key is in `.env.local` (not committed)
- ✅ API calls go through Next.js backend (not directly from browser)
- ✅ Rate limiting should be implemented in production
- ⚠️ Monitor API usage to prevent abuse

### Production Deployment
1. Set `NEXT_PUBLIC_GEMINI_API_KEY` in your hosting platform's environment variables
2. Implement rate limiting on `/api/chat` endpoint
3. Add authentication if needed
4. Monitor API costs and usage
5. Consider implementing message filtering/moderation

## Performance Optimization

### Current Optimizations
- Lazy loading of chatbot component
- Async API calls with loading states
- Message history management
- Smooth animations with GPU acceleration

### Future Improvements
- Message caching
- Response streaming
- Conversation persistence
- Analytics tracking

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Google Generative AI documentation
3. Check Next.js documentation
4. Contact support team

## Version Information
- Next.js: 14.0.0
- React: 18.2.0
- Google Generative AI: 0.3.0
- Tailwind CSS: 3.3.0
