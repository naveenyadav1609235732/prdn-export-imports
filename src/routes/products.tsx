import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Search, Star } from 'lucide-react'
import { useState } from 'react'

import { categories, img, products, type CategoryId } from '@/lib/site'
import { cn } from '@/lib/utils'

type Filter = CategoryId | 'all'
const filters: Filter[] = ['all', 'vegetables', 'fruits', 'meat', 'spices']

export const Route = createFileRoute('/products')({
  validateSearch: (search: Record<string, unknown>): { category?: CategoryId } => {
    const c = search.category
    return filters.includes(c as Filter) && c !== 'all' ? { category: c as CategoryId } : {}
  },
  head: () => ({
    meta: [
      { title: 'Products — PRDN Export & Imports' },
      { name: 'description', content: 'Fresh vegetables, fresh fruits, halal goat meat and spices exported from Dubai by PRDN Export & Imports.' },
    ],
  }),
  component: ProductsPage,
})

function ProductsPage() {
  const { category } = Route.useSearch()
  const navigate = Route.useNavigate()
  const active: Filter = category ?? 'all'
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const visible = products.filter(
    (p) =>
      (active === 'all' || p.category === active) &&
      (!q || `${p.name} ${p.origin}`.toLowerCase().includes(q)),
  )
  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-primary-foreground grain">
        <img
          src={img(activeCategory?.image ?? 'hero.png', 1600)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="stamp text-xs text-saffron">The PRDN manifest · {products.length} lines</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
            {activeCategory ? activeCategory.name : <>Everything we <em className="text-saffron">ship</em>.</>}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
            {activeCategory?.blurb ??
              'Fresh vegetables and fruits, our signature halal goat meat, and sterilised spices — packed to your spec and moved cold from Dubai.'}
          </p>
        </div>
      </section>

      <div className="sticky top-[64px] md:top-[92px] z-30 border-b border-ink/10 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-content flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Product category">
            {filters.map((f) => {
              const label = f === 'all' ? 'All products' : categories.find((c) => c.id === f)!.name
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => navigate({ search: f === 'all' ? {} : { category: f }, replace: true, resetScroll: false })}
                  className={cn(
                    'whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition',
                    active === f ? 'border-primary bg-primary text-primary-foreground' : 'border-ink/15 hover:border-primary',
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <label className="relative md:w-72">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products or origin…"
              className="w-full rounded-full border border-ink/15 bg-card py-2 pl-9 pr-4 text-sm outline-none focus:border-ring"
            />
          </label>
        </div>
      </div>

      <section className="mx-auto max-w-content px-6 py-14">
        {visible.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No products match “{query}”. Ask us — if it grows, we can probably source it.
          </p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => {
              const cat = categories.find((c) => c.id === p.category)!
              return (
                <li
                  key={p.name}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-card transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_oklch(0.24_0.035_155/0.45)]"
                >
                  <div className="flex items-center justify-between border-b border-dashed border-ink/15 px-5 py-3 stamp text-[10px] text-muted-foreground">
                    <span>{cat.code}-{String(i + 1).padStart(2, '0')}</span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 text-chili">
                        <Star className="size-3 fill-current" /> Signature
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-2xl leading-tight">{p.name}</h2>
                    <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                      <dt className="text-muted-foreground">Origin</dt>
                      <dd>{p.origin}</dd>
                      <dt className="text-muted-foreground">Packing</dt>
                      <dd>{p.packing}</dd>
                      <dt className="text-muted-foreground">Season</dt>
                      <dd>{p.season}</dd>
                    </dl>
                    <Link
                      to="/contact"
                      search={{ product: p.name }}
                      className="mt-6 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary group-hover:text-chili"
                    >
                      Request a quote <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-saffron p-8 text-ink md:flex-row md:items-center md:p-12">
          <div>
            <p className="stamp text-xs">Can’t see it listed?</p>
            <p className="mt-2 font-display text-3xl md:text-4xl">We source to order across 15+ origins.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/register/importer" className="rounded-full bg-ink px-6 py-3 font-semibold text-primary-foreground hover:bg-primary">
              Register as importer
            </Link>
            <Link to="/contact" className="rounded-full border border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-primary-foreground">
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
