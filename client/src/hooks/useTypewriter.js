import { useState, useEffect } from 'react'

export function useTypewriter(words, { typeSpeed = 75, deleteSpeed = 45, pauseMs = 2000, gapMs = 380 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const tick = () => {
      if (!deleting) {
        const next = current.substring(0, charIndex + 1)
        setDisplayed(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), pauseMs)
          return
        }
        setCharIndex((c) => c + 1)
      } else {
        const next = current.substring(0, charIndex - 1)
        setDisplayed(next)
        if (next === '') {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
          setCharIndex(0)
          return
        }
        setCharIndex((c) => c - 1)
      }
    }

    const delay = deleting ? deleteSpeed : typeSpeed
    const id = setTimeout(tick, delay)
    return () => clearTimeout(id)
  }, [charIndex, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs, gapMs])

  return displayed
}
