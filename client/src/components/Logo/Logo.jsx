import styles from './Logo.module.css'

export default function Logo() {
  return (
    <a href="#hero" className={styles.logo}>
      <div className={styles.iconWrap}>
        <svg
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="lg2" x1="52" y1="0" x2="0" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer hexagon */}
          <polygon
            points="26,2 48,14 48,38 26,50 4,38 4,14"
            stroke="url(#lg1)"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
            filter="url(#glow)"
            className={styles.hexOuter}
          />

          {/* Inner hexagon (rotated) */}
          <polygon
            points="26,8 43,18 43,34 26,44 9,34 9,18"
            stroke="url(#lg2)"
            strokeWidth="0.8"
            fill="none"
            strokeLinejoin="round"
            className={styles.hexInner}
          />

          {/* RJ monogram */}
          <text
            x="26"
            y="31"
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="15"
            fontWeight="700"
            fill="url(#lg1)"
            filter="url(#glow)"
          >
            RJ
          </text>

          {/* Corner dots */}
          <circle cx="26" cy="2" r="2" fill="url(#lg1)" opacity="0.8" />
          <circle cx="48" cy="14" r="2" fill="url(#lg1)" opacity="0.6" />
          <circle cx="48" cy="38" r="2" fill="url(#lg1)" opacity="0.6" />
          <circle cx="26" cy="50" r="2" fill="url(#lg1)" opacity="0.8" />
          <circle cx="4" cy="38" r="2" fill="url(#lg1)" opacity="0.6" />
          <circle cx="4" cy="14" r="2" fill="url(#lg1)" opacity="0.6" />
        </svg>
      </div>
      <div className={styles.text}>
        <span className={styles.name}>ravi</span>
        <span className={styles.domain}>.dev</span>
      </div>
    </a>
  )
}
