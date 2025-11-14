import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <h2 className="text-3xl font-bold text-gray-900">About</h2>
          <p className="text-gray-600 mt-2">Chi sono e come lavoro</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-4 text-gray-700"
        >
          <p>
            Sono un UX designer con esperienza in ricerca, strategia e interfacce. Mi piace trasformare problemi complessi in prodotti semplici e utili.
          </p>
          <p>
            Collaboro con team cross‑funzionali, facilito workshop e prototipo rapidamente per validare le soluzioni. Credo in un design inclusivo e basato sui dati.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            <li className="bg-white border border-gray-200 rounded-md px-3 py-2">Design Thinking & Research</li>
            <li className="bg-white border border-gray-200 rounded-md px-3 py-2">Wireframe & Prototipi</li>
            <li className="bg-white border border-gray-200 rounded-md px-3 py-2">Design System</li>
            <li className="bg-white border border-gray-200 rounded-md px-3 py-2">UX Writing & Accessibility</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
