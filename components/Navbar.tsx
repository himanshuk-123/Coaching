'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20to%20enquire%20about%20English%20classes'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">EN</span>
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm leading-none">Promod Srivastava</p>
            <p className="text-xs text-slate-400">English Coaching Classes</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ['/', 'Home'],
            ['/courses', 'Courses'],
            ['/gallery', 'Gallery'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          📞 Call: 9838184568
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {[
            ['/', 'Home'],
            ['/courses', 'Courses'],
            ['/gallery', 'Gallery'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-slate-700 font-medium"
            >
              {label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
          >
            📞 9838184568
          </a>
        </div>
      )}
    </nav>
  )
}