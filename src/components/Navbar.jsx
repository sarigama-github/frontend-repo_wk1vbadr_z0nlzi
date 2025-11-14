import { useState, useEffect } from 'react'
import { Menu, X, User, PanelsTopLeft, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Projects', href: '#projects', icon: PanelsTopLeft },
    { label: 'About', href: '#about', icon: User },
    { label: 'Contact', href: '#contact', icon: Mail },
  ]

  const NavLink = ({ item, onClick }) => (
    <a
      href={item.href}
      onClick={() => {
        setOpen(false)
        if (onClick) onClick()
      }}
      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
    >
      <item.icon size={18} />
      {item.label}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold text-gray-900 text-lg tracking-tight">
            UX Designer
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors">
              Let’s talk
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-2 flex flex-col">
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors">
                Let’s talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
