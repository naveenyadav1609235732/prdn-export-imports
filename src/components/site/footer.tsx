import { Link } from '@tanstack/react-router'
import { MapPin, MessageCircle, Phone } from 'lucide-react'

import { company } from '@/lib/site'
import { InstagramIcon, Seal } from './icons'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-primary-foreground grain">
      <div className="mx-auto max-w-content px-6 pt-20 pb-10">
        <p className="font-display text-[13vw] md:text-[9rem] leading-[0.85] font-light tracking-tight text-primary-foreground/10 select-none" aria-hidden="true">
          Fresh to the world.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-saffron">
              <Seal className="size-12" />
              <span className="font-display text-3xl">{company.name}</span>
            </div>
            <p className="max-w-md text-primary-foreground/70">
              A Dubai trading house moving fresh vegetables, fruits, halal goat meat and spices between
              growers, exporters and importers across the Gulf and beyond.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="stamp text-[11px] text-saffron">Visit &amp; call</p>
            <a href={company.mapsHref} target="_blank" rel="noreferrer" className="flex gap-2 text-primary-foreground/80 hover:text-saffron">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{company.address.join(', ')}</span>
            </a>
            <a href={company.phoneHref} className="flex gap-2 text-primary-foreground/80 hover:text-saffron">
              <Phone className="mt-0.5 size-4 shrink-0" /> {company.phone}
            </a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="flex gap-2 text-primary-foreground/80 hover:text-saffron">
              <MessageCircle className="mt-0.5 size-4 shrink-0" /> WhatsApp us
            </a>
            <a href={company.instagramHref} target="_blank" rel="noreferrer" className="flex gap-2 text-primary-foreground/80 hover:text-saffron">
              <InstagramIcon className="mt-0.5 size-4 shrink-0" /> @{company.instagram}
            </a>
          </div>

          <div className="space-y-3 text-sm">
            <p className="stamp text-[11px] text-saffron">Trade desk</p>
            <Link to="/products" className="block text-primary-foreground/80 hover:text-saffron">Product catalogue</Link>
            <Link to="/register/exporter" className="block text-primary-foreground/80 hover:text-saffron">Exporter registration</Link>
            <Link to="/register/importer" className="block text-primary-foreground/80 hover:text-saffron">Importer registration</Link>
            <Link to="/contact" className="block text-primary-foreground/80 hover:text-saffron">Request a quote</Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="stamp">Al Quoz 4 · Dubai · UAE</span>
        </div>
      </div>
    </footer>
  )
}
