import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })
const app = express()
app.use(cors({
  origin: ['https://prynia.com', 'https://www.prynia.com'],
}))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net', 
  port: 587,
  secure: false,
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
app.listen(PORT, () => console.log(`Server running on port:${PORT}`))