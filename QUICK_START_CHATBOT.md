# Quick Start: AI Chatbot Setup

## 🚀 Get Started in 3 Steps

### Step 1: Add Your Gemini API Key
Create a `.env.local` file in the `frontend` directory:

```bash
cd frontend
```

Create `.env.local` with:
```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyB81L67oNlBNxMmcpqHeqY6kywsttiIJLw
NEXT_PUBLIC_API_URL=https://luxury-constructions-production-6421.up.railway.app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and look for the gold robot icon in the bottom-right corner!

## 📋 What's Included

✅ **AI Chatbot Component** (`components/AIChatbot.js`)
- Professional UI with company branding
- Real-time responses using Gemini API
- Mobile responsive design
- Smooth animations

✅ **API Route** (`pages/api/chat.js`)
- Secure backend integration
- Conversation history management
- System prompt for professional responses
- Error handling

✅ **Global Integration** (`pages/_app.js`)
- Chatbot available on all pages
- Persistent across navigation

✅ **Styling** (`styles/globals.css`)
- Custom animations
- Responsive design
- Professional appearance

## 🎨 Features

- **24/7 Availability**: AI assistant always ready to help
- **Service Information**: Trained on all Luxury Construction services
- **Professional Responses**: Maintains company tone and values
- **Mobile Friendly**: Works perfectly on all devices
- **SEO Optimized**: Proper semantic HTML and accessibility

## 🔧 Customization

### Change Chatbot Behavior
Edit `/pages/api/chat.js` - modify the `systemPrompt` variable to:
- Change personality
- Add/remove service information
- Adjust response guidelines

### Change Appearance
Edit `/components/AIChatbot.js` to customize:
- Colors (currently uses accent-gold and primary-700)
- Button position (currently bottom-right)
- Message styling
- Animations

## 🐛 Troubleshooting

**Chatbot not showing?**
- Check `.env.local` has the correct API key
- Restart dev server: `npm run dev`
- Clear browser cache

**Getting errors?**
- Check browser console (F12)
- Verify API key is valid
- Ensure all dependencies installed: `npm install`

**Slow responses?**
- Check internet connection
- Verify API quota hasn't been exceeded
- Check network tab in browser DevTools

## 📊 API Key Details

Your Gemini API Key:
- **Key**: AIzaSyB81L67oNlBNxMmcpqHeqY6kywsttiIJLw
- **Project**: luxury-constructions
- **Project ID**: projects/1022414535370
- **Project Number**: 1022414535370

## 🔐 Security Notes

✅ API key is in `.env.local` (not committed to git)
✅ API calls go through Next.js backend
✅ `.env.local` is in `.gitignore`

⚠️ For production:
- Set environment variables in hosting platform
- Monitor API usage and costs
- Consider implementing rate limiting
- Add authentication if needed

## 📚 Files Created/Modified

**New Files:**
- `components/AIChatbot.js` - Chatbot UI component
- `pages/api/chat.js` - API endpoint for Gemini
- `AI_CHATBOT_SETUP.md` - Detailed setup guide
- `QUICK_START_CHATBOT.md` - This file

**Modified Files:**
- `pages/_app.js` - Added AIChatbot component
- `package.json` - Added @google/generative-ai dependency
- `.env.example` - Added GEMINI_API_KEY example
- `styles/globals.css` - Added slideUp animation

## 🎯 Next Steps

1. ✅ Add `.env.local` with API key
2. ✅ Run `npm install`
3. ✅ Start dev server: `npm run dev`
4. ✅ Test chatbot at http://localhost:3000
5. ✅ Deploy to production with environment variables set

## 💡 Tips

- The chatbot learns from conversation history
- It's trained to recommend free estimates
- It mentions licensing and insurance
- It highlights local expertise in Salt Lake City

## 📞 Support

For detailed information, see `AI_CHATBOT_SETUP.md`

Enjoy your new AI assistant! 🤖
