import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTypewriter } from '../../hooks/useTypewriter'
import { heroRoles, heroStats, meta } from '../../data/portfolio'
import ParticleCanvas from './ParticleCanvas'

/* ── small inline components ──────────────────────────────────── */

function AdobeMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M58.5 0H100V100L58.5 0Z" fill="#fa0f00" />
      <path d="M41.5 0H0V100L41.5 0Z" fill="#fa0f00" />
      <path d="M50 37.3L74.1 100H57.8L50.9 81.5H34.1L50 37.3Z" fill="white" />
    </svg>
  )
}

/* ── chip component ───────────────────────────────────────────── */
function Chip({ style, delay = 0, children }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        background: 'var(--surface)',
        border: '1px solid var(--edge-hi)',
        borderRadius: '14px',
        padding: '10px 14px',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        animation: `float-chip 3.5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 3,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ── main export ──────────────────────────────────────────────── */
export default function Hero() {
  const ref = useScrollReveal()
  const typed = useTypewriter(heroRoles)

  return (
    <section
      id="hero"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
    >
      <ParticleCanvas />

      {/* Blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        {[
          { w: 700, h: 700, color: 'rgba(99,102,241,0.16)', top: '-280px', left: '-180px', delay: '0s' },
          { w: 500, h: 500, color: 'rgba(34,211,238,0.11)', bottom: '-100px', right: '-80px', delay: '3s' },
          { w: 380, h: 380, color: 'rgba(168,85,247,0.1)', top: '40%', left: '50%', delay: '1.5s', extra: { transform: 'translate(-50%,-50%)' } },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: b.w, height: b.h,
            background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(100px)',
            top: b.top, left: b.left, bottom: b.bottom, right: b.right,
            animation: 'float 9s ease-in-out infinite',
            animationDelay: b.delay,
            ...b.extra,
          }} />
        ))}
      </div>

      {/* Grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">

          {/* ── LEFT: text ────────────────────────────────────── */}
          <div className="hero-text">

            {/* Name */}
            <h1 className="reveal" style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
              fontWeight: 900, lineHeight: 1.04,
              letterSpacing: '-0.03em', marginBottom: '12px',
              transitionDelay: '0.05s',
            }}>
              Ravi <span className="gradient-text">Joshi</span>
            </h1>

            {/* Static title */}
            <div className="reveal" style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              fontWeight: 500, color: 'var(--fg-subtle)',
              marginBottom: '20px', letterSpacing: '0.01em',
              transitionDelay: '0.08s',
            }}>
              Full Stack Platform Engineer &nbsp;·&nbsp; AEM Specialist &nbsp;·&nbsp; 3× Adobe Certified
            </div>

            {/* Typewriter */}
            <div className="reveal" style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              fontWeight: 500, color: 'var(--fg-muted)',
              marginBottom: '28px', display: 'flex',
              alignItems: 'center', flexWrap: 'wrap', gap: '4px',
              minHeight: '2.1em', transitionDelay: '0.11s',
            }}>
              <span>I build&nbsp;</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{typed}</span>
              <span aria-hidden="true" style={{
                display: 'inline-block', width: '2px', height: '1em',
                background: 'var(--accent)', animation: 'blink 1s step-end infinite',
                verticalAlign: 'middle', marginLeft: '2px', borderRadius: '1px',
              }} />
            </div>

            {/* Description */}
            <p className="reveal" style={{
              maxWidth: '560px', fontSize: '0.97rem',
              color: 'var(--fg-muted)', lineHeight: 1.88,
              marginBottom: '40px', transitionDelay: '0.14s',
            }}>
              Enterprise-grade web engineering with{' '}
              <strong style={{ color: 'var(--fg)' }}>7+ years</strong> delivering content platforms,
              cloud migrations, and React/Spring Boot systems at{' '}
              <strong style={{ color: 'var(--fg)' }}>Hashout, Visa, Accenture & Mindtree</strong>.
            </p>

            {/* CTAs */}
            <div className="reveal" style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap',
              marginBottom: '52px', transitionDelay: '0.17s',
            }}>
              <a href="#experience" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                View Experience
              </a>
              <a href="#contact" className="btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get In Touch
              </a>
              <a href="/portfolio/assets/resume.pdf" download="Ravi_Joshi_Resume.pdf" className="btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>

            {/* Stats */}
            <div className="reveal hero-stats" style={{ transitionDelay: '0.2s' }}>
              {heroStats.map(({ number, label }, i) => (
                <div key={label} className="hero-stat-item">
                  {i > 0 && (
                    <div aria-hidden="true" style={{
                      width: '1px', height: '36px',
                      background: 'var(--edge-hi)', flexShrink: 0,
                    }} />
                  )}
                  <div>
                    <div style={{
                      fontSize: '1.9rem', fontWeight: 900, lineHeight: 1,
                      background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text', marginBottom: '4px',
                    }}>
                      {number}
                    </div>
                    <div style={{
                      fontSize: '0.68rem', color: 'var(--fg-subtle)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: profile image ───────────────────────────── */}
          <div className="hero-photo-col reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="hero-photo-wrap">

              {/* Outer ambient glow */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: '-60px', borderRadius: '50%', zIndex: 0,
                background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)',
                animation: 'glow-pulse 4s ease-in-out infinite',
                pointerEvents: 'none',
              }} />

              {/* Spinning gradient ring */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: '-4px', borderRadius: '50%', zIndex: 1,
                background: 'conic-gradient(from 0deg, #6366f1 0%, #22d3ee 30%, #818cf8 55%, rgba(99,102,241,0.15) 75%, #6366f1 100%)',
                animation: 'ring-rotate 8s linear infinite',
              }} />

              {/* Gap ring */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: '3px', borderRadius: '50%',
                background: 'var(--bg)', zIndex: 2,
              }} />

              {/* Photo */}
              <div style={{
                position: 'absolute', inset: '8px', borderRadius: '50%',
                overflow: 'hidden', zIndex: 3,
              }}>
                <img
                  src="/portfolio/assets/profile.jpg"
                  alt="Ravi Joshi — Full Stack Platform Engineer"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 12%',
                    filter: 'contrast(1.04) saturate(0.92) brightness(1.01)',
                  }}
                />
                {/* Subtle vignette overlay for blending */}
                <div aria-hidden="true" style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at center, transparent 55%, rgba(6,6,14,0.25) 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* ── Floating chip: Experience ────────────────── */}
              <Chip style={{ bottom: '-14px', left: '-28px' }} delay={0}>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1, marginBottom: '3px',
                  background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>7+</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--fg-muted)', fontFamily: "'JetBrains Mono',monospace",
                  textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Exp</div>
              </Chip>

              {/* ── Floating chip: Adobe Certified ───────────── */}
              <Chip style={{ top: '-12px', right: '-32px', border: '1px solid rgba(250,15,0,0.22)' }} delay={1.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <AdobeMark />
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--fg)', lineHeight: 1.2 }}>3× Certified</div>
                    <div style={{ fontSize: '0.58rem', color: '#fa5050', fontFamily: "'JetBrains Mono',monospace",
                      textTransform: 'uppercase', letterSpacing: '0.08em' }}>Adobe Expert</div>
                  </div>
                </div>
              </Chip>

              {/* ── Floating chip: Projects ───────────────────── */}
              <Chip style={{ bottom: '30px', right: '-38px' }} delay={0.5}>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, lineHeight: 1, marginBottom: '3px',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>10+</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--fg-muted)', fontFamily: "'JetBrains Mono',monospace",
                  textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise<br />Projects</div>
              </Chip>

            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive styles ─────────────────────────────────── */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
          min-height: 100vh;
          padding: 140px 0 100px;
        }
        .hero-text { min-width: 0; }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .hero-photo-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-photo-wrap {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Tablet ─────────────────── */
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            padding: 130px 0 90px;
          }
          .hero-photo-wrap { width: 260px; height: 260px; }
        }

        /* ── Mobile ─────────────────── */
        @media (max-width: 680px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 110px 0 80px;
            text-align: center;
          }
          .hero-photo-col { order: -1; margin-bottom: 8px; }
          .hero-photo-wrap { width: 210px; height: 210px; }
          .hero-stats { justify-content: center; gap: 20px; }
          .hero-stat-item { gap: 20px; }
        }
      `}</style>
    </section>
  )
}
