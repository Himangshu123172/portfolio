import { useMemo, useState } from "react"
import { Award, FolderOpen, GraduationCap, LayoutGrid } from "lucide-react"
import {
  academicDocuments,
  internshipCertificates,
  workshopCertificates,
} from "../data/certificates.js"
import CertificateCard from "../components/CertificateCard.jsx"
import DocumentUpload from "../components/DocumentUpload.jsx"
import Reveal from "../components/Reveal.jsx"

const TABS = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "internship", label: "Internship Certificates", icon: Award },
  { key: "workshop", label: "Workshop Certificates", icon: FolderOpen },
  { key: "academic", label: "Academic Documents", icon: GraduationCap },
]

export default function Documents() {
  const [activeTab, setActiveTab] = useState("all")
  const [customDocs, setCustomDocs] = useState([])

  function handleUpload(doc) {
    setCustomDocs((prev) => [doc, ...prev])
  }

  const grouped = useMemo(
    () => ({
      internship: internshipCertificates.map((d) => ({ ...d, category: "Internship" })),
      workshop: workshopCertificates.map((d) => ({ ...d, category: "Workshop" })),
      academic: academicDocuments.map((d) => ({ ...d, category: "Academic" })),
    }),
    []
  )

  const visibleGroups =
    activeTab === "all"
      ? Object.entries(grouped)
      : Object.entries(grouped).filter(([key]) => key === activeTab)

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <Reveal>
        <span className="eyebrow">documents</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Documents &amp; Certificates
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-text-dim)]">
          Internship certificates, workshop certificates and academic documents, organized for
          quick review. New documents can be added below as they become available.
        </p>
      </Reveal>

      {/* Filter tabs */}
      <Reveal delay={60} className="mt-10 flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const active = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)] text-white shadow-[0_8px_25px_-10px_rgba(139,92,246,0.7)]"
                  : "glass text-[var(--color-text-dim)] hover:text-white"
              }`}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          )
        })}
      </Reveal>

      {customDocs.length > 0 && (activeTab === "all" || activeTab === "academic") && (
        <Reveal delay={80} className="mt-12">
          <SectionHeading icon={FolderOpen} label="Recently Added" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {customDocs.map((doc) => (
              <CertificateCard key={doc.id} doc={doc} category={doc.category} />
            ))}
          </div>
        </Reveal>
      )}

      {visibleGroups.map(([key, docs], sIdx) => {
        const tab = TABS.find((t) => t.key === key)
        return (
          <Reveal key={key} delay={100 + sIdx * 60} className="mt-14">
            <SectionHeading icon={tab.icon} label={tab.label} />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => (
                <CertificateCard key={doc.id} doc={doc} category={doc.category} />
              ))}
            </div>
          </Reveal>
        )
      })}

      <Reveal delay={200} className="mt-16">
        <DocumentUpload onUpload={handleUpload} />
      </Reveal>
    </div>
  )
}

function SectionHeading({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
        <Icon size={16} />
      </span>
      <h2 className="font-display text-xl font-semibold text-white">{label}</h2>
    </div>
  )
}
