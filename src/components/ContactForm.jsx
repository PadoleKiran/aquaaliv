import { useState } from 'react'

const initialState = { name: '', phone: '', email: '', message: '' }

export default function ContactForm({ onSubmitSuccess }) {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validate(values) {
    const e = {}
    if (!values.name?.trim()) e.name = 'Please enter your name'
    if (!/^[0-9]{10}$/.test(values.phone || '')) e.phone = 'Enter a valid 10-digit phone number'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email'
    if (!values.message?.trim()) e.message = 'Please describe your requirement'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length) return

    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      setSubmitted(true)
      setForm(initialState)
      onSubmitSuccess?.()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`mt-1 w-full rounded-md border ${errors.name ? 'border-red-400' : 'border-slate-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
            placeholder="Your name"
            autoComplete="name"
            required
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`mt-1 w-full rounded-md border ${errors.phone ? 'border-red-400' : 'border-slate-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
            placeholder="10-digit number"
            autoComplete="tel"
            required
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email (optional)</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`mt-1 w-full rounded-md border ${errors.email ? 'border-red-400' : 'border-slate-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">How can we help?</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`mt-1 w-full rounded-md border ${errors.message ? 'border-red-400' : 'border-slate-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
          rows={5}
          placeholder="Installation, repair, AMC, filter replacement..."
          required
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button disabled={submitting} type="submit" className="btn-primary">
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
        {submitted && <span className="text-sm text-emerald-700">Thanks! We will reach out shortly.</span>}
      </div>
    </form>
  )
}
