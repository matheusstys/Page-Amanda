import { useReveal } from '../hooks/useReveal'
import { Chat, Compass, Heart, Leaf, Sprout, Sun } from '../icons'

const areas = [
  { icon: <Leaf className="h-6 w-6" />, title: 'Ansiedade', desc: 'Preocupação constante, pensamento acelerado e aquela sensação de estar sempre em alerta.' },
  { icon: <Sun className="h-6 w-6" />, title: 'Esgotamento', desc: 'Cansaço que o descanso não resolve, sobrecarga e dificuldade de desacelerar.' },
  { icon: <Heart className="h-6 w-6" />, title: 'Relacionamentos', desc: 'Conflitos, limites, términos e a forma como você se relaciona — com os outros e consigo.' },
  { icon: <Compass className="h-6 w-6" />, title: 'Autoconhecimento', desc: 'Entender seus padrões, dar nome ao que sente e tomar decisões com mais clareza.' },
  { icon: <Sprout className="h-6 w-6" />, title: 'Fases de transição', desc: 'Mudanças de carreira, maternidade, lutos e recomeços que pedem um novo olhar.' },
  { icon: <Chat className="h-6 w-6" />, title: 'Um espaço pra falar', desc: 'Às vezes você só precisa de um lugar seguro para colocar as coisas em ordem.' },
]

export default function Areas() {
  const head = useReveal()
  return (
    <section id="areas" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-12 max-w-2xl`}>
          <p className="eyebrow mb-3 text-xs text-sage-deep">como posso te acompanhar</p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Não existe motivo “pequeno demais” para buscar apoio.
          </h2>
          <p className="mt-4 text-ink-soft">
            Se algo vem tirando sua paz, já é razão suficiente. Alguns dos temas
            que costumo acolher no consultório:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-sage"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sage/15 text-sage-deep">
                {a.icon}
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
