import { useRef, useState } from "react"
import { AlertTriangle, CheckCircle2, UploadCloud, X } from "lucide-react"

const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"]
const CATEGORIES = ["Internship Certificate", "Workshop Certificate", "Academic Document", "Other"]

// NOTE FOR FUTURE INTEGRATION:
// This form currently keeps uploaded documents in memory only (via onUpload),
// so cards will reset on page refresh. To persist files, connect the
// `handleSubmit` function below to a real backend or storage service
// (e.g. an API route that uploads to S3 / Cloudinary / Firebase Storage)
// and save the returned URL instead of the local object URL.

export default function DocumentUpload({ onUpload }) {
  const fileInputRef = useRef(null)
  const [form, setForm] = useState({
    name: "",
    category: CATEGORIES[0],
    organization: "",
    date: "",
    description: "",
  })
  const [file, setFile] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleFileChange(e) {
    const selected = e.target.files?.[0]
    setError("")
    if (!selected) {
      setFile(null)
      return
    }
    if (!ALLOWED_TYPES.includes(selected.type)) {
      setError("Only PDF, JPG, JPEG, and PNG files are allowed.")
      setFile(null)
      return
    }
    if (selected.size > 10 * 1024 * 1024) {
      setError("File is larger than 10MB.")
      setFile(null)
      return
    }
    setFile(selected)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!form.name.trim() || !form.organization.trim()) {
      setError("Please fill in the document name and organization.")
      return
    }
    if (!file) {
      setError("Please choose a file to upload (PDF, JPG, JPEG or PNG).")
      return
    }

    const newDoc = {
      id: `doc-${Date.now()}`,
      title: form.name.trim(),
      category: form.category,
      organization: form.organization.trim(),
      date: form.date || null,
      description: form.description.trim(),
      // This is a temporary local preview URL, not permanent storage.
      // Connect a real backend/cloud storage to persist this file.
      file: URL.createObjectURL(file),
    }

    onUpload?.(newDoc)
    setSuccess(true)
    setForm({ name: "", category: CATEGORIES[0], organization: "", date: "", description: "" })
    setFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
          <UploadCloud size={18} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Upload Document</h3>
          <p className="text-xs text-[var(--color-text-faint)]">
            Stored in this session only — connect a backend to persist uploads.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Document Name" htmlFor="doc-name">
          <input
            id="doc-name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="e.g. AWS Cloud Practitioner Certificate"
            className="input"
          />
        </Field>

        <Field label="Category" htmlFor="doc-category">
          <select
            id="doc-category"
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
            className="input"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[var(--color-surface)]">
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Organization" htmlFor="doc-org">
          <input
            id="doc-org"
            type="text"
            value={form.organization}
            onChange={(e) => updateField("organization", e.target.value)}
            placeholder="e.g. Amazon Web Services"
            className="input"
          />
        </Field>

        <Field label="Date" htmlFor="doc-date">
          <input
            id="doc-date"
            type="date"
            value={form.date}
            onChange={(e) => updateField("date", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Description" htmlFor="doc-desc" full>
          <textarea
            id="doc-desc"
            rows={3}
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Short description of this document (optional)"
            className="input resize-none"
          />
        </Field>

        <Field label="File Upload (PDF, JPG, JPEG, PNG)" htmlFor="doc-file" full>
          <input
            ref={fileInputRef}
            id="doc-file"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="input file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-[var(--color-blue)] file:to-[var(--color-purple)] file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
          />
        </Field>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300 sm:col-span-2">
            <AlertTriangle size={16} className="shrink-0" />
            {error}
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 sm:col-span-2">
            <CheckCircle2 size={16} className="shrink-0" />
            Document added below. (Session only — add a backend to keep it after refresh.)
          </div>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <UploadCloud size={16} />
            Upload Document
          </button>
        </div>
      </form>
    </div>
  )
}

function Field({ label, htmlFor, children, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-[var(--color-text-dim)]">
        {label}
      </label>
      {children}
    </div>
  )
}
