const express = require('express')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const { visitorConfirmation, ownerNotification } = require('../emails/templates')

const router = express.Router()

const msgSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 120 },
  email:   { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  sentAt:  { type: Date, default: Date.now },
})
const Message = mongoose.model('Message', msgSchema)

function makeTransport() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASS
  if (!user || !pass) return null

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    if (!emailRe.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const doc = new Message({ name: name.trim(), email: email.trim(), message: message.trim() })
    await doc.save()

    const transport = makeTransport()
    if (transport) {
      const owner = process.env.GMAIL_USER

      await Promise.all([
        transport.sendMail({
          from: `"Ravi Joshi · Portfolio" <${owner}>`,
          to: email.trim(),
          replyTo: owner,
          subject: `Got your message, ${name.trim()}! — Ravi Joshi`,
          html: visitorConfirmation({ name: name.trim(), message: message.trim() }),
        }),
        transport.sendMail({
          from: `"Portfolio Contact Form" <${owner}>`,
          to: owner,
          replyTo: email.trim(),
          subject: `📬 New enquiry from ${name.trim()} via ravi.dev`,
          html: ownerNotification({ name: name.trim(), email: email.trim(), message: message.trim() }),
        }),
      ])
    }

    res.status(201).json({ ok: true })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

module.exports = router
