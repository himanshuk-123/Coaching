import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1">
            <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
              🏆 Kanpur ka #1 Board Exam Coaching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 leading-tight">
              10th & 12th Board Mein <br />
              <span className="text-orange-500">Top Score</span> Laao
            </h1>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              Expert faculty, proven results, aur personalized attention —
              Sharma Classes mein aapka board exam success guaranteed hai.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { num: '500+', label: 'Students Passed' },
                { num: '95%', label: 'Success Rate' },
                { num: '10+', label: 'Years Experience' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-orange-500">{s.num}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a  
                href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                🎓 Book Free Demo Class
              </a>
              <Link
                href="/courses"
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                View Courses →
              </Link>
            </div>
          </div>

          {/* Right — Info Card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-80 border border-slate-100">
              <p className="text-sm font-semibold text-slate-500 mb-4">🔥 New Batch Starting Soon</p>
              {[
                { label: 'Class 10th — All Subjects', seats: '8 seats left', color: 'bg-red-50 text-red-600' },
                { label: 'Class 12th Science', seats: '5 seats left', color: 'bg-orange-50 text-orange-600' },
                { label: 'Class 12th Commerce', seats: '10 seats left', color: 'bg-yellow-50 text-yellow-600' },
              ].map((batch) => (
                <div key={batch.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{batch.label}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${batch.color}`}>
                    {batch.seats}
                  </span>
                </div>
              ))}
              <a
                href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20enquire%20about%20admission"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Reserve Your Seat →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-orange-500 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '500+', label: 'Students Passed' },
            { num: '95%', label: 'Board Success Rate' },
            { num: '10+', label: 'Years Experience' },
            { num: '20+', label: 'Expert Teachers' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold">{item.num}</p>
              <p className="text-orange-100 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Our Courses</h2>
          <p className="text-slate-400 text-center mt-2">10th aur 12th ke liye complete board preparation</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: '📚', title: 'Class 10th — All Subjects', desc: 'Maths, Science, English, Hindi, Social Science — complete board prep', fee: '₹2,500/month' },
              { icon: '🔬', title: 'Class 12th Science', desc: 'Physics, Chemistry, Maths, Biology — expert faculty', fee: '₹3,000/month' },
              { icon: '📊', title: 'Class 12th Commerce', desc: 'Accounts, Economics, Business Studies, Maths', fee: '₹2,500/month' },
              { icon: '✍️', title: 'Crash Course', desc: 'Board exam ke 2 mahine pehle — intensive revision', fee: '₹4,000 total' },
              { icon: '📝', title: 'Test Series', desc: 'Weekly mock tests, previous year papers, detailed feedback', fee: '₹1,000/month' },
              { icon: '🎯', title: 'Doubt Classes', desc: 'Daily doubt clearing sessions — koi bhi question', fee: 'Free with batch' },
            ].map((c) => (
              <div key={c.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="font-semibold text-slate-800 mt-3">{c.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{c.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {c.fee}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/courses" className="text-orange-500 font-medium hover:underline">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Our Toppers 2024</h2>
          <p className="text-slate-400 text-center mt-2">Hamare students ki mehnat ka result</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { name: 'Priya Sharma', score: '98.4%', class: 'Class 12th Science', rank: '🥇 School Topper' },
              { name: 'Rahul Gupta', score: '97.2%', class: 'Class 10th', rank: '🥈 District Rank 2' },
              { name: 'Anjali Verma', score: '96.8%', class: 'Class 12th Commerce', rank: '🥉 School Topper' },
              { name: 'Amit Kumar', score: '95.6%', class: 'Class 10th', rank: '⭐ State Merit List' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 text-center border border-orange-100 shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center text-3xl">
                  🎓
                </div>
                <h3 className="font-bold text-slate-800 mt-3">{t.name}</h3>
                <p className="text-orange-500 font-bold text-xl mt-1">{t.score}</p>
                <p className="text-slate-400 text-xs mt-1">{t.class}</p>
                <span className="inline-block mt-2 bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                  {t.rank}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/results" className="text-orange-500 font-medium hover:underline">
              View All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Why Sharma Classes?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: '10+ saal experience wale teachers jo board pattern samajhte hain' },
              { icon: '📋', title: 'Board Focused', desc: 'Sirf board exam pattern pe focus — koi extra load nahi' },
              { icon: '📊', title: 'Weekly Tests', desc: 'Regular mock tests se progress track hoti hai' },
              { icon: '🔁', title: 'Doubt Sessions', desc: 'Daily doubt clearing — koi bhi concept clear karo' },
              { icon: '📱', title: 'Parent Updates', desc: 'WhatsApp pe regular progress updates parents ko' },
              { icon: '💰', title: 'Affordable Fees', desc: 'Quality education at reasonable fees — EMI bhi available' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-800 mt-3">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Parents & Students Kehte Hain</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { name: 'Mrs. Sharma', role: 'Parent of Class 10 Student', review: 'Mere bete ka result 72% se 94% ho gaya ek saal mein. Teachers bahut dedicated hain.' },
              { name: 'Sneha Agarwal', role: 'Class 12 Science Student', review: 'Doubt sessions bahut helpful hain. Physics jo samajh nahi aati thi woh ab easy lagti hai.' },
              { name: 'Mr. Verma', role: 'Parent of Class 12 Student', review: 'Fees reasonable hai aur quality excellent. WhatsApp pe progress updates milte hain regularly.' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">"{t.review}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-orange-400 text-xs mt-1">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Admission Le Lo — Limited Seats Hain!</h2>
        <p className="text-orange-100 mt-2 text-lg">Free demo class book karo aaj — koi commitment nahi</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
          >
            💬 WhatsApp Now
          </a>
          <Link
            href="/contact"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Admission Form →
          </Link>
        </div>
      </section>

    </div>
  )
}