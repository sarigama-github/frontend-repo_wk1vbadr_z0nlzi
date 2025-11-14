import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-24 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-50 rounded-full px-3 py-1">UX • Product • Research</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Ciao, sono un UX Designer
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Progetto esperienze digitali semplici e coinvolgenti. Dalla ricerca al prototipo ad alta fedeltà, metto le persone al centro.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold px-5 py-3 hover:bg-blue-700 transition-colors">Guarda i progetti</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-900 text-sm font-semibold px-5 py-3 hover:bg-gray-50 transition-colors">Contattami</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
