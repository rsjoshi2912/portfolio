const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const msgSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 120 },
  email:   { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  sentAt:  { type: Date, default: Date.now },
})

const Message = mongoose.model('Message', msgSchema)

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const doc = new Message({ name, email, message })
    await doc.save()

    res.status(201).json({ ok: true })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

module.exports = router
