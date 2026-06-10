import { config } from '../config'
import { useReveal } from '../hooks/useReveal'

export default function Sobre() {
  const r = useReveal()
  return (
    <section id="sobre" className="bg-surface py-20 sm:py-28">
      <div
        ref={r.ref}
        className={`reveal ${r.visible ? 'in' : ''} mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]`}
      >
        <div className="relative mx-auto w-full max-w-xs">
          <div className="overflow-hidden rounded-[2rem] rounded-bl-[5rem] border border-line">
            <img
              src="/amanda.jpg"
              alt="Amanda Stys"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3 text-xs text-sage-deep">sobre mim</p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Acredito que toda pessoa merece ser ouvida sem pressa.
          </h2>
          <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
            <p>
              Sou {config.name}, {config.role.toLowerCase()}. Meu trabalho parte
              de um lugar simples: criar um espaço de confiança onde você possa
              falar do que sente sem medo de julgamento.
            </p>
            <p>
              Trabalho com {config.approach.toLowerCase()}, respeitando o seu
              ritmo e a sua história. Aqui não existe resposta pronta — a gente
              constrói os caminhos juntas, no tempo que for o seu.
              <span className="text-stone"> [substitua por um trecho sobre a sua formação, experiência e abordagem.]</span>
            </p>
          </div>
          <p className="mt-6 inline-block rounded-full border border-line px-4 py-2 text-sm text-ink">
            {config.role} · {config.crp}
          </p>
        </div>
      </div>
    </section>
  )
}
