import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FBF8F3] px-4 py-20 relative overflow-hidden">
      <div className="w-[265px] h-[265px] bg-[#FFF8AF] blur-[100px] absolute top-0 -left-10"></div>
      <div className="w-[265px] h-[265px] bg-[#B6FFAF] blur-[100px] absolute bottom-0 -right-10"></div>
      <div className="max-w-6xl mx-auto flex flex-wrap gap-20 relative z-1">
        {/* Company Info */}
        <div className="flex flex-col lg:flex-[2_0%]">
          <img src="/logo.svg" className='mb-4 h-10 object-contain me-auto' alt="" />
          <p className="text-dark text-base leading-6 mb-4 font-light">
        © {new Date().getFullYear()} Vacei. All rights reserved.
          </p>
          <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <a href="#">
            <img src="/facebook.svg" className='w-5 h-5 object-contain' alt="facebook" />
          </a>
          <a href="#">
            <img src="/x.svg" className='w-5 h-5 object-contain' alt="x" />
          </a>
          <a href="#">
            <img src="/insta.svg" className='w-5 h-5 object-contain' alt="instagram" />
          </a>
          <a href="#">
            <img src="/linkedin.svg" className='w-5 h-5 object-contain' alt="linkedin" />
          </a>
        </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col flex-1">
          <h4 className="text-base font-medium mb-2.5">Platform</h4>
          <ul className="leading-[30px] text-base font-light">
        <li><a href="/login">Dashboard</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="/website/industries">Industries</a></li>
        <li><a href="/website/customers">Customers</a></li>
          </ul>
        </div>

        <div className="flex flex-col flex-1">
          <h4 className="text-base font-medium mb-2.5">Company</h4>
          <ul className="leading-[30px] text-base font-light">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col flex-1">
          <h4 className="text-base font-medium mb-2.5">Legal</h4>
          <ul className="leading-[30px] text-base font-light">
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
