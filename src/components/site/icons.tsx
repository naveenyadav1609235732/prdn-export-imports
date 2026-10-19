// lucide-react dropped brand icons, so the Instagram glyph lives here.
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

/** PRDN monogram: a crate seal with a leaf. */
export function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
      <path d="M24 12c6 4 7 12 0 22-7-10-6-18 0-22Z" fill="currentColor" />
      <path d="M24 16v16" stroke="var(--background)" strokeWidth="1" />
    </svg>
  )
}
