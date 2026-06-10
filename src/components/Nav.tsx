import { useEffect, useState } from 'react'
import { config, wa } from '../config'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            {config.name}
          </span>
          <span className="hidden text-xs text-stone sm:inline">· {config.role}</span>
        </a>
        <a
          href={wa('Olá, Amanda! Gostaria de agendar uma conversa.')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition hover:bg-sage-deep"
        >
          Agendar
        </a>
      </div>
    </nav>
  )
}
