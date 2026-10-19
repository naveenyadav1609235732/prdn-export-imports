import { createFileRoute } from '@tanstack/react-router'

import { RegistrationShell } from '@/components/site/registration-shell'
import { CheckboxGroup, Field, FormSection, NetlifyForm, SelectField, TextArea } from '@/components/site/netlify-form'

export const Route = createFileRoute('/register/importer')({
  head: () => ({ meta: [{ title: 'Importer registration — PRDN Export & Imports' }] }),
  component: ImporterRegistration,
})

function ImporterRegistration() {
  return (
    <RegistrationShell
      role="Importer"
      code="BUYER DESK · IMP"
      title={<>Fresh, on time, <em className="text-saffron">every</em> time.</>}
      intro="Wholesalers, retailers, hotels and distributors: open a PRDN buyer account for priority allocation, weekly price lists and a dedicated trade manager in Dubai."
      image="logistics.png"
      benefits={[
        'Weekly price lists and availability',
        'Mixed-container and air-freight consolidation',
        'Halal, phytosanitary & origin documents prepared',
        'Dedicated account manager on WhatsApp',
      ]}
      switchTo={{ to: '/register/exporter', label: 'Supplying instead? Register as an exporter' }}
    >
      <NetlifyForm
        name="importer-registration"
        joinFields={['categories']}
        submitLabel="Submit importer registration"
        successTitle="Welcome aboard"
        successBody="Your buyer registration is in. A PRDN trade manager will send you our current price list and contact you within one business day."
      >
        <FormSection step="01" title="Company">
          <Field label="Company name" name="company" required autoComplete="organization" />
          <SelectField
            label="Business type"
            name="business_type"
            required
            options={['Wholesaler / distributor', 'Supermarket / retail', 'Hotel / restaurant / catering', 'Processor / manufacturer', 'Trading company']}
          />
          <Field label="Country" name="country" required autoComplete="country-name" />
          <Field label="Destination port / airport" name="destination_port" placeholder="e.g. Jebel Ali, Heathrow, Dammam" />
        </FormSection>

        <FormSection step="02" title="Contact person">
          <Field label="Full name" name="contact_name" required autoComplete="name" />
          <Field label="Designation" name="designation" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Phone / WhatsApp" name="phone" type="tel" required autoComplete="tel" />
        </FormSection>

        <FormSection step="03" title="What you need">
          <CheckboxGroup legend="Products of interest" name="categories" options={['Vegetables', 'Fruits', 'Goat meat', 'Spices']} />
          <TextArea label="Products & specifications" name="products_detail" placeholder="e.g. Chilled goat carcass 10–12 kg, 2 tonnes weekly…" required />
          <SelectField
            label="Expected monthly volume"
            name="monthly_volume"
            required
            options={['Trial order', 'Under 5 tonnes', '5 – 20 tonnes', '20 – 100 tonnes', '100+ tonnes']}
          />
          <SelectField label="Preferred Incoterm" name="incoterm" options={['EXW', 'FOB', 'CFR', 'CIF', 'DAP', 'Not sure yet']} />
          <TextArea label="Anything else we should know?" name="message" />
        </FormSection>
      </NetlifyForm>
    </RegistrationShell>
  )
}
