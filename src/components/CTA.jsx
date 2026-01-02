import { Link } from 'react-router-dom'

export default function CTA({
  title = 'Get Started Today - Your Journey to Pure Water',
  description = "Don't wait another day with unsafe water. Your family's health is precious, and every moment you delay puts them at risk. Join thousands of satisfied customers who chose RO Care India for their water purification needs.",
  buttonText = 'Contact Us',
  buttonTo = '/contact',
}) {
  return (
    <section className="container-p mt-10 sm:mt-12">
      <div className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-2xl">
        <div className="px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] md:text-base/7 text-white/90 max-w-4xl">
            {description}
          </p>
          <div className="mt-5">
            <Link
              to={buttonTo}
              className="inline-flex items-center gap-2 rounded-md bg-white text-blue-700 hover:text-blue-800 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
