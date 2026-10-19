import { useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

type State = 'idle' | 'pending' | 'success' | 'error'

// Forms are registered for Netlify's build bot in public/__forms.html.
// Posting to that static file (not "/") keeps the SSR handler out of the way.
const FORMS_ENDPOINT = '/__forms.html'

/**
 * A Netlify Form with AJAX submission. Checkbox groups listed in `joinFields`
 * are collapsed into one comma-separated value so they show as a single column
 * in the Netlify submissions table.
 */
export function NetlifyForm({
  name,
  joinFields = [],
  successTitle,
  successBody,
  submitLabel,
  className,
  children,
}: {
  name: string
  joinFields?: string[]
  successTitle: string
  successBody: ReactNode
  submitLabel: string
  className?: string
  children: ReactNode
}) {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      if (!joinFields.includes(key)) body.append(key, String(value))
    })
    for (const key of joinFields) body.set(key, data.getAll(key).map(String).join(', '))

    setState('pending')
    try {
      const response = await fetch(FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      // A plain static server echoes the unprocessed registration file back with 200.
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Form handling unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="rounded-xl border border-primary/20 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 font-display text-3xl">{successTitle}</h3>
        <div className="mx-auto mt-3 max-w-md text-muted-foreground">{successBody}</div>
      </div>
    )
  }

  return (
    <form
      name={name}
      method="POST"
      action={FORMS_ENDPOINT}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className={className}
    >
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
        <label>
          Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="space-y-8">
        {children}
        {state === 'error' && (
          <p role="alert" className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            We couldn’t confirm your submission. Your details are still here — please try again, or call us
            directly on +971 52 787 7428.
          </p>
        )}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:bg-ink disabled:opacity-60 sm:w-auto"
        >
          {state === 'pending' && <Loader2 className="size-4 animate-spin" />}
          {state === 'pending' ? 'Sending…' : submitLabel}
        </button>
      </fieldset>
    </form>
  )
}

const fieldClass =
  'w-full rounded-md border border-input bg-card px-4 py-3 text-base outline-none transition placeholder:text-muted-foreground/70 focus:border-ring focus:ring-[3px] focus:ring-ring/30'

export function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  autoComplete,
  defaultValue,
  className,
}: {
  defaultValue?: string
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  autoComplete?: string
  className?: string
}) {
  return (
    <label className={cn('block space-y-2', className)}>
      <span className="text-sm font-semibold">
        {label} {required && <span className="text-chili">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        maxLength={type === 'email' ? 254 : 200}
        className={fieldClass}
      />
    </label>
  )
}

export function TextArea({ label, name, placeholder, required }: { label: string; name: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block space-y-2 sm:col-span-2">
      <span className="text-sm font-semibold">
        {label} {required && <span className="text-chili">*</span>}
      </span>
      <textarea name={name} rows={4} required={required} placeholder={placeholder} maxLength={2000} className={fieldClass} />
    </label>
  )
}

export function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold">
        {label} {required && <span className="text-chili">*</span>}
      </span>
      <select name={name} required={required} defaultValue="" className={fieldClass}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

export function CheckboxGroup({ legend, name, options }: { legend: string; name: string; options: string[] }) {
  return (
    <fieldset className="sm:col-span-2">
      <legend className="mb-3 text-sm font-semibold">{legend}</legend>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {options.map((o) => (
          <label
            key={o}
            className="flex cursor-pointer items-center gap-3 rounded-md border border-input bg-card px-4 py-3 text-sm transition has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
          >
            <input type="checkbox" name={name} value={o} className="size-4 accent-saffron" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function FormSection({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  return (
    <section>
      <div className="mb-5 flex items-baseline gap-4 border-b border-dashed border-ink/20 pb-3">
        <span className="stamp text-xs text-chili">{step}</span>
        <h3 className="font-display text-2xl">{title}</h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </section>
  )
}
