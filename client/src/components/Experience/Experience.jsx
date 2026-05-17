import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/portfolio'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section
      id="experience"
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
        <div className="section-label reveal">Work History</div>
        <h2 className="section-title reveal" style={{ transitionDelay: '0.05s' }}>
          Where I've <span className="gradient-text">worked</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          {/* Vertical line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'linear-gradient(180deg, var(--primary) 0%, var(--edge) 100%)',
          }} />

          {experience.map((job, i) => (
            <div
              key={job.company}
              className="reveal"
              style={{
                position: 'relative',
                marginBottom: i < experience.length - 1 ? '32px' : '0',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Timeline dot */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                left: '-24px',
                top: '24px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--primary)',
                border: '2px solid var(--surface)',
                boxShadow: '0 0 0 3px var(--primary-dim)',
                zIndex: 1,
              }} />

              {/* Card */}
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--edge)',
                  borderRadius: '16px',
                  padding: '28px',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(6px)'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = 'var(--edge)'
                }}
              >
                {/* Card header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 900, color: 'var(--fg)', marginBottom: '4px' }}>
                      {job.company}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-light)' }}>
                      {job.role}
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    borderRadius: '100px',
                    padding: '5px 12px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {job.period}
                  </span>
                </div>

                {/* Projects */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {job.projects.map((proj) => (
                    <div
                      key={proj.name}
                      style={{
                        borderLeft: '2px solid rgba(99,102,241,0.25)',
                        paddingLeft: '16px',
                      }}
                    >
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        marginBottom: '10px',
                      }}>
                        {proj.name}
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {proj.bullets.map((b) => (
                          <li
                            key={b}
                            style={{
                              display: 'flex',
                              gap: '10px',
                              fontSize: '0.84rem',
                              color: 'var(--fg-muted)',
                              lineHeight: 1.65,
                            }}
                          >
                            <span style={{ color: 'var(--primary)', flexShrink: 0, fontSize: '0.8rem', marginTop: '2px' }}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
