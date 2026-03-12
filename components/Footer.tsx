import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">Sharma Classes</h3>
          <p className="text-sm text-slate-400">
            Kanpur ka trusted coaching center — 10th aur 12th Board Exams ke liye.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1 text-sm">
            {[
              ['/', 'Home'],
              ['/courses', 'Courses'],
              ['/results', 'Results'],
              ['/faculty', 'Faculty'],
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
          <p className="text-sm">📍 45, Kidwai Nagar, Kanpur</p>
          <p className="text-sm mt-1">📞 +91 99999 99999</p>
          <p className="text-sm mt-1">🕐 Mon–Sat: 8am – 7pm</p>
          <p className="text-sm mt-1">📧 sharmaclasses@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">
        © 2024 Sharma Classes. Website by{' '}
        <span className="text-orange-400">Dorara.tech</span>
      </div>
    </footer>
  )
}