import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { meta } from '../../data/portfolio'

const API = import.meta.env.VITE_API_URL || ''

const inputStyle = {
  width: '100%',
  background: 'var(--surface-2)',
  border: '1px solid var(--edge-hi)',
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '0.9rem',
  color: 'var(--fg)',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  transition: 'all 0.25s ease',
}

function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{
        fontSize: '0.82rem',
        fontWeight: 600,
        color: 'var(--fg-muted)',
        letterSpacing: '0.02em',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactCard({ href, icon, sub, main, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '18px 20px',
        background: 'var(--surface-2)',
        border: '1px solid var(--edge)',
        borderRadius: '14px',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)'
        e.currentTarget.style.background = 'var(--primary-dim)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--edge)'
        e.currentTarget.style.background = 'var(--surface-2)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'var(--primary-dim)',
        border: '1px solid var(--edge-hi)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', color: 'var(--fg-subtle)', marginBottom: '3px', fontWeight: 500 }}>{sub}</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--fg)', fontWeight: 600 }}>{main}</div>
      </div>
    </a>
  )
}

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--primary)'
    e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--edge-hi)'
    e.target.style.boxShadow = 'none'
  }

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
    <section
      id="contact"
      ref={ref}
      style={{ padding: '48px 0 52px', position: 'relative' }}
    >
      {/* Top gradient line */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--edge-hi), transparent)',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
        }}
          className="contact-grid"
        >
          {/* Left panel */}
          <div className="reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Let's work <span className="gradient-text">together</span>
            </h2>
            <p style={{
              color: 'var(--fg-muted)',
              lineHeight: 1.8,
              fontSize: '0.97rem',
              marginBottom: '36px',
              maxWidth: '460px',
            }}>
              Open to exciting new projects, challenging problems, or just a good
              engineering conversation. Reach out through any channel below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <ContactCard
                href={`mailto:${meta.email}`}
                icon="📧"
                sub="Email me at"
                main={meta.email}
              />
              <ContactCard
                href={meta.linkedin}
                icon="💼"
                sub="Connect on"
                main="linkedin.com/in/ravi-shanker-joshi"
                external
              />
            </div>

          </div>

          {/* Right: form */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--edge)',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            }}>
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--fg)',
                marginBottom: '28px',
              }}>
                Send a direct message
              </div>

              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name + Email row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                }} className="form-row">
                  <Field label="Name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      style={inputStyle}
                      placeholder="Your name"
                      value={form.name}
                      onChange={set}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      style={inputStyle}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                    />
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    id="message"
                    name="message"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    placeholder="What's on your mind?"
                    rows={6}
                    value={form.message}
                    onChange={set}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    height: '48px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: status === 'sending'
                      ? 'var(--surface-2)'
                      : 'linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%)',
                    color: '#ffffff',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: status === 'sending' ? 'none' : '0 0 28px rgba(99,102,241,0.28)',
                    transition: 'all 0.25s ease',
                    border: 'none',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.42)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = status !== 'sending' ? '0 0 28px rgba(99,102,241,0.28)' : 'none'
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                        style={{ animation: 'spin-slow 1s linear infinite' }}
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    background: 'rgba(74,222,128,0.08)',
                    border: '1px solid rgba(74,222,128,0.25)',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    color: 'var(--success)',
                    fontWeight: 500,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Message sent! I'll be in touch soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    background: 'rgba(250,15,0,0.08)',
                    border: '1px solid rgba(250,15,0,0.25)',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    color: 'var(--danger)',
                    fontWeight: 500,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Something went wrong. Please email me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
