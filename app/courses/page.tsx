import Link from 'next/link'

export default function Courses() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Our Programs
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Courses & <span className="text-orange-500">Batch Details</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            10th aur 12th Board ke liye specially designed courses — expert faculty ke saath.
          </p>
        </div>
      </section>

      {/* Class 10th */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📘</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Class 10th Programs</h2>
              <p className="text-slate-400 text-sm">CBSE & UP Board — All Subjects</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Complete Board Package',
                subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science'],
                timing: 'Mon–Sat | 7am–9am or 4pm–6pm',
                fee: '₹2,500/month',
                seats: '5 seats left',
                tag: '🔥 Most Popular',
                tagColor: 'bg-red-50 text-red-600',
              },
              {
                title: 'Maths & Science Special',
                subjects: ['Mathematics', 'Science (Physics + Chemistry + Bio)'],
                timing: 'Mon–Sat | 6am–8am or 5pm–7pm',
                fee: '₹1,800/month',
                seats: '8 seats left',
                tag: '⭐ Best Value',
                tagColor: 'bg-orange-50 text-orange-600',
              },
            ].map((course) => (
              <div key={course.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-slate-800 text-lg">{course.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-slate-400 font-medium mb-2">SUBJECTS COVERED</p>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((sub) => (
                      <span key={sub} className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm text-slate-600">🕐 {course.timing}</p>
                  <p className="text-sm text-slate-600">💺 {course.seats}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-xl">{course.fee}</span>
                  <a
                    href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20enquire%20about%20Class%2010th%20admission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class 12th */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">📙</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Class 12th Programs</h2>
              <p className="text-slate-400 text-sm">CBSE & UP Board — Science & Commerce</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '12th Science — Complete',
                subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
                timing: 'Mon–Sat | 6am–8am or 4pm–6pm',
                fee: '₹3,000/month',
                seats: '5 seats left',
                tag: '🔬 Science Stream',
                tagColor: 'bg-blue-50 text-blue-600',
              },
              {
                title: '12th Commerce — Complete',
                subjects: ['Accountancy', 'Economics', 'Business Studies', 'Maths'],
                timing: 'Mon–Sat | 7am–9am or 5pm–7pm',
                fee: '₹2,500/month',
                seats: '10 seats left',
                tag: '📊 Commerce Stream',
                tagColor: 'bg-green-50 text-green-600',
              },
            ].map((course) => (
              <div key={course.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-slate-800 text-lg">{course.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-slate-400 font-medium mb-2">SUBJECTS COVERED</p>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((sub) => (
                      <span key={sub} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm text-slate-600">🕐 {course.timing}</p>
                  <p className="text-sm text-slate-600">💺 {course.seats}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-xl">{course.fee}</span>
                  <a
                    href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20enquire%20about%20Class%2012th%20admission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Crash Course',
                desc: 'Board exam ke 2 mahine pehle — intensive revision, important questions, mock tests',
                fee: '₹4,000 total',
                tag: 'Limited Time',
              },
              {
                icon: '📝',
                title: 'Test Series',
                desc: 'Weekly mock tests with detailed feedback — board pattern pe bilkul',
                fee: '₹1,000/month',
                tag: 'Standalone',
              },
              {
                icon: '🎯',
                title: 'Doubt Clearing',
                desc: 'Daily 1 hour doubt session — koi bhi subject, koi bhi question',
                fee: 'Free with batch',
                tag: 'Add-on',
              },
            ].map((p) => (
              <div key={p.title} className="bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-md transition-shadow">
                <span className="text-4xl">{p.icon}</span>
                <div className="flex items-center gap-2 mt-3">
                  <h3 className="font-bold text-slate-800">{p.title}</h3>
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">{p.tag}</span>
                </div>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{p.desc}</p>
                <p className="text-orange-500 font-bold mt-4">{p.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee & Facility Info */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 items-start">
          <span className="text-3xl">ℹ️</span>
          <div>
            <h3 className="font-semibold text-slate-800">Fee & Facilities</h3>
            <div className="text-slate-500 text-sm mt-2 leading-relaxed flex flex-col gap-1">
              <p>✅ Study material included in fees</p>
              <p>✅ Monthly fee — koi advance nahi</p>
              <p>✅ EMI available for annual package</p>
              <p>✅ Free demo class before admission</p>
              <p>✅ Cash aur UPI dono accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Apna Course Choose Kar Liya?</h2>
        <p className="text-orange-100 mt-2">Free demo class book karo — pehle dekho phir decide karo</p>
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
            Admission Form →
          </Link>
        </div>
      </section>

    </div>
  )
}