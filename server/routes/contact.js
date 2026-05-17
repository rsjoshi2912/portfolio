const express = require('express')
const mongoose = require('mongoose')
const { Resend } = require('resend')
const { visitorConfirmation, ownerNotification } = require('../emails/templates')

const router = express.Router()

const msgSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 120 },
  email:   { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  sentAt:  { type: Date, default: Date.now },
})
const Message = mongoose.model('Message', msgSchema)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const OWNER = 'ravishankerjoshi20@gmail.com'

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    if (!emailRe.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const n = name.trim(), e = email.trim(), m = message.trim()

    await new Message({ name: n, email: e, message: m }).save()

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await Promise.all([
        resend.emails.send({
          from: 'Ravi Joshi <onboarding@resend.dev>',
          to: [e],
          replyTo: OWNER,
          subject: `Got your message, ${n}! — Ravi Joshi`,
          html: visitorConfirmation({ name: n, message: m }),
        }),
        resend.emails.send({
          from: 'Portfolio Form <onboarding@resend.dev>',
          to: [OWNER],
          replyTo: e,
          subject: `📬 New enquiry from ${n} via ravi.dev`,
          html: ownerNotification({ name: n, email: e, message: m }),
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
