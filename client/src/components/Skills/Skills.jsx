import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skills } from '../../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <div className={`section-label reveal`}>Technical Skills</div>
        <h2 className={`section-title reveal`} style={{ transitionDelay: '0.05s' }}>
          The tools I <span className="gradient-text">master</span>
        </h2>

        <div className={styles.grid}>
          {skills.map((cat, i) => (
            <div
              key={cat.name}
              className={`${styles.category} reveal`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className={styles.header}>
                <div className={styles.icon} style={{ background: cat.color }}>
                  {cat.icon}
                </div>
                <span className={styles.name}>{cat.name}</span>
              </div>
              <div className={styles.tags}>
                {cat.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${styles.tag} ${tag.hot ? styles.hot : ''}`}
                  >
                    {tag.hot && <span className={styles.hotDot} aria-hidden="true" />}
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
