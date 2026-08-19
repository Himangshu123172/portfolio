// ============================================================================
// PROJECTS — add a new project by appending an object to this array.
// Fields:
//   title, description, technologies (array), image (path or null),
//   github (url or null), liveDemo (url or null), featured (bool)
// Leaving github/liveDemo as null renders the button in a disabled
// "coming soon" state instead of a dead/fake link.
// ============================================================================

const projects = [
  {
    id: "attendance-tracker",
    title: "Attendance Tracker Using Python",
    description:
      "A Python-based attendance tracking application built to record, organize and manage attendance data efficiently. [Add a more detailed description here.]",
    technologies: ["Python"],
    image: null,
    github: null,
    liveDemo: null,
    featured: true,
  },
  {
    id: "heart-disease-detection",
    title: "Heart Disease Detection Using ML Model",
    description:
      "A machine learning project that processes health-related data to build a predictive model exploring heart disease risk. Built as an academic/portfolio project, not a certified diagnostic tool.",
    technologies: ["Python", "Machine Learning"],
    image: null,
    github: null,
    liveDemo: null,
    featured: true,
  },
  {
    id: "career-recommendation-system",
    title: "Career Recommendation System",
    description:
      "An AI/ML-oriented system that suggests career paths using data-driven recommendations based on user input and trends.",
    technologies: ["Python", "Machine Learning"],
    image: null,
    github: null,
    liveDemo: null,
    featured: true,
  },
  {
    id: "rental-property-management",
    title: "Real-Time Rental Property Management System",
    description:
      "A full-stack web application for managing rental properties in real time, covering frontend/backend integration and database management.",
    technologies: ["Full Stack Web Development"],
    image: "public/assets/projects/real-time-rental-project.jpeg",
    github:
      "https://github.com/Himangshu123172/REAL-TIME-PROPERTY-RENTAL-MAINTENANCE-AMENITY-MANAGEMENT-PLATFORM.git",
    liveDemo: "https://rentalhub-management.vercel.app",
    featured: true,
  },
]

export default projects
