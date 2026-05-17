import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className="container">
        <div className="section-label reveal">Work History</div>
        <h2 className="section-title reveal" style={{ transitionDelay: '0.05s' }}>
          Where I've <span className="gradient-text">worked</span>
        </h2>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`${styles.item} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div>
                    <div className={styles.company}>{job.company}</div>
                    <div className={styles.role}>{job.role}</div>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>

                <div className={styles.projects}>
                  {job.projects.map((proj) => (
                    <div key={proj.name} className={styles.project}>
                      <div className={styles.projName}>{proj.name}</div>
                      <ul className={styles.bullets}>
                        {proj.bullets.map((b) => (
                          <li key={b}>{b}</li>
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
