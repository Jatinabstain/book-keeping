import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">Vacei</h2>
          <p className="text-neutral-400">
            Modern bookkeeping made easy. Real support, no stress.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Dashboard</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Vacei. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
