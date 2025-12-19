export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="card h-full">
      <p className="text-slate-700">“{text}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white grid place-items-center font-semibold">
          {name?.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
