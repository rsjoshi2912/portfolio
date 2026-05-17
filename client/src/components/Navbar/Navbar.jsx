import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: '60px',
    background: scrolled
      ? 'color-mix(in srgb, var(--surface) 85%, transparent)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--edge)' : '1px solid transparent',
    transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
  }

  const innerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    gap: '16px',
  }

  const linksListStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    listStyle: 'none',
  }

  const getLinkStyle = (href) => ({
    fontSize: '0.85rem',
    fontWeight: 500,
    color: active === href.slice(1) ? 'var(--fg)' : 'var(--fg-muted)',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    borderBottom: active === href.slice(1) ? '2px solid var(--primary)' : '2px solid transparent',
    position: 'relative',
  })

  const ctaStyle = {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--fg)',
    padding: '7px 14px',
    borderRadius: '7px',
    border: '1px solid var(--edge-hi)',
    transition: 'all 0.25s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  }

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }

  const burgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    width: '38px',
    height: '38px',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--surface-2)',
    border: '1px solid var(--edge-hi)',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 60,
  }

  const mobileMenuStyle = {
    position: 'fixed',
    top: '60px',
    left: 0,
    right: 0,
    background: 'var(--surface)',
    borderBottom: '1px solid var(--edge)',
    padding: '16px 0 20px',
    transform: open ? 'translateY(0)' : 'translateY(-110%)',
    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
    zIndex: 49,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  }

  return (
    <>
      <nav style={navStyle}>
        <div className="container">
          <div style={innerStyle}>
            <Logo />

            {/* Desktop links */}
            <ul style={linksListStyle} className="nav-desktop-links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={getLinkStyle(href)}
                    onClick={close}
                    onMouseEnter={(e) => {
                      if (active !== href.slice(1)) {
                        e.currentTarget.style.color = 'var(--fg)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (active !== href.slice(1)) {
                        e.currentTarget.style.color = 'var(--fg-muted)'
                      }
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div style={rightStyle}>
              <span className="nav-theme-desktop"><ThemeToggle /></span>
              <a
                href="#contact"
                style={ctaStyle}
                className="nav-cta"
                onClick={close}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-dim)'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'var(--edge-hi)'
                }}
              >
                Contact
              </a>
              {/* Hamburger */}
              <button
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle menu"
                style={{ ...burgerStyle, display: 'flex' }}
                className="nav-burger"
              >
                <span style={{
                  display: 'block',
                  width: '18px',
                  height: '1.5px',
                  background: 'var(--fg)',
                  transition: 'all 0.3s ease',
                  transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block',
                  width: '18px',
                  height: '1.5px',
                  background: 'var(--fg)',
                  transition: 'all 0.3s ease',
                  opacity: open ? 0 : 1,
                }} />
                <span style={{
                  display: 'block',
                  width: '18px',
                  height: '1.5px',
                  background: 'var(--fg)',
                  transition: 'all 0.3s ease',
                  transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={mobileMenuStyle} className="nav-mobile-menu">
        <div className="container">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: active === href.slice(1) ? 'var(--primary-light)' : 'var(--fg-muted)',
                    borderRadius: '8px',
                    background: active === href.slice(1) ? 'var(--primary-dim)' : 'transparent',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={close}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--primary-light)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div style={{ marginTop: '16px', paddingLeft: '16px' }}>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .nav-burger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-theme-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
