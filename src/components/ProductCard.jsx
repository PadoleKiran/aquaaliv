export default function ProductCard({ name, type, capacity, price, features = [], onEnquire }) {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-slate-500">{type}</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 text-sm text-slate-600">Capacity: {capacity}</p>
        <p className="mt-3 text-xl font-bold text-slate-900">₹ {price.toLocaleString('en-IN')}</p>
        {features?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> {f}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={onEnquire} className="btn-primary mt-4">Enquire</button>
    </div>
  )
}
