import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeftRight, Check } from 'lucide-react'

import { company, img } from '@/lib/site'

export function RegistrationShell({
  role,
  code,
  title,
  intro,
  image,
  benefits,
  switchTo,
  children,
}: {
  role: 'Exporter' | 'Importer'
  code: string
  title: ReactNode
  intro: string
  image: string
  benefits: string[]
  switchTo: { to: '/register/exporter' | '/register/importer'; label: string }
  children: ReactNode
}) {
  return (
    <div className="mx-auto grid max-w-content gap-10 px-6 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
      <aside className="lg:sticky lg:top-32 lg:self-start">
        <div className="relative overflow-hidden rounded-2xl bg-ink text-primary-foreground">
          <img src={img(image, 900)} alt="" className="h-64 w-full object-cover opacity-70" loading="eager" />
          <div className="absolute left-5 top-5 rounded-sm border border-saffron/60 bg-ink/70 px-3 py-1 stamp text-[10px] text-saffron">
            {code}
          </div>
          <div className="space-y-5 p-8">
            <p className="stamp text-xs text-saffron">{role} registration</p>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">{title}</h1>
            <p className="text-primary-foreground/75">{intro}</p>
            <ul className="space-y-3 pt-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-saffron" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="perforated h-4 bg-saffron" aria-hidden="true" />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link to={switchTo.to} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-chili">
            <ArrowLeftRight className="size-4" /> {switchTo.label}
          </Link>
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            Prefer WhatsApp? {company.phone}
          </a>
        </div>
      </aside>

      <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-[0_30px_80px_-40px_oklch(0.24_0.035_155/0.35)] md:p-10">
        {children}
      </div>
    </div>
  )
}
