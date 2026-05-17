import { useScrollReveal } from '../../hooks/useScrollReveal'
import { aboutHighlights } from '../../data/portfolio'

const adobeCerts = [
  { badge: 'ACE', name: 'AEM Sites Developer' },
  { badge: 'PRO', name: 'AEM Front-End Developer' },
  { badge: 'AEP', name: 'Adobe Experience Platform' },
]

/* ── Syntax-highlighted JSON token ─────────────────────────────── */
function T({ c, children }) {
  const colors = {
    key:    'var(--accent)',
    str:    'var(--success)',
    num:    '#f59e0b',
    bool:   '#818cf8',
    punct:  'var(--fg-subtle)',
    label:  'var(--fg-muted)',
  }
  return <span style={{ color: colors[c] }}>{children}</span>
}

function ProfileCard() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--edge)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
      position: 'sticky',
      top: '80px',
    }}>
      {/* Window chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '12px 16px', borderBottom: '1px solid var(--edge)',
        background: 'var(--surface-2)',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fa5252', display: 'block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fcc419', display: 'block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#51cf66', display: 'block' }} />
        <span style={{
          marginLeft: '10px', fontSize: '0.72rem', color: 'var(--fg-subtle)',
          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em',
        }}>profile.json</span>
      </div>

      {/* Code body */}
      <div style={{
        padding: '24px 28px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.8rem',
        lineHeight: 2,
        color: 'var(--fg-muted)',
      }}>
        <div><T c="punct">{'{'}</T></div>

        <div style={{ paddingLeft: '18px' }}>
          <T c="key">"name"</T><T c="punct">: </T><T c="str">"Ravi Joshi"</T><T c="punct">,</T>
        </div>
        <div style={{ paddingLeft: '18px' }}>
          <T c="key">"role"</T><T c="punct">: </T><T c="str">"Full Stack Platform Engineer"</T><T c="punct">,</T>
        </div>
        <div style={{ paddingLeft: '18px' }}>
          <T c="key">"experience"</T><T c="punct">: </T><T c="str">"7+ years"</T><T c="punct">,</T>
        </div>
        <div style={{ paddingLeft: '18px' }}>
          <T c="key">"location"</T><T c="punct">: </T><T c="str">"Bengaluru, India"</T><T c="punct">,</T>
        </div>

        <div style={{ paddingLeft: '18px', marginTop: '4px' }}>
          <T c="key">"specialisation"</T><T c="punct">: [</T>
        </div>
        {['"AEM / Adobe Cloud"', '"React & Spring Boot"', '"Cloud Migrations"', '"Headless CMS"'].map((v, i, a) => (
          <div key={v} style={{ paddingLeft: '36px' }}>
            <T c="str">{v}</T><T c="punct">{i < a.length - 1 ? ',' : ''}</T>
          </div>
        ))}
        <div style={{ paddingLeft: '18px' }}><T c="punct">],</T></div>

        <div style={{ paddingLeft: '18px', marginTop: '4px' }}>
          <T c="key">"companies"</T><T c="punct">: [</T>
        </div>
        {['"Hashout Technologies"', '"Visa Inc."', '"Accenture"', '"Mindtree"'].map((v, i, a) => (
          <div key={v} style={{ paddingLeft: '36px' }}>
            <T c="str">{v}</T><T c="punct">{i < a.length - 1 ? ',' : ''}</T>
          </div>
        ))}
        <div style={{ paddingLeft: '18px' }}><T c="punct">],</T></div>

        <div style={{ paddingLeft: '18px', marginTop: '4px' }}>
          <T c="key">"certifications"</T><T c="punct">: </T><T c="num">3</T>
        </div>

        <div><T c="punct">{'}'}</T></div>

        {/* Blinking cursor */}
        <span style={{
          display: 'inline-block', width: '8px', height: '1.1em',
          background: 'var(--accent)', borderRadius: '1px',
          verticalAlign: 'middle', marginLeft: '2px',
          animation: 'blink 1s step-end infinite',
          opacity: 0.8,
        }} />
      </div>

      {/* Bottom status bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        padding: '8px 16px', borderTop: '1px solid var(--edge)',
        background: 'var(--surface-2)',
        fontSize: '0.65rem', fontFamily: "'JetBrains Mono', monospace",
        color: 'var(--fg-subtle)',
      }}>
        <span>JSON · UTF-8</span>
      </div>
    </div>
  )
}

export default function About() {
  const ref = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '48px 0 52px', position: 'relative' }}
    >
      {/* Top gradient line */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--edge-hi), transparent)',
      }} />

      <div className="container">
        <div className="about-grid">

          {/* Left: text */}
          <div className="reveal" style={{ minWidth: 0 }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Building the web,{' '}
              <span className="gradient-text">end-to-end</span>
            </h2>

            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.85, marginBottom: '16px', fontSize: '0.97rem' }}>
              I'm a <strong style={{ color: 'var(--fg)' }}>Full Stack Platform Engineer</strong> with{' '}
              <strong style={{ color: 'var(--fg)' }}>7+ years</strong> of deep expertise in enterprise
              content platforms and modern web development — from high-traffic consumer sites to complex
              cloud migration systems.
            </p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.85, marginBottom: '16px', fontSize: '0.97rem' }}>
              My specialisation in <strong style={{ color: 'var(--fg)' }}>Adobe Experience Manager (AEM)</strong> — Sites,
              Assets, AEM as a Cloud Service, and AEM Guides — gives me a unique content-platform anchor,
              while my React/Spring Boot stack and <strong style={{ color: 'var(--fg)' }}>AI-assisted development</strong> keep
              me at the cutting edge.
            </p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.85, marginBottom: '32px', fontSize: '0.97rem' }}>
              I've delivered enterprise solutions at{' '}
              <strong style={{ color: 'var(--fg)' }}>Hashout Technologies, Visa, Accenture</strong>, and{' '}
              <strong style={{ color: 'var(--fg)' }}>Mindtree</strong> — owning full cycles from
              architecture through production release.
            </p>

            {/* Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '32px',
            }}>
              {aboutHighlights.map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '8px',
                    background: 'var(--primary-dim)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Adobe cert strip */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
              padding: '14px 18px', background: 'var(--surface-2)',
              border: '1px solid var(--edge)', borderRadius: '12px',
            }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--primary-light)',
                fontFamily: "'JetBrains Mono', monospace", marginRight: '4px', whiteSpace: 'nowrap',
              }}>
                3× Adobe Certified
              </span>
              {adobeCerts.map((c) => (
                <div key={c.badge} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'var(--primary-dim)', border: '1px solid var(--edge-hi)',
                  borderRadius: '6px', padding: '5px 10px',
                }}>
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 800, color: 'var(--primary-light)',
                    letterSpacing: '0.06em', fontFamily: "'JetBrains Mono', monospace",
                  }}>{c.badge}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--fg-muted)' }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile card */}
          <div className="reveal about-card-col" style={{ transitionDelay: '0.12s' }}>
            <ProfileCard />
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (min-width: 860px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        @media (max-width: 859px) {
          .about-card-col { order: -1; }
        }
      `}</style>
    </section>
  )
}
