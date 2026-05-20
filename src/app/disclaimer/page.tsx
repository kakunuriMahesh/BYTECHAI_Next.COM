import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Disclaimer',
  description: 'ByteChai Disclaimer - Important legal disclaimers about our website content and services.',
  path: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1>Disclaimer</h1>
        <p className="lead">Last updated: January 2026</p>

        <h2>1. General Information</h2>
        <p>
          The information provided on this website is for general informational purposes only. While we strive
          to keep the information accurate and up to date, we make no representations or warranties of any kind,
          express or implied, about the completeness, accuracy, reliability, suitability, or availability of
          the information, products, services, or related graphics contained on the website.
        </p>

        <h2>2. Professional Advice</h2>
        <p>
          The content on this website, including blog posts and technical articles, is for educational and
          informational purposes only. It does not constitute professional advice. You should not rely solely
          on this information for making business, legal, or technical decisions. Always consult with
          qualified professionals for advice specific to your situation.
        </p>

        <h2>3. External Links</h2>
        <p>
          Our website may contain links to external websites that are not provided or maintained by us.
          We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on
          these external websites. The inclusion of any links does not necessarily imply a recommendation
          or endorse the views expressed within them.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event will ByteChai be liable for any loss or damage including, without limitation, indirect
          or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or
          profits arising out of, or in connection with, the use of this website.
        </p>

        <h2>5. Blog Content</h2>
        <p>
          Blog posts and articles on this website represent the personal opinions of the author and do not
          necessarily reflect the views of ByteChai as an organization. Code samples are provided as-is
          without warranty. Always test code thoroughly before deploying to production.
        </p>

        <h2>6. Affiliate Disclosure</h2>
        <p>
          Some links on this website may be affiliate links. If you make a purchase through these links,
          we may earn a commission at no additional cost to you. We only recommend products and services
          that we believe will add value to our readers.
        </p>

        <h2>7. Changes to This Disclaimer</h2>
        <p>
          We may update this disclaimer from time to time. Any changes will be posted on this page with
          an updated revision date.
        </p>

        <h2>8. Contact</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at{' '}
          <a href="mailto:maheshkakunuri3@gmail.com">maheshkakunuri3@gmail.com</a>.
        </p>
      </article>
    </div>
  )
}
