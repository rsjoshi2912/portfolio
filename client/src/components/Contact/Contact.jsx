import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { meta } from '../../data/portfolio'
import styles from './Contact.module.css'

const API = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className="container">
        <div className={`section-label ${styles.centered} reveal`}>Get In Touch</div>
        <h2 className={`section-title ${styles.centered} reveal`} style={{ transitionDelay: '0.05s' }}>
          Let's work <span className="gradient-text">together</span>
        </h2>
        <p className={`${styles.subtitle} reveal`} style={{ transitionDelay: '0.1s' }}>
          Open to exciting new projects, challenging problems, or just a good engineering conversation.
          Reach out through any channel below.
        </p>

        {/* Contact cards */}
        <div className={`${styles.cards} reveal`} style={{ transitionDelay: '0.15s' }}>
          <a href={`mailto:${meta.email}`} className={styles.card}>
            <span className={styles.cardIcon}>📧</span>
            <div>
              <span className={styles.cardSub}>Email me at</span>
              <span className={styles.cardMain}>{meta.email}</span>
            </div>
          </a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <span className={styles.cardIcon}>💼</span>
            <div>
              <span className={styles.cardSub}>Connect on</span>
              <span className={styles.cardMain}>linkedin.com/in/ravi-shanker-joshi</span>
            </div>
          </a>
        </div>

        {/* Contact form */}
        <form
          className={`${styles.form} reveal`}
          style={{ transitionDelay: '0.2s' }}
          onSubmit={submit}
          noValidate
        >
          <div className={styles.formTitle}>Or send a direct message</div>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={set}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={form.email}
                onChange={set}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="What's on your mind?"
              rows={5}
              value={form.message}
              onChange={set}
              required
            />
          </div>

          {status === 'success' && (
            <div className={styles.success}>Message sent! I'll get back to you shortly.</div>
          )}
          {status === 'error' && (
            <div className={styles.error}>Something went wrong. Please try emailing directly.</div>
          )}

          <button
            type="submit"
            className={`btn-primary ${styles.submit}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
            {status !== 'sending' && (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
