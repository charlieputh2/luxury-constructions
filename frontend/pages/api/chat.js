// Comprehensive knowledge base for Luxury Construction
const knowledgeBase = {
  landscaping: {
    title: "Landscaping Design & Install",
    overview: "Transform your outdoor space with professional landscaping design and installation services.",
    services: [
      "Site Planning & Design Consultation - Expert analysis and custom design for your property",
      "Engineering & Permit Acquisition - Complete engineering support and permit handling",
      "Premium Pavers - Belgard Premium Pavers, Natural Stone (Flagstone, Granite), and Brick options",
      "Custom Planting Design - Seasonal plants and custom planting layouts",
      "Planter Box Installation - Custom-built and installed planter boxes",
      "Sprinkler Systems - Professional installation, relocation, and maintenance of irrigation systems"
    ],
    keywords: ['landscap', 'outdoor', 'garden', 'paver', 'plant', 'sprinkler', 'design', 'install']
  },
  concrete: {
    title: "Concrete Work",
    overview: "Expert concrete solutions for residential and commercial properties with premium finishes.",
    services: [
      "Driveways & Walkways - Standard, decorative, stamped, and colored concrete options",
      "Outdoor Steps & Stairs - Custom design with safety features and durable materials",
      "Hot Tub Pads - Specialized concrete foundations for hot tubs",
      "Walkout Basements - Professional concrete work for basement installations",
      "Sports Courts - Basketball, pickleball, and multi-sport court construction",
      "Heated Driveway/Walkway Systems - Advanced heated concrete for year-round accessibility"
    ],
    keywords: ['concrete', 'driveway', 'walkway', 'patio', 'step', 'stair', 'court', 'heated', 'basement']
  },
  remodeling: {
    title: "Home Remodels",
    overview: "Complete home remodeling services including basements, bathrooms, siding, roofing, and more.",
    services: [
      "Full Basement Remodels - Complete basement transformation and finishing",
      "Full Bathroom Remodels - Modern bathroom design and installation",
      "Siding Options - Vinyl, wood, metal, and composite siding materials",
      "Roofing - Asphalt shingles, metal roofing, wood shingles, slate, and composite options",
      "Gutters - Metal and vinyl gutter systems with professional installation",
      "Custom Home Renovations - Tailored remodeling solutions for any room"
    ],
    keywords: ['remodel', 'bathroom', 'basement', 'siding', 'roof', 'gutter', 'renovation', 'home']
  },
  company: {
    licensed: "Yes, Luxury Construction is fully licensed and insured. Your project is protected by our professional credentials and comprehensive insurance coverage.",
    location: "We are based in Salt Lake City, UT, and serve the greater Salt Lake City area. We have deep expertise in local climate conditions and building codes.",
    estimate: "We offer free estimates for all projects. Contact us to schedule a consultation with our team to discuss your specific needs and receive a detailed quote.",
    experience: "With decades of combined experience across all specialties, our team delivers exceptional quality on every project.",
    guarantee: "We guarantee customer satisfaction with transparent pricing, reliable timelines, and professional workmanship."
  }
}

const getSmartResponse = (message, askedQuestions = []) => {
  const lowerMessage = message.toLowerCase()
  
  // Check for specific service inquiries
  for (const [key, service] of Object.entries(knowledgeBase)) {
    if (key !== 'company' && service.keywords.some(kw => lowerMessage.includes(kw))) {
      // Provide detailed service information
      const servicesList = service.services.slice(0, 3).join(', ')
      return `${service.title}: ${service.overview} We offer ${servicesList}, and more. What specific aspect interests you?`
    }
  }
  
  // Check for company information
  if (lowerMessage.includes('license') || lowerMessage.includes('insure')) {
    return knowledgeBase.company.licensed
  }
  if (lowerMessage.includes('location') || lowerMessage.includes('salt lake') || lowerMessage.includes('where')) {
    return knowledgeBase.company.location
  }
  if (lowerMessage.includes('estimate') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
    return knowledgeBase.company.estimate
  }
  if (lowerMessage.includes('experience') || lowerMessage.includes('expert') || lowerMessage.includes('quality')) {
    return knowledgeBase.company.experience
  }
  if (lowerMessage.includes('guarantee') || lowerMessage.includes('satisfaction') || lowerMessage.includes('promise')) {
    return knowledgeBase.company.guarantee
  }
  
  // Check for general service inquiry
  if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you') || lowerMessage.includes('help')) {
    return "We specialize in three main areas: Landscaping Design & Install (outdoor transformations with pavers, plants, and irrigation), Concrete Work (driveways, patios, sports courts, and heated systems), and Home Remodels (basements, bathrooms, siding, roofing). Which area interests you most?"
  }
  
  // Default response
  return "I'm here to help! I can provide information about our Landscaping Design & Install, Concrete Work, and Home Remodeling services. Feel free to ask about specific projects, pricing, our experience, or how to get started. What would you like to know?"
}

const systemPrompt = `You are a professional AI assistant for Luxury Construction, a luxury general contracting business in Salt Lake City, UT. 

Our specialties are:
1. Landscaping Design & Install - Including permits, plans, designs, engineering, pavers (Belgard Premium, Natural Stone, Brick), plants/planter boxes, and sprinkler systems
2. Concrete Work - Including driveways, walkways, outdoor steps, hot tub pads, walkout basements, sports courts (basketball, pickleball, multi-sport), and heated driveway/walkway systems
3. Home Remodels - Including full basement remodels, full bathroom remodels, siding (vinyl, wood, metal, composite), roofing (asphalt, metal, wood, slate, composite shingles), and gutters (metal, vinyl)

Your responsibilities:
- Answer questions about our services with expertise and professionalism
- Provide information about our specialties and service offerings
- Help customers understand what we offer
- Be friendly, professional, and helpful
- Encourage customers to request a free estimate
- Mention that we are licensed and insured
- Highlight our local expertise in Salt Lake City, UT
- Keep responses concise and professional (2-3 sentences max)
- If asked about pricing, suggest they contact us for a free estimate
- If you don't know something specific, suggest they contact us directly

Always maintain a professional tone and represent Luxury Construction positively.`

export default async function handler(req, res) {
  // Set CORS headers for API requests
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, conversationHistory, askedQuestions } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Try to use Gemini API if available
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 
                   process.env.GEMINI_API_KEY ||
                   process.env.GOOGLE_GENERATIVE_AI_API_KEY

    if (apiKey) {
      try {
        const { GoogleGenerativeAI: GeminiAI } = await import('@google/generative-ai')
        const genAI = new GeminiAI(apiKey)
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

        // Build conversation history for context
        let conversationText = systemPrompt + '\n\nConversation history:\n'
        
        if (conversationHistory && Array.isArray(conversationHistory)) {
          conversationHistory.forEach((msg) => {
            const sender = msg.sender === 'user' ? 'Customer' : 'Assistant'
            conversationText += `${sender}: ${msg.text}\n`
          })
        }

        conversationText += `Customer: ${message}\nAssistant:`

        const result = await model.generateContent(conversationText)
        const response = await result.response
        const reply = response.text().trim()

        return res.status(200).json({ reply })
      } catch (geminiError) {
        console.warn('Gemini API error, using smart knowledge base:', geminiError.message)
        // Fall through to smart knowledge base responses
      }
    }

    // Use smart knowledge base responses with conversation awareness
    const reply = getSmartResponse(message, askedQuestions || [])
    return res.status(200).json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    // Return a smart response even on error
    const reply = getSmartResponse(req.body?.message || '')
    return res.status(200).json({ reply })
  }
}
