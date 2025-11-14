import { useState } from 'react'
import { Send } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submit - integrate backend later if needed
    await new Promise((r) => setTimeout(r, 600))
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
          <p className="text-gray-600 mt-2">Parliamo del tuo prossimo progetto</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Preferisci scrivermi direttamente? <a className="text-blue-600 hover:underline" href="mailto:hello@uxdesigner.com">hello@uxdesigner.com</a>
            </p>
            <p className="text-sm text-gray-600">
              Sono disponibile per progetti freelance, consulenze e collaborazioni.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            {sent ? (
              <div className="text-green-700 bg-green-50 border border-green-200 rounded-md p-4">
                Messaggio inviato! Ti risponderò al più presto.
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors">
                  <Send size={16} /> Invia
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
