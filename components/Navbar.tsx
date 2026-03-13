'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20to%20enquire%20about%20English%20classes'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100 animate-nav">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/promod-sir.jpeg"
            alt="Promod Srivastava"
            width={38}
            height={38}
            className="rounded-lg object-cover border border-slate-200 hover-lift"
          />
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
            ['/results', 'Results'],
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
          className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors btn-pop"
        >
          📞 Call: 9838184568
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 text-2xl btn-pop">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4 animate-rise">
          {[
            ['/', 'Home'],
            ['/courses', 'Courses'],
            ['/results', 'Results'],
            ['/gallery', 'Gallery'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-slate-700 font-medium btn-pop"
            >
              {label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center btn-pop"
          >
            📞 9838184568
          </a>
        </div>
      )}
    </nav>
  )
}