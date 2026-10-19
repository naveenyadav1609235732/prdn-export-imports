import { createFileRoute } from '@tanstack/react-router'

import { RegistrationShell } from '@/components/site/registration-shell'
import { CheckboxGroup, Field, FormSection, NetlifyForm, SelectField, TextArea } from '@/components/site/netlify-form'

export const Route = createFileRoute('/register/exporter')({
  head: () => ({ meta: [{ title: 'Exporter registration — PRDN Export & Imports' }] }),
  component: ExporterRegistration,
})

function ExporterRegistration() {
  return (
    <RegistrationShell
      role="Exporter"
      code="SUPPLIER DESK · EXP"
      title={<>Grow with us. <em className="text-saffron">Ship</em> with us.</>}
      intro="Farms, packhouses, abattoirs and spice processors: register as a PRDN supply partner and reach buyers across the Gulf, Europe and Asia through our Dubai trade desk."
      image="vegetables.png"
      benefits={[
        'Steady, forecasted purchase orders',
        'Transparent pricing and fast payment cycles',
        'Cold-chain logistics handled from Dubai',
        'Quality feedback on every consignment',
      ]}
      switchTo={{ to: '/register/importer', label: 'Buying instead? Register as an importer' }}
    >
      <NetlifyForm
        name="exporter-registration"
        joinFields={['categories']}
        submitLabel="Submit exporter registration"
        successTitle="Registration received"
        successBody="Thank you for registering as a PRDN supply partner. Our sourcing team reviews every application and will contact you within two business days."
      >
        <FormSection step="01" title="Company">
          <Field label="Company name" name="company" required autoComplete="organization" />
          <Field label="Trade licence / registration no." name="license_number" />
          <Field label="Country" name="country" required autoComplete="country-name" />
          <Field label="City / region" name="city" />
          <Field label="Website" name="website" type="url" placeholder="https://" className="sm:col-span-2" />
        </FormSection>

        <FormSection step="02" title="Contact person">
          <Field label="Full name" name="contact_name" required autoComplete="name" />
          <Field label="Designation" name="designation" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Phone / WhatsApp" name="phone" type="tel" required autoComplete="tel" />
        </FormSection>

        <FormSection step="03" title="What you supply">
          <CheckboxGroup legend="Product categories" name="categories" options={['Vegetables', 'Fruits', 'Goat meat', 'Spices']} />
          <TextArea label="Products & varieties" name="products_detail" placeholder="e.g. Okra, green chilli, Alphonso mango…" required />
          <SelectField
            label="Monthly capacity"
            name="monthly_capacity"
            required
            options={['Under 5 tonnes', '5 – 20 tonnes', '20 – 100 tonnes', '100+ tonnes', '1+ container / week']}
          />
          <Field label="Certifications" name="certifications" placeholder="GlobalG.A.P., Halal, ISO 22000, HACCP…" />
          <TextArea label="Anything else we should know?" name="message" />
        </FormSection>
      </NetlifyForm>
    </RegistrationShell>
  )
}
