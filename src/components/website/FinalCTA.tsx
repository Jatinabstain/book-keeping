import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="bg-neutral-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-6">

        <div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Create your free account 
            <span className="block text-neutral-400">or book a walkthrough.</span>
          </h2>
          <p className="text-neutral-400 text-lg mt-3">
            Let us handle the books, while you focus on your business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
          <Link
            href="#"
            className="bg-white text-black font-medium px-6 py-3 shadow hover:bg-neutral-200 transition"
          >
            Create Free Account
          </Link>
          <Link
            href="#"
            className="border border-white/20 text-white font-medium px-6 py-3 hover:bg-white/10 transition"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
