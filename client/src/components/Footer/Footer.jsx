import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

const links = [
  { href: '#hero', label: 'Top' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <div className={styles.copy}>
            © {new Date().getFullYear()} Ravi Joshi &nbsp;·&nbsp; Built with MERN stack in Bengaluru, India 🇮🇳
          </div>
          <ul className={styles.links}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
