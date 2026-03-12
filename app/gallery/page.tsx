import Link from 'next/link'

export default function Gallery() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            📸 Our Moments
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Life at <span className="text-orange-500">Sharma Classes</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Classrooms, events, result celebrations aur bahut kuch — hamare center ki jhalak.
          </p>
        </div>
      </section>

      {/* Classroom Photos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Our Classrooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: '🏫', label: 'Main Classroom', desc: 'AC classroom — 30 students capacity, projector facility' },
              { icon: '📚', label: 'Library & Study Room', desc: 'Quiet study space with reference books available' },
              { icon: '🖥️', label: 'Smart Board Room', desc: 'Digital teaching for complex concepts' },
              { icon: '🪑', label: 'Doubt Clearing Room', desc: 'Small group sessions for personal attention' },
              { icon: '🏆', label: 'Results Wall', desc: 'Topper photos aur achievements display' },
              { icon: '🌿', label: 'Common Area', desc: 'Break time ke liye relaxed space' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-7xl">
                  {item.icon}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800">{item.label}</h3>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Events & Celebrations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎉', label: 'Result Celebration 2024', date: 'May 2024' },
              { icon: '📝', label: 'Annual Mock Test', date: 'Feb 2024' },
              { icon: '🏅', label: 'Topper Felicitation', date: 'June 2024' },
              { icon: '🎓', label: 'Batch Completion', date: 'March 2024' },
              { icon: '👨‍👩‍👧', label: 'Parent-Teacher Meet', date: 'Jan 2024' },
              { icon: '🌟', label: 'Student of the Month', date: 'Monthly' },
              { icon: '📖', label: 'Study Marathon', date: 'Nov 2023' },
              { icon: '🎯', label: 'Pre-Board Special', date: 'Dec 2023' },
            ].map((event) => (
              <div
                key={event.label}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-28 bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center text-5xl">
                  {event.icon}
                </div>
                <div className="p-3">
                  <p className="font-medium text-slate-700 text-sm">{event.label}</p>
                  <p className="text-slate-400 text-xs mt-1">📅 {event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: '❄️', title: 'AC Classrooms', desc: 'Comfortable learning environment — summer mein bhi focused study' },
              { icon: '📡', title: 'Smart Board', desc: 'Digital teaching for diagrams, graphs aur complex topics' },
              { icon: '📷', title: 'CCTV Security', desc: 'Parents ka peace of mind — 24/7 camera surveillance' },
              { icon: '🚰', title: 'RO Water', desc: 'Clean drinking water freely available for all students' },
              { icon: '📶', title: 'WiFi Campus', desc: 'Online resources access for students during study hours' },
              { icon: '🅿️', title: 'Parking', desc: 'Cycle aur bike parking available for students' },
            ].map((f) => (
              <div key={f.title} className="bg-orange-50 rounded-xl p-6 border border-orange-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-800">{f.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Note */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 items-start">
          <span className="text-3xl">📸</span>
          <div>
            <h3 className="font-semibold text-slate-800">Real Photos Coming Soon</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Hamare center ki actual photos aur videos dekhne ke liye hamare
              WhatsApp ya Instagram pe contact karo. Parents ko centre visit
              ke liye bhi welcome kiya jaata hai — anytime during OPD hours.
            </p>
            <a           
              href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20visit%20the%20coaching%20center"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              💬 Visit Centre
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Centre Personally Dekhna Hai?</h2>
        <p className="text-orange-100 mt-2">Free demo class book karo — personally aao aur dekho</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
          >
            💬 Book Free Demo
          </a>
          <Link
            href="/contact"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </section>

    </div>
  )
}