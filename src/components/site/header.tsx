import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, Phone, X } from 'lucide-react'

import { company } from '@/lib/site'
import { Seal } from './icons'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/register/exporter', label: 'Exporters' },
  { to: '/register/importer', label: 'Importers' },
  { to: '/contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-background/85 backdrop-blur-md">
      <div className="hidden md:block bg-ink text-primary-foreground/80">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-1.5 text-[11px] stamp">
          <span>Dubai · {company.coords}</span>
          <span className="text-saffron">Cold-chain fresh produce · Halal goat meat · Spices</span>
          <a href={company.phoneHref} className="hover:text-saffron">{company.phone}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-3 text-primary" onClick={() => setOpen(false)}>
          <Seal className="size-10" />
          <span className="leading-none">
            <span className="block font-display text-2xl font-semibold tracking-tight">PRDN</span>
            <span className="block stamp text-[9px] text-muted-foreground">Export &amp; Imports</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition hover:text-primary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:brightness-105"
          >
            <Phone className="size-4" /> Call us
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-ink/15"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-background px-6 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-3 font-display text-xl data-[status=active]:text-chili"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
