import { useReveal } from '../hooks/useReveal'
import { Chat, Clock, Lock, Monitor } from '../icons'

const steps = [
  {
    icon: <Chat className="h-6 w-6" />,
    title: 'O primeiro contato',
    desc: 'Você manda uma mensagem e marcamos uma conversa inicial, sem compromisso, para nos conhecermos.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'As sessões',
    desc: 'Encontros de cerca de 50 minutos, geralmente semanais. A frequência a gente combina conforme a sua necessidade.',
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Online ou presencial',
    desc: 'Você escolhe o formato que cabe na sua rotina. O cuidado é o mesmo nos dois.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Sempre sigiloso',
    desc: 'Tudo o que é falado fica entre nós. O sigilo é a base de um espaço terapêutico seguro.',
  },
]

export default function ComoFunciona() {
  const head = useReveal()
  return (
    <section id="como" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-sage-deep">como funciona</p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Dar o primeiro passo é mais simples do que parece.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5 rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-paper">
                  {s.icon}
                </span>
                {i < steps.length - 1 && <span className="mt-2 hidden h-full w-px bg-line sm:block" />}
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
