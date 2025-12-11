import nodemailer from 'nodemailer'

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'capstonee2@gmail.com',
    pass: 'iguw vcge srkw tfgt', // App password
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { fullName, email, phone, serviceType, projectDetails } = req.body

    // Validate required fields
    if (!fullName || !email || !phone || !serviceType || !projectDetails) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Validate phone format
    const phoneRegex = /^[\d\s\-\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone format' })
    }

    // Email to company
    const companyEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e5631 0%, #2d7a3e 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">New Estimate Request</h1>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #1e5631; margin-top: 0;">Customer Information</h2>
          
          <div style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #d4af37;">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>Service Type:</strong> ${serviceType}</p>
          </div>

          <h2 style="color: #1e5631;">Project Details</h2>
          <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #d4af37;">
            <p style="margin: 0; color: #333; line-height: 1.6;">${projectDetails.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
            <p>This is an automated message from Luxury Construction website.</p>
            <p>Please contact the customer within 24 hours with a personalized quote.</p>
          </div>
        </div>
      </div>
    `

    // Email to customer
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e5631 0%, #2d7a3e 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Your Estimate Request</h1>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px;">Hi ${fullName},</p>
          
          <p style="color: #333; line-height: 1.6;">
            Thank you for choosing Luxury Construction! We've received your estimate request and appreciate your interest in our services.
          </p>

          <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #d4af37;">
            <h3 style="color: #1e5631; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #333; line-height: 1.8;">
              <li>Our team will review your project details</li>
              <li>We'll contact you within 24 hours with a personalized quote</li>
              <li>We'll answer any questions you may have</li>
              <li>We'll schedule a convenient time to discuss your project</li>
            </ul>
          </div>

          <div style="background: #e8f5e9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1e5631; margin-top: 0;">Your Request Summary</h3>
            <p style="margin: 5px 0; color: #333;"><strong>Service Type:</strong> ${serviceType}</p>
            <p style="margin: 5px 0; color: #333;"><strong>Submitted:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #333; margin-bottom: 10px;">If you need to reach us sooner, feel free to call:</p>
            <p style="margin: 0;"><a href="tel:(385)227-4522" style="color: #d4af37; font-size: 18px; font-weight: bold; text-decoration: none;">(385) 227-4522</a></p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 5px 0;">Luxury Construction - Concrete & Landscaping</p>
            <p style="margin: 5px 0;">Salt Lake City, UT</p>
            <p style="margin: 5px 0;"><a href="mailto:info@luxuryconstruction.com" style="color: #d4af37; text-decoration: none;">info@luxuryconstruction.com</a></p>
          </div>
        </div>
      </div>
    `

    // Send email to company
    await transporter.sendMail({
      from: 'capstonee2@gmail.com',
      to: 'capstonee2@gmail.com',
      subject: `New Estimate Request from ${fullName}`,
      html: companyEmailContent,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: 'capstonee2@gmail.com',
      to: email,
      subject: 'We Received Your Estimate Request - Luxury Construction',
      html: customerEmailContent,
    })

    return res.status(200).json({
      message: 'Estimate request sent successfully!',
      success: true,
    })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({
      message: 'Failed to send estimate request. Please try again or call us directly.',
      error: error.message,
    })
  }
}
