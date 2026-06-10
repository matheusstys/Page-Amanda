import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'Como sei se preciso de terapia?',
    a: 'Não é preciso estar “no fundo do poço”. Se algo vem incomodando, se repetindo ou tirando seu sono, já vale conversar. A terapia também é um espaço de autoconhecimento, não só de crise.',
  },
  {
    q: 'A terapia online funciona como a presencial?',
    a: 'Sim. O vínculo e o cuidado são os mesmos — muita gente prefere o online pela praticidade e por se sentir mais à vontade no próprio ambiente. Você escolhe o formato que combina com você.',
  },
  {
    q: 'Quanto tempo dura o processo?',
    a: 'Depende de cada pessoa e do que você busca. A terapia respeita o seu tempo, sem prazos forçados. Conversamos sobre isso ao longo do caminho, sempre com transparência.',
  },
  {
    q: 'As sessões são realmente sigilosas?',
    a: 'Totalmente. O sigilo é um compromisso ético e a base do espaço terapêutico. O que é dito nas sessões fica entre nós.',
  },
  {
    q: 'Como faço para agendar e qual o valor?',
    a: 'É só me chamar no WhatsApp. A gente conversa sobre horários, formato e valores, e marca a primeira sessão com calma.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-line py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
        {q}
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-stone transition group-open:rotate-45 group-open:border-ink group-open:text-ink">
          +
        </span>
      </summary>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{a}</p>
    </details>
  )
}

export default function Faq() {
  const head = useReveal()
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div ref={head.ref} className={`reveal ${head.visible ? 'in' : ''} mb-8`}>
          <p className="eyebrow mb-3 text-xs text-sage-deep">dúvidas comuns</p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Talvez você esteja se perguntando…
          </h2>
        </div>
        <div>
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
