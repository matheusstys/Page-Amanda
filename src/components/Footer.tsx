import { config, ig, wa } from '../config'
import { Insta, Whats } from '../icons'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-xl text-ink">{config.name}</p>
          <p className="mt-1 text-sm text-stone">{config.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {config.format} · {config.city}. Um espaço de cuidado, no seu tempo.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={wa('Olá, Amanda!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink transition hover:text-sage-deep"
          >
            <Whats className="h-4 w-4" /> {config.phoneDisplay}
          </a>
          <a
            href={ig}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink transition hover:text-sage-deep"
          >
            <Insta className="h-4 w-4" /> @{config.instagram}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-5 sm:px-8">
          <p className="text-xs leading-relaxed text-stone">
            Em momentos de crise ou risco imediato, ligue para o CVV no 188
            (24h, gratuito) ou procure a emergência mais próxima.
          </p>
          <p className="mt-2 text-xs text-stone">
            © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
