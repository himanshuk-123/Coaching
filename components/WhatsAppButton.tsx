export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918468087211?text=Hello,%20I%20want%20to%20enquire%20about%20admission"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
    >
      <span className="text-xl">💬</span>
      <span className="text-sm font-medium">Enquire Now</span>
    </a>
  )
}