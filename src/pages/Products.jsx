import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Home RO', 'Commercial RO', 'Under-sink RO', 'UV / UF']

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => {
    if (active === 'All') return products
    return products.filter((p) => p.type === active)
  }, [active])

  return (
    <>
      <Helmet>
        <title>Products | AquaaLiv</title>
        <meta name="description" content="Explore RO, UV/UF, under-sink, and commercial water purifiers by AquaaLiv with key features, capacity, and pricing." />
      </Helmet>
      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Our Products</h1>
          <p className="mt-2 text-slate-600">Advanced purification for every need</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === c ? 'border-brand-blue bg-sky-50 text-brand-blue' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} onEnquire={() => (window.location.href = '/contact')} />
          ))}
        </div>
      </section>
    </>
  )
}
