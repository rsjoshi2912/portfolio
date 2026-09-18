import { useEffect, useRef, useState } from 'react'
import { meta } from '../../data/portfolio'

const API = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
const FORM_ENABLED =
  import.meta.env.VITE_CONTACT_FORM_ENABLED === 'true' && Boolean(API)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const copyTimer = useRef(null)
  useEffect(() => () => clearTimeout(copyTimer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(meta.email)
      setCopied(true)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 3000)
    } catch {
      setStatus('copy-error')
    }
  }

  async function submit(event) {
    event.preventDefault()
    if (status === 'sending') return
    if (!form.name.trim() || !form.message.trim()) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const response = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Message could not be sent')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <div className="eyebrow">
          <span className="status-dot" /> HAVE SOMETHING IN MIND?
        </div>
        <div className="contact-heading">
          <h2>
            Good things start
            <br />
            with a <span className="serif">conversation.</span>
          </h2>
          <span className="contact-flower" aria-hidden="true">
            ✳
          </span>
        </div>
        <p className="contact-description">
          A project, an opportunity, or a shared curiosity.
          <br />
          I’d love to hear what you’re thinking.
        </p>
        <div className="contact-actions">
          <a className="button button-lime" href={`mailto:${meta.email}`}>
            Say hello <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-social"
            href={meta.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Find me on LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-social"
            href="https://github.com/rsjoshi2912"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-bottom">
          <div className="email-copy">
            <a href={`mailto:${meta.email}`}>{meta.email}</a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V4H4v12h4" />
              </svg>
              <span aria-live="polite">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          {FORM_ENABLED && (
            <button
              className="form-toggle"
              aria-expanded={showForm}
              aria-controls="contact-form"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Close the note' : 'Or leave a little note'}{' '}
              <span aria-hidden="true">{showForm ? '−' : '+'}</span>
            </button>
          )}
        </div>
        {FORM_ENABLED && (
          <div id="contact-form" hidden={!showForm}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <label htmlFor="contact-name">
                  Your name
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    placeholder="What should I call you?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label htmlFor="contact-email">
                  Your email
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    placeholder="So I can write back"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </label>
              </div>
              <label htmlFor="contact-message">
                What’s on your mind?
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={2000}
                  placeholder="Tell me a little about it…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </label>
              <button
                className="button button-lime"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Sending your note…'
                  : 'Send your note ↗'}
              </button>
            </form>
          </div>
        )}
        <div className="contact-status" role="status">
          {status === 'success' &&
            'Your note is on its way. Thanks for reaching out!'}
          {status === 'error' && (
            <>
              Your note couldn’t be sent. It’s still here, so you can try again
              or <a href={`mailto:${meta.email}`}>email me directly</a>.
            </>
          )}
          {status === 'invalid' &&
            'Please add your name and a message before sending.'}
          {status === 'copy-error' &&
            'Copy didn’t work this time. You can select the email address above or click it to say hello.'}
        </div>
      </div>
    </section>
  )
}
