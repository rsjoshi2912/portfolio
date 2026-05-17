import { useScrollReveal } from '../../hooks/useScrollReveal'
import { education, awards, certifications } from '../../data/portfolio'
import styles from './Education.module.css'

const { featured, others } = certifications
const adobeOthers = others.filter(c => c.tier.startsWith('Adobe'))
const hrOthers = others.filter(c => c.tier === 'HackerRank')

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function AdobeLogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M58.5 0H100V100L58.5 0Z" fill="#fa0f00"/>
      <path d="M41.5 0H0V100L41.5 0Z" fill="#fa0f00"/>
      <path d="M50 37.3L74.1 100H57.8L50.9 81.5H34.1L50 37.3Z" fill="white"/>
    </svg>
  )
}

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className={styles.section} ref={ref}>
      <div className="container">

        {/* Section header */}
        <div className={styles.sectionHead}>
          <div className={`section-label reveal`}>Education &amp; Credentials</div>
          <h2 className={`section-title reveal`} style={{ transitionDelay: '0.05s', marginBottom: 0 }}>
            Built on <span className="gradient-text">expertise</span>
          </h2>
        </div>

        {/* ── ACE HERO CARD ─────────────────────────────────── */}
        <div className={`${styles.aceHero} reveal`} style={{ transitionDelay: '0.12s' }}>
          {/* Dot-grid texture */}
          <div className={styles.aceTexture} aria-hidden="true" />
          {/* Corner stamp */}
          <div className={styles.aceStamp} aria-hidden="true">VERIFIED</div>

          <div className={styles.aceLayout}>
            {/* Badge */}
            <div className={styles.aceBadgeWrap}>
              <div className={styles.aceGlowRing} aria-hidden="true" />
              <img
                src={featured.badgeImg}
                alt="Adobe Certified Expert badge"
                className={styles.aceBadgeImg}
                loading="lazy"
              />
            </div>

            {/* Details */}
            <div className={styles.aceDetails}>
              <div className={styles.aceVerifiedRow}>
                <ShieldIcon />
                <span>Verified by Adobe</span>
              </div>
              <div className={styles.aceTier}>Adobe Certified Expert</div>
              <div className={styles.aceName}>{featured.name}</div>
              <div className={styles.aceMeta}>
                <span className={styles.activePill}>
                  <span className={styles.activeDot} />
                  Active
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.aceActions}>
              <a href={featured.verifyUrl} target="_blank" rel="noopener noreferrer" className={styles.btnVerify}>
                <ExternalIcon />
                Verify Credential
              </a>
              <a href={featured.pdfUrl} download className={styles.btnDownload}>
                <DownloadIcon />
                Certificate PDF
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM GRID ───────────────────────────────────── */}
        <div className={styles.bottomGrid}>

          {/* Education */}
          <div className={`${styles.colWrap} reveal`} style={{ transitionDelay: '0.18s' }}>
            <div className={styles.colLabel}>Education</div>
            <div className={styles.eduCard}>
              <div className={styles.eduBar} aria-hidden="true" />
              <div className={styles.eduEmoji}>{education.icon}</div>
              <div className={styles.eduDegree}>{education.degree}</div>
              <div className={styles.eduUni}>{education.university}</div>
              <div className={styles.eduYearTag}>{education.year}</div>
            </div>
          </div>

          {/* Other Credentials */}
          <div className={`${styles.colWrap} reveal`} style={{ transitionDelay: '0.24s' }}>
            <div className={styles.colLabel}>Other Credentials</div>

            {adobeOthers.map((c) => (
              <div key={c.name} className={styles.credCard}>
                <div className={styles.credCardBar} style={{ background: 'var(--primary)' }} aria-hidden="true" />
                <div className={styles.credCardInner}>
                  <div className={styles.credLogo}><AdobeLogoMark size={16} /></div>
                  <div>
                    <div className={styles.credTier}>{c.tier.replace('Adobe ', '')}</div>
                    <div className={styles.credName}>{c.name}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.hrSection}>
              <div className={styles.hrLabel}>
                <span className={styles.hrDotGreen} />
                HackerRank
              </div>
              <div className={styles.hrRow}>
                {hrOthers.map((c) => (
                  <div key={c.name} className={styles.hrChip}>
                    <span className={styles.hrChipName}>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className={`${styles.colWrap} reveal`} style={{ transitionDelay: '0.3s' }}>
            <div className={styles.colLabel}>Recognition</div>
            {awards.map((a) => (
              <div key={a.company} className={styles.awardCard}>
                <div className={styles.awardLeft}>
                  <span className={styles.awardEmoji}>{a.emoji}</span>
                </div>
                <div className={styles.awardRight}>
                  <div className={styles.awardCompany}>{a.company}</div>
                  <div className={styles.awardDesc}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
