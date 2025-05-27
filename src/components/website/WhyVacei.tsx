const features = [
  {
    image: 'cost-book.gif',
    title: 'Done-for-You Bookkeeping',
    description: 'Your books always up to date - handled by real professionals.',
  },
  {
    image: 'tax.gif',
    title: 'Plain English Accounting',
    description: 'We translate your finances into clear, jargon-free insights.',
  },
  {
    image: 'dashboard.gif',
    title: 'QuickBooks Setup Included',
    description: 'We configure it for you and keep it in sync.',
  },
  {
    image: 'notification.gif',
    title: 'Smart Reminders',
    description: 'Never miss a tax deadline or submission again.',
  },
  {
    image: 'faq.gif',
    title: 'Live Support',
    description: 'Speak with your accountant directly via chat or Zoom.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'Cloud Archive',
    description: 'All your files, tagged and stored securely for future access.',
  },
]

export default function WhyVacei() {
  return (
    <section id="why-vacei" className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-3xl font-bold text-white mb-8 text-center">Why Vacei</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map(({ image, title, description }) => (
            <div
              key={title}
              className="flex gap-4 items-start bg-white border border-gray-200 transition p-4"
            >
              <div className="w-12 h-12 shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-1">{title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
