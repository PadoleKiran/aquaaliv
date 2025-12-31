// export default function TestimonialCard({ name, role, text, description, rating }) {
//   const body = text || description || "";

//   return (
//     <div className="card h-full">
//       {typeof rating === "number" && rating > 0 && (
//         <div className="mb-2 flex items-center gap-1 text-yellow-400">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <svg
//               key={star}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className={`h-4 w-4 ${
//                 rating >= star ? "text-yellow-400" : "text-slate-300"
//               }`}
//               fill={rating >= star ? "currentColor" : "none"}
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M12 2l2.39 6.95H22l-5.45 3.96L18.9 20 12 15.9 5.1 20l2.35-7.09L2 8.95h7.61z" />
//             </svg>
//           ))}
//         </div>
//       )}
//       <p className="text-slate-700">“{body}”</p>
//       <div className="mt-4 flex items-center gap-3">
//         <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white grid place-items-center font-semibold">
//           {name?.charAt(0)}
//         </div>
//         <div>
//           <p className="font-medium text-slate-900">{name}</p>
//           <p className="text-xs text-slate-500">{role}</p>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function TestimonialCard({
  name,
  role = "Customer",
  text,
  description,
  rating = 5,
}) {
  let body = text?.trim() || description?.trim();
  if (!body) return null;

  // UI-only formatting (does not change DB)
  body = body.charAt(0).toUpperCase() + body.slice(1);

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-sm
        hover:shadow-md
        transition-all duration-300
        px-8 py-7
        max-w-md w-full
        flex flex-col items-center
        text-center
      "
    >
      {/* Review Message */}
      <p className="text-base sm:text-lg text-slate-800 leading-relaxed mb-6">
        “{body}”
      </p>

      {/* Stars */}
      {Number.isFinite(rating) && rating > 0 && (
        <div className="flex justify-center gap-1 mb-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${
                rating >= star ? "text-yellow-400" : "text-slate-300"
              }`}
              fill="currentColor"
            >
              <path d="M12 2l2.39 6.95H22l-5.45 3.96L18.9 20 12 15.9 5.1 20l2.35-7.09L2 8.95h7.61z" />
            </svg>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="w-10 h-px bg-slate-300 mb-4" />

      {/* User (PERFECTLY CENTERED) */}
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white grid place-items-center font-semibold mb-2">
          {name?.charAt(0)?.toUpperCase()}
        </div>

        <p className="font-semibold text-slate-900 text-center leading-tight">
          {name}
        </p>
        <p className="text-sm text-slate-500 text-center">
          {role}
        </p>
      </div>
    </div>
  );
}
