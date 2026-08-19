import { useState } from "react"
import { Calendar, Download, Eye, FileText, X } from "lucide-react"

export default function CertificateCard({ doc, category }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const hasFile = Boolean(doc.file)
  const isPdf = hasFile && doc.file.toLowerCase().endsWith(".pdf")

  return (
    <>
      <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
            <FileText size={17} />
          </span>
          <span className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-text-faint)]">
            {category}
          </span>
        </div>

        <h3 className="mt-4 font-display text-base font-semibold text-white">{doc.title}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-dim)]">{doc.organization}</p>

        <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-faint)]">
          <Calendar size={12} />
          {doc.date || "Date not added"}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setPreviewOpen(true)}
            disabled={!hasFile}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-white transition-colors hover:border-[var(--color-blue-soft)]/50 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Eye size={13} /> Preview
          </button>
          <a
            href={hasFile ? doc.file : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasFile}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs font-medium transition-colors ${
              hasFile
                ? "text-white hover:border-[var(--color-blue-soft)]/50 hover:bg-white/5"
                : "pointer-events-none text-[var(--color-text-faint)] opacity-40"
            }`}
          >
            <Eye size={13} /> View
          </a>
          <a
            href={hasFile ? doc.file : undefined}
            download
            aria-disabled={!hasFile}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs font-medium transition-colors ${
              hasFile
                ? "text-white hover:border-[var(--color-blue-soft)]/50 hover:bg-white/5"
                : "pointer-events-none text-[var(--color-text-faint)] opacity-40"
            }`}
          >
            <Download size={13} /> Download
          </a>
        </div>
        {!hasFile && (
          <p className="mt-3 font-mono text-[10px] text-[var(--color-text-faint)]">
            No file uploaded yet
          </p>
        )}
      </article>

      {previewOpen && hasFile && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${doc.title}`}
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className={`glass relative max-h-[85vh] w-full overflow-auto rounded-2xl p-6 ${
              isPdf ? "max-w-3xl" : "max-w-2xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <h3 className="pr-10 font-display text-lg font-semibold text-white">{doc.title}</h3>
            {isPdf ? (
              <iframe
                src={doc.file}
                title={doc.title}
                className="mt-4 h-[65vh] w-full rounded-xl bg-white"
              />
            ) : (
              <img src={doc.file} alt={doc.title} className="mt-4 w-full rounded-xl" />
            )}
          </div>
        </div>
      )}
    </>
  )
}
