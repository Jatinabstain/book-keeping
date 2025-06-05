import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="bg-[#0A1B04] text-white py-[100px] px-4">
      <div className="lg:max-w-3xl max-w-xl mx-auto px-4">
        <div className="text-center mb-[50px]">
          <h2 className="lg:text-5xl text-4xl font-normal lg:leading-[60px] leading-12 text-white">
            Ready to Simplify Your Business? Let us handle the books
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row gap-6 justify-center lg:px-0 px-5">
          <Link
            href="#"
            className="bg-primary text-white font-normal px-8 py-3.5 text-lg rounded-lg capitalize text-center"
          >
            Create Free Account
          </Link>
          <Link
            href="#"
            className="bg-transparent text-white font-normal px-8 py-3 text-lg rounded-lg capitalize border border-white text-center"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
