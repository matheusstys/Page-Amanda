import { useReveal } from '../hooks/useReveal'
import { Quote } from '../icons'

export default function Citacao() {
  const r = useReveal()
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div
        ref={r.ref}
        className={`reveal ${r.visible ? 'in' : ''} mx-auto max-w-3xl px-5 text-center sm:px-8`}
      >
        <Quote className="mx-auto mb-6 h-9 w-9 text-honey" />
        <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">
          Pedir ajuda não é fraqueza. É um ato de cuidado com quem você é — e com
          quem você ainda quer se tornar.
        </p>
        <p className="eyebrow mt-6 text-xs text-sage">um convite, não uma cobrança</p>
      </div>
    </section>
  )
}
