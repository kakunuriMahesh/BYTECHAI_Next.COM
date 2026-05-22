import Link from 'next/link'
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { socialLinks } from '@/lib/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Work & Expertise', path: '/services' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
        { name: 'Disclaimer', path: '/disclaimer' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Uses', path: '/uses' },
        { name: 'Sitemap', path: '/sitemap.xml' },
      ],
    },
  ]

  const icons = [FaGithub, FaLinkedin]

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <FaCode className="text-chai text-2xl" />
              <span className="font-heading text-2xl font-bold tracking-tight">
                <span className="text-chai">Byte</span>Chai
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Where technology meets creativity. We brew high-performance digital solutions with a human touch.
            </p>
            <div className="flex gap-3">
              {icons.map((Icon, i) => (
                <a
                  key={i}
                  href={socialLinks[i]?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-chai hover:text-white transition-all"
                  aria-label={socialLinks[i]?.name}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-gray-600 hover:text-chai transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[11px] font-medium tracking-wide">
            &copy; {currentYear} ByteChai. All rights reserved.
          </p>
          <p className="text-gray-400 text-[11px] font-medium tracking-wide flex items-center gap-1">
            Made with <FaHeart className="text-chai" size={10} /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}
