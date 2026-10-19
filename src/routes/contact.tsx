import { createFileRoute } from '@tanstack/react-router'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'

import { InstagramIcon } from '@/components/site/icons'
import { Field, NetlifyForm, SelectField, TextArea } from '@/components/site/netlify-form'
import { company } from '@/lib/site'

export const Route = createFileRoute('/contact')({
  validateSearch: (search: Record<string, unknown>): { product?: string } =>
    typeof search.product === 'string' ? { product: search.product.slice(0, 120) } : {},
  head: () => ({
    meta: [
      { title: 'Contact — PRDN Export & Imports, Al Quoz 4, Dubai' },
      { name: 'description', content: 'Visit PRDN Export & Imports on Al Waha Street, Al Quoz 4, Dubai or call +971 52 787 7428.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const { product } = Route.useSearch()

  const channels = [
    { icon: Phone, label: 'Call', value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: company.phone, href: company.whatsappHref },
    { icon: InstagramIcon, label: 'Instagram', value: `@${company.instagram}`, href: company.instagramHref },
    { icon: MapPin, label: 'Office', value: company.address.join(', '), href: company.mapsHref },
  ]

  return (
    <div className="mx-auto max-w-content px-6 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="stamp text-xs text-chili">Trade desk · Dubai</p>
        <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl">
          Let’s talk <em className="text-primary">tonnage</em>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Quotes, samples, specifications or a visit to our Al Quoz office — our team replies the same business day.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group rounded-xl border border-ink/10 bg-card p-5 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="size-6 text-chili group-hover:text-saffron" />
            <p className="mt-4 stamp text-[10px] text-muted-foreground group-hover:text-primary-foreground/70">{label}</p>
            <p className="mt-1 font-semibold">{value}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-ink/10 bg-card p-6 md:p-10">
          <h2 className="font-display text-3xl">Send an enquiry</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">Tell us what you need and where it’s going.</p>
          <NetlifyForm
            name="enquiry"
            submitLabel="Send enquiry"
            successTitle="Enquiry sent"
            successBody="Thank you — a PRDN trade manager will get back to you shortly. For urgent requests, WhatsApp us on +971 52 787 7428."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required autoComplete="name" />
              <Field label="Company" name="company" autoComplete="organization" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" />
              <SelectField label="I am a" name="enquirer_type" required options={['Importer / buyer', 'Exporter / supplier', 'Logistics partner', 'Other']} />
              <Field label="Product" name="product" defaultValue={product} placeholder="e.g. Fresh goat meat" />
              <TextArea label="Message" name="message" required placeholder="Quantities, destination, timing…" />
            </div>
          </NetlifyForm>
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink text-primary-foreground">
          <iframe
            title="PRDN Export & Imports on the map — Al Waha Street, Al Quoz 4, Dubai"
            src={company.mapsEmbed}
            className="h-80 w-full grayscale-[0.4] lg:h-full lg:min-h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="grid gap-6 p-8 sm:grid-cols-2">
            <div>
              <p className="stamp text-[10px] text-saffron">Address</p>
              <address className="mt-2 not-italic leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>
            <div>
              <p className="stamp text-[10px] text-saffron">Trade hours (GST)</p>
              <p className="mt-2 flex gap-2 leading-relaxed">
                <Clock className="mt-1 size-4 shrink-0" />
                <span>Mon – Sat, 7:00 – 19:00<br />Orders on WhatsApp 24/7</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
