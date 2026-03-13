'use client'

import { FormEvent, useState } from 'react'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzKKtlxkQ3FsxxzqcPIGBeKkZ9ZzszdodGqlg1R-R_rkbnTWSljSj0zUjZio27u045zWw/exec'
const WHATSAPP_NUMBER = '919838184568'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const classLevel = String(formData.get('classLevel') ?? '').trim()
    const goal = String(formData.get('goal') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !phone || !classLevel) {
      setStatusMessage('Please fill required fields.')
      return
    }

    const whatsappText = `Hello, my name is ${name}. Phone: ${phone}. Class/Level: ${classLevel}. Goal: ${goal}. Message: ${message}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`

    setIsSubmitting(true)
    setStatusMessage('')

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, classLevel, goal, message, teacher: 'Promod Srivastava' }),
      })

      form.reset()
      setStatusMessage('Submitted. Opening WhatsApp chat...')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch {
      setStatusMessage('Please connect directly on WhatsApp.')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Contact Teacher Directly
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Connect with <span className="text-orange-500">Promod Srivastava</span>
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            For English class admission, batch timing, and demo class details.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Enquiry Form</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Student name"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone number"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <select
                name="classLevel"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="">Select class/level</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 12">Class 12</option>
                <option value="Spoken English">Spoken English</option>
                <option value="Grammar Practice">Grammar Practice</option>
              </select>
              <input
                type="text"
                name="goal"
                placeholder="Goal (board marks / spoken confidence / grammar)"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your message"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit and Open WhatsApp'}
              </button>
              {statusMessage && <p className="text-sm text-slate-600">{statusMessage}</p>}
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Contact Info</h2>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-xs text-slate-400">Teacher</p>
              <p className="text-slate-800 font-semibold mt-1">Promod Srivastava</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-xs text-slate-400">Phone / WhatsApp</p>
              <a href="tel:+919838184568" className="text-orange-600 font-semibold mt-1 inline-block">
                +91 98381 84568
              </a>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-xs text-slate-400">Available Time</p>
              <p className="text-slate-700 font-medium mt-1">Monday to Saturday, 7:00 AM to 8:00 PM</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-slate-700 font-medium mt-1">Peepal Tiraha, Balrampur, Uttar Pradesh</p>
              <a
                href="https://maps.google.com/?q=Peepal+Tiraha+Balrampur+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20want%20to%20enquire%20about%20English%20classes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}