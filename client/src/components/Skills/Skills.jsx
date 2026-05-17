import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skills } from '../../data/portfolio'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '48px 0 52px', position: 'relative' }}
    >
      <div className="container">
        <div className="section-label reveal">Technical Skills</div>
        <h2 className="section-title reveal" style={{ transitionDelay: '0.05s' }}>
          The tools I <span className="gradient-text">master</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {skills.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--edge)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'default',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--edge-hi)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = 'var(--glow-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--edge)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}>
                  {cat.icon}
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--fg)' }}>{cat.name}</span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {cat.tags.map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      padding: '5px 12px',
                      borderRadius: '100px',
                      cursor: 'default',
                      background: tag.hot ? 'var(--accent-dim)' : 'rgba(99,102,241,0.05)',
                      border: tag.hot ? '1px solid rgba(34,211,238,0.2)' : '1px solid var(--edge)',
                      color: tag.hot ? 'var(--accent)' : 'var(--fg-muted)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tag.hot && (
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        animation: 'pulse-dot 2s ease-in-out infinite',
                      }} aria-hidden="true" />
                    )}
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
