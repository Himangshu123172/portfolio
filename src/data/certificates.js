// ============================================================================
// CERTIFICATES & DOCUMENTS — add a new certificate by appending an object
// to the relevant category array below, or push new entries at runtime
// through the Documents page's upload form (stored in memory only —
// see DocumentUpload.jsx for notes on wiring a real backend).
//
// Fields: id, title, organization, date (string or null), file (path or null)
// ============================================================================

export const internshipCertificates = [
  {
    id: "cert-cyber-security",
    title: "Cyber Security Internship Certificate",
    organization: "Dataspace Academy",
    date: "July 20, 2024",
    // [Add file] — upload the PDF to public/assets/certificates/ and set the path here,
    // e.g. file: "/assets/certificates/cyber-security-internship.pdf"
    file: "public/assets/certificates/cyber-security-internship.pdf",
  },
  {
    id: "cert-ml-intern",
    title: "Machine Learning Internship Certificate",
    organization: "Unified Mentor",
    date: "June 1 – July 12, 2025",
    file: "/assets/certificates/ml-internship.pdf",
  },
  {
    id: "cert-fullstack-intern",
    title: "Full Stack Web Development Internship Certificate",
    organization: "Unified Mentor",
    date: "June 15 – August 15, 2026",
    file: "/assets/certificates/fullstack-internship.pdf",
  },
]

export const workshopCertificates = [
  {
    id: "cert-nlp",
    title: "NLP in Clinical Practice: Optimizing Drug Prescription Workflows",
    organization: "AILabs",
    date: "November 8, 2025",
    file: "/assets/certificates/nlp-workshop.jpg",
  },
  {
    id: "cert-mongodb",
    title: "Data Modelling Techniques for AI-driven Applications using Django and MongoDB",
    organization: "Kognitive Emerging Software Services LLP",
    date: "May 11–12, 2026",
    file: "/assets/certificates/mongodb-workshop.jpg",
  },
  {
  id: "cert-aws",
  title: "AWS Cloud Workshop Certificate", // update to match your certificate's exact title
  organization: "[Add organizer name]",     // check the certificate for who issued it
  date: "[November 25, 2024]",                        // check the certificate for the date
  file: "/assets/certificates/aws-workshop.jpg",
},
]

export const academicDocuments = [
  {
    id: "doc-marksheet-10",
    title: "Class 10 Marksheet",
    organization: "[Add board name]",
    date: null,
    file: null,
  },
  {
    id: "doc-marksheet-12",
    title: "Class 12 Marksheet",
    organization: "[Add board name]",
    date: null,
    file: null,
  },
  {
    id: "doc-btech",
    title: "B.Tech Academic Record",
    organization: "The Neotia University",
    date: null,
    file: null,
  },
]
