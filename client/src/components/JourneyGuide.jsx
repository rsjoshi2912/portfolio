import { useEffect, useRef, useState } from 'react'
import { Arrow } from './Icons'

const chapters = [
  { id: 'home', name: 'Meet Ravi' },
  { id: 'about', name: 'The way I think' },
  { id: 'work', name: 'Selected work' },
  { id: 'experience', name: 'The journey so far' },
  { id: 'skills', name: 'Tools of the craft' },
  { id: 'contact', name: 'Your next chapter' },
]

export function useGentleReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches) return
    const elements = [
      ...document.querySelectorAll(
        '.section-heading, .about-grid, .project-card, .toolkit-card, .timeline-item, .credentials-section',
      ),
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add('is-visible')
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.05 },
    )
    elements.forEach((element) => {
      // Content already in view stays visible when following an anchor link.
      if (element.getBoundingClientRect().top < window.innerHeight) return
      element.classList.add('reveal-ready')
      observer.observe(element)
    })
    const revealAll = () =>
      elements.forEach((element) => element.classList.remove('reveal-ready'))
    preference.addEventListener('change', revealAll)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', revealAll)
      revealAll()
    }
  }, [])
}

export default function JourneyGuide() {
  const [active, setActive] = useState(0)
  const progress = useRef(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const height = document.documentElement.scrollHeight - window.innerHeight
      progress.current?.style.setProperty(
        '--progress',
        String(
          height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0,
        ),
      )
      let current = 0
      chapters.forEach(({ id }, index) => {
        if (
          document.getElementById(id)?.getBoundingClientRect().top <=
          window.innerHeight * 0.38
        )
          current = index
      })
      setActive(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
  const next = chapters[(active + 1) % chapters.length]
  return (
    <div ref={progress} className="journey-guide">
      <div className="reading-progress" aria-hidden="true">
        <span />
      </div>
      <nav className="chapter-dock" aria-label="Chapter navigation">
        <div className="chapter-current">
          <span className="chapter-number">
            {String(active + 1).padStart(2, '0')} <span>/ 06</span>
          </span>
          <span>{chapters[active].name}</span>
        </div>
        <a
          className="chapter-next"
          href={`#${next.id}`}
          aria-label={`${active === chapters.length - 1 ? 'Back to' : 'Next chapter:'} ${next.name}`}
        >
          <span>
            {active === chapters.length - 1 ? 'Back to start' : 'Next chapter'}
          </span>
          <Arrow direction={active === chapters.length - 1 ? 'up' : 'down'} />
        </a>
      </nav>
    </div>
  )
}
