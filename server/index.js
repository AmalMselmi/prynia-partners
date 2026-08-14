import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * POST /api/contact — general contact form submissions.
 */
app.post('/api/contact', async (req, res) => {
  const { name, organization, email, country, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"Prynia Partners Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      text: `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\nCountry: ${country}\n\nMessage:\n${message}`,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    res.status(500).json({ error: 'Failed to send email.' })
  }
})

/**
 * POST /api/discovery-call — discovery call requests.
 */
app.post('/api/discovery-call', async (req, res) => {
  const { name, organization, email, preferredDate, topic, language } = req.body
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"Prynia Partners Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Discovery Call Request — ${name}`,
      text: `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPreferred Date: ${preferredDate}\nTopic: ${topic}\nPreferred Language: ${language}`,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    res.status(500).json({ error: 'Failed to send email.' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))