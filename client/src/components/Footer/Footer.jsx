import Logo from '../Logo/Logo'

const navLinks = [
  { href: '#hero', label: 'Top' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative' }}>
      {/* Gradient separator line */}
      <div aria-hidden="true" style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        opacity: 0.35,
      }} />

      <div style={{
        padding: '32px 0',
        background: 'var(--surface)',
      }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
            className="footer-inner"
          >
            {/* Logo */}
            <Logo />

            {/* Copyright */}
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--fg-subtle)',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              © {new Date().getFullYear()} Ravi Joshi &nbsp;·&nbsp; Bengaluru, India 🇮🇳
            </p>

            {/* Nav links */}
            <ul style={{
              display: 'flex',
              gap: '4px',
              listStyle: 'none',
              flexWrap: 'wrap',
            }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--fg-subtle)',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-subtle)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-inner {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
