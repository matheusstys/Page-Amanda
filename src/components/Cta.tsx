import { config, wa } from '../config'
import { useReveal } from '../hooks/useReveal'
import { Arrow, Whats } from '../icons'

export default function Cta() {
  const r = useReveal()
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div
          ref={r.ref}
          className={`reveal ${r.visible ? 'in' : ''} relative overflow-hidden rounded-3xl border border-line bg-surface px-7 py-14 text-center sm:px-14 sm:py-20`}
        >
          <div className="animate-breathe pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage/25 blur-3xl" />
          <div className="animate-floaty pointer-events-none absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-honey/20 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-[2.7rem]">
              Quando você estiver pronta, eu estou aqui.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Sem pressão e sem compromisso. Vamos começar com uma conversa e ver,
              juntas, o melhor caminho pra você.
            </p>
            <a
              href={wa('Olá, Amanda! Gostaria de agendar uma conversa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-paper transition hover:bg-sage-deep"
            >
              <Whats className="h-5 w-5 text-honey" />
              Agendar pelo WhatsApp
              <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-sm text-stone">{config.phoneDisplay}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
