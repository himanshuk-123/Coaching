import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">Promod Srivastava English Classes</h3>
          <p className="text-sm text-slate-400">
            Focused English coaching for grammar, writing, spoken skills, and board exam preparation.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1 text-sm">
            {[
              ['/', 'Home'],
              ['/courses', 'Courses'],
              ['/gallery', 'Gallery'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">👨‍🏫 Teacher: Promod Srivastava</p>
          <p className="text-sm mt-1">📞 +91 98381 84568</p>
          <p className="text-sm mt-1">🕐 Mon–Sat: 7:00 AM to 8:00 PM</p>
          <p className="text-sm mt-1">📍 Peepal Tiraha, Balrampur, Uttar Pradesh</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">
        © 2026 Promod Srivastava English Classes.
      </div>
    </footer>
  )
}