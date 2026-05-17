import { useScrollReveal } from '../../hooks/useScrollReveal'
import { aboutHighlights, aboutStats } from '../../data/portfolio'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>

          {/* Left: text */}
          <div className={`${styles.text} reveal`}>
            <div className="section-label">About Me</div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Building the web,<br />
              <span className="gradient-text">end-to-end</span>
            </h2>
            <p className={styles.para}>
              I'm a <strong>Full-Stack Software Engineer</strong> with deep expertise in enterprise content
              platforms and modern web development. My career spans building high-traffic consumer websites
              to complex cloud migration systems.
            </p>
            <p className={styles.para}>
              My specialization in <strong>Adobe Experience Manager (AEM)</strong> — from Sites and Assets
              to AEM as a Cloud Service and AEM Guides — gives me a unique content-platform anchor, while
              my MERN stack expertise and <strong>AI-assisted development</strong> skills keep me at the
              cutting edge.
            </p>
            <p className={styles.para}>
              I've delivered solutions for <strong>LinkedIn, Visa, Kellogg's, Blue Shield of
              California</strong>, and <strong>Royal Caribbean</strong>, owning full cycles from
              architecture through production release.
            </p>

            <div className={styles.highlights}>
              {aboutHighlights.map(({ icon, label }) => (
                <div key={label} className={styles.highlight}>
                  <div className={styles.highlightIcon}>{icon}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat cards */}
          <div className={`${styles.cards} reveal`} style={{ transitionDelay: '0.15s' }}>
            {aboutStats.map(({ icon, number, label }) => (
              <div key={label} className={styles.card}>
                <div className={styles.cardBg} aria-hidden="true" />
                <span className={styles.cardIcon}>{icon}</span>
                <span className={styles.cardNum}>{number}</span>
                <span className={styles.cardLabel}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
