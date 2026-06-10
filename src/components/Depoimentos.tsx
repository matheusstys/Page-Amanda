import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from '../icons'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    text: 'A Amanda criou um espaço onde me senti completamente à vontade para falar sobre coisas que nunca tinha conseguido colocar em palavras antes.',
    name: 'M. S.',
  },
  {
    text: 'Depois de alguns meses de terapia, percebi padrões que carregava há anos sem perceber. A mudança foi gradual, mas real.',
    name: 'L. R.',
  },
  {
    text: 'O que mais me surpreendeu foi a escuta — sem pressa, sem julgamento. Isso fez toda a diferença no meu processo.',
    name: 'C. B.',
  },
  {
    text: 'Estava passando por uma fase muito difícil e a terapia me deu ferramentas para lidar com a ansiedade de um jeito que eu não conhecia.',
    name: 'P. A.',
  },
]

const DELAY = 5000

export default function Depoimentos() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const r = useReveal()

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setCurrent(c => (c + 1) % items.length), DELAY)
    return () => clearTimeout(id)
  }, [current, paused])

  const go = (i: number) => setCurrent(i)
  const prev = () => go((current - 1 + items.length) % items.length)
  const next = () => go((current + 1) % items.length)

  return (
    <section className="py-20 sm:py-28">
      <div
        ref={r.ref}
        className={`reveal ${r.visible ? 'in' : ''} mx-auto max-w-3xl px-5 sm:px-8`}
      >
        <p className="eyebrow mb-3 text-center text-xs text-sage-deep">depoimentos</p>
        <h2 className="mb-12 text-center font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Quem já passou por aqui
        </h2>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {items.map((item, i) => (
                <div key={i} className="min-w-full p-8 sm:p-12">
                  <Quote className="mb-6 h-8 w-8 text-sage/50" />
                  <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                    "{item.text}"
                  </p>
                  <p className="mt-6 text-sm font-semibold tracking-wide text-sage-deep">
                    — {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-line">
              <div
                key={`${current}-${paused}`}
                className="h-full bg-sage"
                style={{
                  animation: paused ? 'none' : `slide-progress ${DELAY}ms linear forwards`,
                }}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-sage-deep' : 'w-2 bg-line hover:bg-stone'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition hover:border-sage hover:text-sage-deep"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition hover:border-sage hover:text-sage-deep"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
