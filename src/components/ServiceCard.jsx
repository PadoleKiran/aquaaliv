export default function ServiceCard({ title, description, features = [], cta }) {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        {features?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> {f}
              </li>
            ))}
          </ul>
        )}
      </div>
      {cta}
    </div>
  )
}
