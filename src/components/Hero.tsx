import { config, wa } from '../config'
import { Arrow, Lock, Monitor } from '../icons'

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* calm ambient shapes */}
      <div className="animate-breathe pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/30 blur-3xl" />
      <div className="animate-floaty pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-honey/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow mb-5 text-xs text-sage-deep">
            {config.format} · {config.city}
          </p>
          <h1 className="font-display text-[2.7rem] font-medium leading-[1.05] text-ink sm:text-[3.6rem]">
            Um espaço seguro para você se ouvir — e seguir em frente.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Sou {config.name}. Ofereço um acompanhamento terapêutico acolhedor e
            sem julgamentos, para te ajudar a atravessar o que está pesando, no
            seu tempo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={wa('Olá, Amanda! Gostaria de agendar uma conversa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition hover:bg-sage-deep"
            >
              Agendar uma conversa
              <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-semibold text-ink transition hover:border-ink"
            >
              Conhecer meu trabalho
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-stone">
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-sage-deep" /> Sigilo absoluto
            </span>
            <span className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-sage-deep" /> Sessões online ou presenciais
            </span>
          </div>
        </div>

        {/* portrait placeholder */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(37,52,43,0.35)]">
            <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-sage/25 via-surface to-honey/20">
              <div className="text-center">
                <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-ink/5 font-display text-3xl text-sage-deep">
                  AS
                </div>
                <p className="px-8 text-xs leading-relaxed text-stone">
                  Espaço para a foto da Amanda
                  <br />
                  <span className="opacity-70">(substitua em /public)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-line bg-surface px-5 py-3 shadow-lg">
            <p className="font-display text-lg text-ink">{config.name}</p>
            <p className="text-xs text-stone">{config.role} · {config.crp}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
