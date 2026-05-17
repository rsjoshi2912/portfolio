require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

const allowedOrigins = [
  'https://ravjoshi.github.io',
  'http://localhost:5173',
  'http://localhost:4173',
]

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
    cb(new Error('CORS: origin not allowed'))
  },
}))

app.use(express.json({ limit: '16kb' }))

app.get('/health', (_req, res) => res.json({ status: 'ok' }))

app.use('/api/contact', require('./routes/contact'))

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGODB_URI

if (!MONGO_URI) {
  console.error('MONGODB_URI not set. Exiting.')
  process.exit(1)
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
