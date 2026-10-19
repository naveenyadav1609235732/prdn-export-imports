import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Leaf, MapPin, Phone, ShieldCheck, Snowflake, Truck } from 'lucide-react'

import { InstagramIcon } from '@/components/site/icons'
import { categories, company, destinations, img, products } from '@/lib/site'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Categories />
      <GoatSpotlight />
      <ProcessRoute />
      <TwoDoors />
      <Visit />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="mx-auto grid max-w-content gap-12 px-6 pt-12 pb-20 md:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 rise">
          <p className="stamp inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[11px] text-primary">
            <span className="size-1.5 rounded-full bg-chili" /> Dubai · Global trade house
          </p>
          <h1 className="mt-6 font-display text-[3.4rem] leading-[0.9] font-light tracking-tight sm:text-7xl xl:text-[6.2rem]">
            From the <em className="font-normal text-primary">soil</em> of one country to the{' '}
            <em className="font-normal text-chili">table</em> of another.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            {company.name} exports fresh vegetables and fruits, specialises in chilled halal goat meat,
            and trades premium spices — sourced at origin, graded by hand, and kept cold all the way
            from Al Quoz to your port.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-ink"
            >
              Explore products <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 font-semibold transition hover:border-primary"
            >
              <Phone className="size-4" /> {company.phone}
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            {[
              ['4', 'Product lines'],
              ['0–4°C', 'Cold chain'],
              ['100%', 'Halal meat'],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl text-primary">{v}</dd>
                <dd className="stamp mt-1 text-[10px] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6 rise [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-40px_oklch(0.24_0.035_155/0.6)]">
            <img
              src={img('hero.png', 1400)}
              srcSet={`${img('hero.png', 800)} 800w, ${img('hero.png', 1400)} 1400w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="A wooden export crate filled with tomatoes, okra, chillies, mangoes, pomegranates, dates, saffron, cardamom and cinnamon"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/12]"
              fetchPriority="high"
            />
          </div>

          {/* Shipping label motif */}
          <div className="absolute -bottom-10 left-4 w-64 -rotate-3 rounded-md border border-ink/20 bg-card p-4 shadow-xl sm:left-[-2rem] sm:w-72">
            <div className="flex items-center justify-between stamp text-[9px] text-muted-foreground">
              <span>Consignment</span>
              <span>PRDN-DXB</span>
            </div>
            <p className="mt-2 font-display text-xl leading-tight">Mixed fresh produce &amp; spices</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <span className="rounded bg-muted px-2 py-1"><span className="text-muted-foreground">From</span> Al Quoz 4</span>
              <span className="rounded bg-muted px-2 py-1"><span className="text-muted-foreground">Temp</span> 2°C</span>
            </div>
            <div className="mt-3 h-8 bg-[repeating-linear-gradient(90deg,var(--ink)_0_2px,transparent_2px_4px,var(--ink)_4px_5px,transparent_5px_8px)]" aria-hidden="true" />
          </div>

          <div className="absolute -top-5 right-6 flex size-28 items-center justify-center rounded-full bg-saffron text-center text-ink shadow-lg rotate-12">
            <span className="stamp text-[10px] leading-tight">
              Fresh
              <br />
              <span className="font-display text-2xl normal-case tracking-normal">daily</span>
              <br />
              dispatch
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = [...products.filter((p) => p.featured).map((p) => p.name), ...destinations]
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-primary py-4 text-primary-foreground" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic">
            {t}
            <Leaf className="size-4 text-saffron" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Categories() {
  return (
    <section className="mx-auto max-w-content px-6 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="stamp text-xs text-chili">What we deal in</p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.95] md:text-6xl">
            Four crates. <em className="text-primary">One standard.</em>
          </h2>
        </div>
        <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-chili">
          Full product catalogue <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Link
            key={c.id}
            to="/products"
            search={{ category: c.id }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card transition hover:-translate-y-1.5 ${i % 2 ? 'lg:mt-12' : ''}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={img(c.image, 700)}
                alt={c.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-sm bg-ink/80 px-2 py-1 stamp text-[10px] text-saffron backdrop-blur">
                {c.code}
              </span>
              {c.id === 'meat' && (
                <span className="absolute right-4 top-4 rounded-full bg-chili px-3 py-1 stamp text-[10px] text-white">Our focus</span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl">{c.name}</h3>
              <p className="stamp mt-1 text-[10px] text-muted-foreground">{c.tagline}</p>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{c.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-chili">
                {products.filter((p) => p.category === c.id).length} products <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function GoatSpotlight() {
  const specs = [
    ['Certification', 'Halal slaughtered & certified'],
    ['Chilled', '0–4°C, 10–14 day shelf life'],
    ['Frozen', '−18°C blast frozen to order'],
    ['Formats', 'Carcass, primals, curry cut, mince'],
  ]
  return (
    <section className="relative overflow-hidden bg-ink text-primary-foreground grain">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="relative">
          <img src={img('meat.png', 1000)} alt="Fresh goat meat cuts on a wooden butcher block" loading="lazy" className="aspect-square w-full rounded-[2rem] object-cover" />
          <div className="absolute -right-3 bottom-10 rounded-full border-2 border-saffron bg-ink px-5 py-3 text-center sm:-right-8">
            <p className="font-display text-3xl text-saffron">حلال</p>
            <p className="stamp text-[9px]">Halal</p>
          </div>
        </div>
        <div>
          <p className="stamp text-xs text-saffron">Signature line · MT-03</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">
            Fresh goat meat, <em className="text-saffron">handled like fruit.</em>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/75">
            Meat is where cold chain matters most — so it’s where we put our focus. Every consignment is
            temperature-logged from abattoir to airport, packed to your cut sheet and shipped with full
            halal and health documentation.
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl bg-primary-foreground/10 sm:grid-cols-2">
            {specs.map(([k, v]) => (
              <div key={k} className="bg-ink p-5">
                <dt className="stamp text-[10px] text-saffron">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/contact"
            search={{ product: 'Fresh goat meat' }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 font-semibold text-ink transition hover:brightness-105"
          >
            Get a goat meat quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessRoute() {
  const steps = [
    { icon: Leaf, title: 'Source', body: 'Direct from vetted farms, abattoirs and spice processors at origin.' },
    { icon: ShieldCheck, title: 'Grade', body: 'Sorted, sized and quality-checked by hand against your spec sheet.' },
    { icon: Snowflake, title: 'Pre-cool & pack', body: 'Pre-cooled and packed in export-grade cartons, sacks or vacuum bags.' },
    { icon: Truck, title: 'Ship cold', body: 'Air or reefer sea freight with documents ready before departure.' },
  ]
  return (
    <section className="mx-auto max-w-content px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="stamp text-xs text-chili">The PRDN route</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95]">Harvest to hold, in four moves.</h2>
          <img src={img('logistics.png', 800)} alt="Refrigerated container loaded at a Dubai port at dusk" loading="lazy" className="mt-8 aspect-[16/10] w-full rounded-2xl object-cover" />
        </div>
        <ol className="relative grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-ink/10 bg-card p-8">
              <span className="absolute right-6 top-4 font-display text-7xl font-light text-ink/[0.07]">{String(i + 1).padStart(2, '0')}</span>
              <s.icon className="size-8 text-primary" />
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function TwoDoors() {
  return (
    <section className="mx-auto max-w-content px-6 pb-24">
      <div className="text-center">
        <p className="stamp text-xs text-chili">Join the network</p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">Which side of the crate are you on?</h2>
      </div>
      <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-ink/10 md:grid-cols-2">
        <Link to="/register/exporter" className="group relative flex min-h-96 flex-col justify-end overflow-hidden bg-primary p-10 text-primary-foreground">
          <img src={img('vegetables.png', 900)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-40" />
          <div className="relative">
            <p className="stamp text-xs text-saffron">For growers & suppliers</p>
            <h3 className="mt-3 font-display text-5xl">I’m an Exporter</h3>
            <p className="mt-3 max-w-sm text-primary-foreground/80">Sell your produce, meat or spices through our Dubai trade desk.</p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 font-semibold text-ink">
              Exporter registration <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
        <Link to="/register/importer" className="group relative flex min-h-96 flex-col justify-end overflow-hidden bg-saffron p-10 text-ink">
          <img src={img('fruits.png', 900)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply transition duration-700 group-hover:scale-105 group-hover:opacity-35" />
          <div className="relative">
            <p className="stamp text-xs text-chili">For buyers & distributors</p>
            <h3 className="mt-3 font-display text-5xl">I’m an Importer</h3>
            <p className="mt-3 max-w-sm text-ink/80">Get weekly price lists, priority allocation and a dedicated trade manager.</p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-primary-foreground">
              Importer registration <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

function Visit() {
  const tiles = ['hero.png', 'spices.png', 'meat.png', 'fruits.png', 'vegetables.png', 'logistics.png']
  return (
    <section className="border-t border-ink/10 bg-secondary/60">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="stamp text-xs text-chili">Find us</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95]">Al Quoz 4, where the crates come home.</h2>
          <div className="mt-8 space-y-4">
            <a href={company.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-xl border border-ink/10 bg-card p-5 hover:border-primary">
              <MapPin className="mt-1 size-5 text-primary" />
              <span>
                <span className="block font-semibold">{company.address[0]}, {company.address[1]}</span>
                <span className="text-sm text-muted-foreground">{company.address[2]} · Open in Google Maps</span>
              </span>
            </a>
            <a href={company.phoneHref} className="flex items-start gap-4 rounded-xl border border-ink/10 bg-card p-5 hover:border-primary">
              <Phone className="mt-1 size-5 text-primary" />
              <span>
                <span className="block font-semibold">{company.phone}</span>
                <span className="text-sm text-muted-foreground">Call or WhatsApp our trade desk</span>
              </span>
            </a>
          </div>
          <iframe
            title="Map of Al Waha Street, Al Quoz 4, Dubai"
            src={company.mapsEmbed}
            className="mt-6 h-64 w-full rounded-xl border border-ink/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <a href={company.instagramHref} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4">
            <span>
              <p className="stamp text-xs text-chili">Follow the harvest</p>
              <p className="mt-2 font-display text-3xl group-hover:text-primary">@{company.instagram}</p>
            </span>
            <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-saffron via-chili to-primary text-white">
              <InstagramIcon className="size-6" />
            </span>
          </a>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {tiles.map((t) => (
              <a key={t} href={company.instagramHref} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-lg">
                <img src={img(t, 400)} alt="" loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition group-hover:bg-ink/40 group-hover:opacity-100">
                  <InstagramIcon className="size-6" />
                </span>
              </a>
            ))}
          </div>
          <a
            href={company.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 py-4 font-semibold hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="size-4" /> Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
