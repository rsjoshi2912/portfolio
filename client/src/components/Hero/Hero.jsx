import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTypewriter } from '../../hooks/useTypewriter'
import { heroRoles, heroStats, meta } from '../../data/portfolio'
import ParticleCanvas from './ParticleCanvas'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useScrollReveal()
  const typed = useTypewriter(heroRoles)

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <ParticleCanvas />

      {/* Ambient blobs */}
      <div className={styles.blobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.badge} reveal`}>
            <span className={styles.dot} />
            Open to new opportunities &nbsp;·&nbsp; {meta.location}
          </div>

          <h1 className={`${styles.name} reveal`} style={{ transitionDelay: '0.05s' }}>
            Ravi <span className="gradient-text">Joshi</span>
          </h1>

          <div className={`${styles.role} reveal`} style={{ transitionDelay: '0.1s' }}>
            <span>I build&nbsp;</span>
            <span className={styles.typed}>{typed}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </div>

          <p className={`${styles.desc} reveal`} style={{ transitionDelay: '0.15s' }}>
            Senior Full-Stack Developer &amp; AEM Specialist with{' '}
            <strong>6+ years</strong> building enterprise web applications,
            content platforms, and cloud-native solutions for industry leaders
            like{' '}
            <strong>LinkedIn, Visa, Blue Shield of California</strong>, and{' '}
            <strong>Royal Caribbean</strong>.
          </p>

          <div className={`${styles.ctas} reveal`} style={{ transitionDelay: '0.2s' }}>
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
          </div>

          <div className={`${styles.stats} reveal`} style={{ transitionDelay: '0.25s' }}>
            {heroStats.map(({ number, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{number}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
