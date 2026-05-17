import { useScrollReveal } from '../../hooks/useScrollReveal'
import { education, awards } from '../../data/portfolio'
import styles from './Education.module.css'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>

          {/* Education */}
          <div>
            <div className="section-label reveal">Education</div>
            <h2 className="section-title reveal" style={{ fontSize: '1.9rem', transitionDelay: '0.05s' }}>
              Academic <span className="gradient-text">Background</span>
            </h2>
            <div className={`${styles.eduCard} reveal`} style={{ transitionDelay: '0.1s' }}>
              <div className={styles.eduTopBar} aria-hidden="true" />
              <div className={styles.eduIcon}>{education.icon}</div>
              <div className={styles.eduDegree}>{education.degree}</div>
              <div className={styles.eduUni}>{education.university}</div>
              <div className={styles.eduYear}>{education.year}</div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="section-label reveal" style={{ transitionDelay: '0.05s' }}>Recognition</div>
            <h2 className="section-title reveal" style={{ fontSize: '1.9rem', transitionDelay: '0.1s' }}>
              Awards &amp; <span className="gradient-text">Achievements</span>
            </h2>
            <div className={styles.awards}>
              {awards.map((a, i) => (
                <div
                  key={a.company}
                  className={`${styles.award} reveal`}
                  style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
                >
                  <div className={styles.awardEmoji}>{a.emoji}</div>
                  <div>
                    <div className={styles.awardCompany}>{a.company}</div>
                    <div className={styles.awardDesc}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
