import Link from 'next/link'

export default function Results() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            🏆 Our Track Record
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Results & <span className="text-orange-500">Toppers</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Hamare students ki mehnat aur teachers ki dedication ka result — har saal consistently.
          </p>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto">
            {[
              { num: '500+', label: 'Total Students' },
              { num: '95%', label: 'Pass Rate' },
              { num: '120+', label: 'Distinction Students' },
              { num: '10+', label: 'Years of Results' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-4 border border-orange-100 shadow-sm">
                <p className="text-3xl font-bold text-orange-500">{s.num}</p>
                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Toppers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Board Toppers 2024</h2>
              <p className="text-slate-400 text-sm mt-1">CBSE & UP Board — Class 10th & 12th</p>
            </div>
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
              Latest Results
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Priya Sharma', score: '98.4%', class: 'Class 12th Science', rank: 'School Topper', medal: '🥇' },
              { name: 'Rahul Gupta', score: '97.2%', class: 'Class 10th', rank: 'District Rank 2', medal: '🥈' },
              { name: 'Anjali Verma', score: '96.8%', class: 'Class 12th Commerce', rank: 'School Topper', medal: '🥉' },
              { name: 'Amit Kumar', score: '95.6%', class: 'Class 10th', rank: 'State Merit List', medal: '⭐' },
              { name: 'Neha Singh', score: '94.8%', class: 'Class 12th Science', rank: 'Top 10 District', medal: '⭐' },
              { name: 'Rohit Yadav', score: '93.6%', class: 'Class 12th Commerce', rank: 'School Rank 2', medal: '⭐' },
              { name: 'Pooja Mishra', score: '92.4%', class: 'Class 10th', rank: 'School Topper', medal: '⭐' },
              { name: 'Karan Agarwal', score: '91.8%', class: 'Class 12th Science', rank: 'School Rank 3', medal: '⭐' },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-full mx-auto flex items-center justify-center text-2xl">
                  🎓
                </div>
                <p className="text-2xl mt-2">{t.medal}</p>
                <h3 className="font-bold text-slate-800 mt-1">{t.name}</h3>
                <p className="text-orange-500 font-bold text-2xl mt-1">{t.score}</p>
                <p className="text-slate-400 text-xs mt-1">{t.class}</p>
                <span className="inline-block mt-2 bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                  {t.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year wise Results */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Year-wise Performance</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-orange-500 text-white text-sm font-semibold px-6 py-3">
              <p>Year</p>
              <p>Students</p>
              <p>Pass Rate</p>
              <p>Distinction</p>
            </div>
            {[
              { year: '2024', students: '62', pass: '95%', distinction: '28' },
              { year: '2023', students: '55', pass: '93%', distinction: '22' },
              { year: '2022', students: '48', pass: '91%', distinction: '18' },
              { year: '2021', students: '42', pass: '90%', distinction: '15' },
              { year: '2020', students: '38', pass: '88%', distinction: '12' },
            ].map((row, i) => (
              <div
                key={row.year}
                className={`grid grid-cols-4 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
              >
                <p className="font-semibold text-slate-700">{row.year}</p>
                <p className="text-slate-600">{row.students}</p>
                <p className="text-green-600 font-semibold">{row.pass}</p>
                <p className="text-orange-500 font-semibold">{row.distinction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject wise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Subject-wise Excellence 2024</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { subject: 'Mathematics', topScore: '100/100', students: '8 students scored 95+', icon: '🔢' },
              { subject: 'Science', topScore: '99/100', students: '12 students scored 90+', icon: '🔬' },
              { subject: 'English', topScore: '98/100', students: '15 students scored 90+', icon: '📖' },
              { subject: 'Accountancy', topScore: '100/100', students: '6 students scored 95+', icon: '📊' },
              { subject: 'Physics', topScore: '97/100', students: '9 students scored 90+', icon: '⚡' },
              { subject: 'Chemistry', topScore: '96/100', students: '7 students scored 90+', icon: '🧪' },
            ].map((s) => (
              <div key={s.subject} className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-800">{s.subject}</h3>
                  <p className="text-orange-500 font-bold text-lg mt-1">{s.topScore}</p>
                  <p className="text-slate-400 text-xs mt-1">{s.students}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Apna Naam Bhi Is List Mein Aayega!</h2>
        <p className="text-orange-100 mt-2">Abhi admission lo — limited seats hain</p>
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
            href="/courses"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            View Courses →
          </Link>
        </div>
      </section>

    </div>
  )
}