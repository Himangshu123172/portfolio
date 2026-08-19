import { useState } from "react"
import { AlertTriangle, CheckCircle2, Send } from "lucide-react"

// NOTE FOR FUTURE INTEGRATION:
// This form validates input client-side but does not send messages anywhere
// yet. To make it functional, connect handleSubmit to an email service
// (e.g. EmailJS, Formspree) or a backend API endpoint, and replace the
// simulated delay below with the real request.

const initialState = { name: "", email: "", subject: "", message: "" }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = "Please enter your name."
    if (!form.email.trim()) {
      next.email = "Please enter your email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address."
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject."
    if (!form.message.trim()) next.message = "Please write a message."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")
    try {
      // Placeholder for a real email/backend integration.
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus("success")
      setForm(initialState)
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-white">Send a Message</h2>
      <p className="mt-1 text-sm text-[var(--color-text-faint)]">
        This form is ready to connect to an email service or backend API.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" error={errors.name}>
          <input
            id="c-name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="input"
            placeholder="Your name"
          />
        </Field>

        <Field label="Email" htmlFor="c-email" error={errors.email}>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="input"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Subject" htmlFor="c-subject" error={errors.subject} full>
          <input
            id="c-subject"
            type="text"
            value={form.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className="input"
            placeholder="What's this about?"
          />
        </Field>

        <Field label="Message" htmlFor="c-message" error={errors.message} full>
          <textarea
            id="c-message"
            rows={5}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="input resize-none"
            placeholder="Write your message..."
          />
        </Field>
      </div>

      {status === "success" && (
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          <CheckCircle2 size={16} className="shrink-0" />
          Message ready — connect an email service to deliver it to Himangshu's inbox.
        </div>
      )}
      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertTriangle size={16} className="shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

function Field({ label, htmlFor, error, children, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-[var(--color-text-dim)]">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  )
}
