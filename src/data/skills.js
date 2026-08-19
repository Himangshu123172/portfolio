// Add new skills by appending strings to the relevant category's `items` array.
// icon values map to lucide-react icon names used in Skills.jsx

const skills = [
  {
    id: "languages",
    category: "Programming Languages",
    icon: "Code2",
    items: ["Python", "C", "C++", "Java", "SQL"],
  },
  {
    id: "ai-ml",
    category: "AI / Machine Learning",
    icon: "BrainCircuit",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Analysis",
    ],
  },
  {
    id: "web",
    category: "Web Development",
    icon: "Globe",
    items: ["HTML", "CSS", "JavaScript", "Full Stack Web Development"],
  },
  {
    id: "tools",
    category: "Database & Tools",
    icon: "Database",
    items: ["MongoDB", "Git", "GitHub"],
  },
  {
    id: "cloud-security",
    category: "Cloud & Security",
    icon: "ShieldCheck",
    items: ["AWS Cloud", "Cyber Security"],
  },
  {
    id: "professional",
    category: "Professional Skills",
    icon: "Users",
    items: [
      "Problem Solving",
      "Logical Thinking",
      "Communication",
      "Teamwork",
      "Quick Learning",
      "Time Management",
      "Adaptability",
    ],
  },
]

export default skills
