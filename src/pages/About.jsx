import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | AquaaLiv</title>
        <meta name="description" content="AquaaLiv's mission is to deliver pure, healthy water through advanced purification systems and reliable service." />
      </Helmet>
      <section className="container-p py-12 sm:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900">About AquaaLiv</h1>
        <p className="mt-4 text-slate-700">
          AquaaLiv was founded with a simple belief: clean drinking water should be accessible to every home and business. We bring together
          advanced RO and UV/UF purification technology, certified technicians, and a customer-first service approach.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-2 text-slate-600">To enable healthier lives by delivering safe, great-tasting water solutions with professional care and transparency.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
            <p className="mt-2 text-slate-600">To be the most trusted water partner for families and organizations across the country.</p>
          </div>
        </div>
        <div className="mt-6 card">
          <h2 className="text-xl font-semibold text-slate-900">Commitment to Health & Purity</h2>
          <p className="mt-2 text-slate-600">We use genuine parts, adhere to strict hygiene practices, and calibrate each unit for optimal TDS and taste. Your wellbeing is our priority.</p>
        </div>
      </section>
    </>
  )
}
