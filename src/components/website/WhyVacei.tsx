const features = [
  {
    image: 'dedicated-server.gif',
    title: 'Smart Reminders',
    description: 'Never miss a tax deadline or submission again.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'Done-for-You Bookkeeping',
    description: 'Your books always up to date - handled by real professionals.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'Cloud Archive',
    description: 'All your files, tagged and stored securely for future access.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'QuickBooks Setup Included',
    description: 'We configure it for you and keep it in sync.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'Live Support',
    description: 'Speak with your accountant directly via chat or Zoom.',
  },
  {
    image: 'dedicated-server.gif',
    title: 'Plain English Accounting',
    description: 'We translate your finances into clear, jargon-free insights.',
  },
]

export default function WhyVacei() {
  return (
    <section id="why-vacei" className="bg-white pb-[120px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#FBF8F3] lg:p-20 p-5 rounded-3xl">
          <div className="bg-white lg:px-20 p-5 lg:py-12 rounded-3xl">
            <h2 className="text-3xl lg:text-5xl font-medium lg:mb-12 mb-6 text-center">Why Choose Vacei</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-6">
              {features.map(({ image, title, description }) => (
                <div key={title} className="lg:space-y-2.5 space-y-1">
                  <div className="w-[50px] h-[50px] shrink-0">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <h4 className="lg:text-2xl text-lg font-normal text-dark leading-6 mb-2.5 capitalize">{title}</h4>
                  <p className="text-[#3D3D3D] lg:text-base text-sm capitalize">{description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
