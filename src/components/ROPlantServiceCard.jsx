import { Link } from "react-router-dom";

export default function ROPlantServiceCard({
  title,
  description,
  points = [],
  recommended,
  tag,
  image,
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* ================= IMAGE (FIXED) ================= */}
      {image && (
        <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* TAG */}
        {tag && (
          <span className="mb-2 inline-block w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            {tag}
          </span>
        )}

        {/* TITLE */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* FEATURES */}
        <ul className="space-y-2 text-sm text-slate-700 flex-1">
          {points.slice(0, 5).map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
              {point}
            </li>
          ))}
        </ul>

        {/* RECOMMENDED */}
        {recommended && (
          <p className="mt-3 text-xs text-slate-500">
            <strong>Recommended:</strong> {recommended}
          </p>
        )}

        {/* CTA */}
        <Link
          to="/contact"
          className="btn-primary mt-5 w-full text-center"
        >
          Book Service
        </Link>
      </div>
    </div>
  );
}
