'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'

const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL'
const WHATSAPP_NUMBER = '919999999999'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const studentClass = String(formData.get('studentClass') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !phone || !studentClass) {
      setStatusMessage('Please fill in all required fields.')
      return
    }

    const whatsappText = `Hello, mera naam ${name} hai. Phone: ${phone}. Class: ${studentClass}. Subject: ${subject}. Message: ${message}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`

    setIsSubmitting(true)
    setStatusMessage('')

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, studentClass, subject, message }),
      })

      form.reset()
      setStatusMessage('Message sent! WhatsApp pe connect ho rahe hain...')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch {
      setStatusMessage('Seedha WhatsApp pe contact karo.')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Admission <span className="text-orange-500">Enquiry</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Form bharo ya seedha WhatsApp karo — 1 ghante mein reply guaranteed.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '💬',
                title: 'WhatsApp',
                desc: 'Sabse fast — turant reply milega',
                action: 'Chat Now',
                href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20want%20to%20enquire%20about%20admission`,
                color: 'bg-green-500 hover:bg-green-600',
                external: true,
              },
              {
                icon: '📞',
                title: 'Call Us',
                desc: 'Mon–Sat, 8am–7pm',
                action: '+91 99999 99999',
                href: 'tel:+919999999999',
                color: 'bg-orange-500 hover:bg-orange-600',
                external: false,
              },
              {
                icon: '📍',
                title: 'Visit Us',
                desc: '45, Kidwai Nagar, Kanpur',
                action: 'Get Directions',
                href: 'https://maps.google.com/?q=Kidwai+Nagar+Kanpur',
                color: 'bg-slate-700 hover:bg-slate-800',
                external: true,
              },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center flex flex-col items-center gap-3">
                <span className="text-5xl">{card.icon}</span>
                <h3 className="font-bold text-slate-800 text-lg">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.desc}</p>
                <a                
                  href={card.href}
                  target={card.external ? '_blank' : '_self'}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className={`mt-2 ${card.color} text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors`}
                >
                  {card.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Admission Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Admission Enquiry Form</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">
                  Student Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Student ka naam"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 99999 99999"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">
                  Class <span className="text-red-400">*</span>
                </label>
                <select
                  name="studentClass"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                >
                  <option value="">Select Class</option>
                  <option value="Class 10th">Class 10th</option>
                  <option value="Class 12th Science">Class 12th Science</option>
                  <option value="Class 12th Commerce">Class 12th Commerce</option>
                  <option value="Crash Course">Crash Course</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Kaunsa subject — e.g. Maths, Science"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Koi bhi sawaal ya special requirement..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry →'}
              </button>
              {statusMessage && (
                <p className="text-sm text-slate-600">{statusMessage}</p>
              )}
              <p className="text-xs text-slate-400">
                Form submit hote hi WhatsApp automatically open hoga — fast response ke liye.
              </p>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Centre Information</h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: '📍', label: 'Address', value: '45, Kidwai Nagar, Near Bus Stand, Kanpur — 208011' },
                { icon: '📞', label: 'Phone', value: '+91 99999 99999' },
                { icon: '💬', label: 'WhatsApp', value: '+91 99999 99999' },
                { icon: '🕐', label: 'Morning Batch', value: '6:00 AM – 9:00 AM' },
                { icon: '🕔', label: 'Evening Batch', value: '4:00 PM – 7:00 PM' },
                { icon: '📅', label: 'Working Days', value: 'Monday – Saturday' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                    <p className="text-slate-700 font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Admission Process */}
            <div className="mt-6 bg-orange-50 rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-slate-800 mb-3">📋 Admission Process</h3>
              <div className="flex flex-col gap-2">
                {[
                  '1. WhatsApp ya form se enquiry karo',
                  '2. Free demo class attend karo',
                  '3. Batch aur timing select karo',
                  '4. Fees submit karo — admission confirmed!',
                ].map((step) => (
                  <p key={step} className="text-sm text-slate-600">{step}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="px-4 pb-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Find Us on Map</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.1!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKidwai%20Nagar%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Abhi Admission Lo!</h2>
        <p className="text-orange-100 mt-2">Limited seats — jaldi karo</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20want%20to%20enquire%20about%20admission`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
          >
            💬 WhatsApp Now
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
