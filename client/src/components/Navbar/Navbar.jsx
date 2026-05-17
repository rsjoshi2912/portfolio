import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'

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

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />

          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.link} ${active === href.slice(1) ? styles.linkActive : ''}`}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={styles.cta} onClick={close}>
                Contact
              </a>
            </li>
          </ul>

          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
