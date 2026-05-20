import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'ByteChai Privacy Policy - How we collect, use, and protect your information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: January 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to ByteChai. We respect your privacy and are committed to protecting your personal data.
          This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, email address, and phone number when you fill out a contact form.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected data for:</p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Responding to your inquiries and messages</li>
          <li>Improving user experience and website performance</li>
          <li>Sending occasional updates and marketing communications (with consent)</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However, no method of
          transmission over the Internet is 100% secure. We cannot guarantee absolute security but strive to
          use commercially acceptable means to protect your data.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services such as Google Analytics, Vercel Analytics, and email providers
          that have their own privacy policies. We encourage you to review their policies.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. You can control cookie preferences
          through your browser settings. We use essential cookies for website functionality and analytics
          cookies to understand usage patterns.
        </p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{' '}
          <a href="mailto:maheshkakunuri3@gmail.com">maheshkakunuri3@gmail.com</a>.
        </p>
      </article>
    </div>
  )
}
