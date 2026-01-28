export const KB = {
  start: {
    message: "Hi 👋 Main JEE course assistant hoon. Aap kya jana chahte ho?",
    options: [
      { label: "📘 Course Structure", next: "course_structure" },
      { label: "📚 Syllabus & Topics", next: "syllabus" },
      { label: "🧪 JEE Pattern", next: "jee_pattern" },
      { label: "📝 DPP / DWT Info", next: "dpp_dwt" },
      { label: "📅 Course Timeline", next: "timeline" }
    ]
  },

  jee_pattern: {
    message:
      "JEE Main ek Computer Based Test hota hai jisme Physics, Chemistry aur Mathematics hote hain.",
    options: [
      { label: "Pattern Changes", next: "pattern_changes" },
      { label: "Back to Menu", next: "start" }
    ]
  },

  pattern_changes: {
    message:
      "JEE Advanced ka pattern har saal change ho sakta hai. Isliye students ko flexible preparation karai jati hai.",
    options: [{ label: "Back to Menu", next: "start" }]
  },

  dpp_dwt: {
    message:
      "DPP (Daily Practice Problems) har class ke baad milte hain. DWT tests performance check karne ke liye hote hain.",
    options: [{ label: "Back to Menu", next: "start" }]
  }
};
