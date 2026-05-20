import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'ByteChai Terms and Conditions - Rules and guidelines for using our website and services.',
  path: '/terms-and-conditions',
})

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1>Terms &amp; Conditions</h1>
        <p className="lead">Last updated: January 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the ByteChai website, you agree to be bound by these Terms and Conditions.
          If you do not agree with any part of these terms, you should not use our services.
        </p>

        <h2>2. Services Description</h2>
        <p>
          ByteChai provides web development, mobile app development, AI integration, and business automation
          services. The specific scope, timeline, and deliverables are defined in individual project agreements.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and code, is the property of ByteChai
          unless otherwise stated. You may not reproduce, distribute, or modify any content without explicit permission.
        </p>

        <h2>4. User Obligations</h2>
        <p>As a user, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Not use the website for any unlawful purpose</li>
          <li>Not attempt to compromise website security</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          ByteChai shall not be liable for any indirect, incidental, or consequential damages arising from
          the use or inability to use our services. Our total liability shall not exceed the amount paid
          for the specific service giving rise to the claim.
        </p>

        <h2>6. Payment Terms</h2>
        <p>
          Payment terms are outlined in individual project proposals and contracts. Unless otherwise agreed,
          a deposit is required before work commences, with the balance due upon project completion.
        </p>

        <h2>7. Termination</h2>
        <p>
          Either party may terminate a project agreement under the terms specified in the contract.
          ByteChai reserves the right to refuse service to any person or entity.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective immediately
          upon posting to this page. Continued use of the website constitutes acceptance of modified terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of India.
          Any disputes shall be resolved in the courts of Hyderabad, India.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:maheshkakunuri3@gmail.com">maheshkakunuri3@gmail.com</a>.
        </p>
      </article>
    </div>
  )
}
