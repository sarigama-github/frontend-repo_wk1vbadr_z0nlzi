import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce checkout redesign',
    description: 'Ridisegno del flusso di checkout per ridurre l’abbandono e aumentare la conversione.',
    tags: ['UX Research', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Mobile banking onboarding',
    description: 'Onboarding chiaro e progressivo per un’app di mobile banking.',
    tags: ['User Flows', 'UI Design', 'Motion'],
  },
  {
    title: 'SaaS analytics dashboard',
    description: 'Visualizzazioni dati e IA per insight immediati in un dashboard SaaS.',
    tags: ['Information Architecture', 'Design System', 'Data Viz'],
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-600 mt-2">Selezione di lavori recenti e case study.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
