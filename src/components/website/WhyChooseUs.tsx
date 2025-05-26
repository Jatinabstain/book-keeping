import { CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    'Smarter than traditional accounting.',
    'Fully virtual — always human-supported.',
    'International-ready and scalable.',
    'Transparent pricing and no lock-ins.',
    'Fast, secure, and audit-friendly.',
  ]

  return (
    <section id="why-choose-us" className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl lg:text-3xl font-bold text-gray-900">Why Choose Vacei?</h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <p className="text-black text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
