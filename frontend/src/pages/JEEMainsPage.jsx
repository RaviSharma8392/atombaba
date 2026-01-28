import React from "react";
import {
  BookOpen,
  School,
  Brain,
  BarChart3,
  ClipboardList,
} from "lucide-react";

export default function JEEMainsPage() {
  const sections = [
    {
      title: "Online Coaching",
      icon: <School className="w-6 h-6" />,
      text: "Live and recorded classes designed for flexible learning. Students can revise concepts anytime with structured digital content and guided sessions.",
    },
    {
      title: "Offline Coaching",
      icon: <School className="w-6 h-6" />,
      text: "Classroom-based teaching focused on personal interaction, doubt-solving, discipline, and exam-oriented preparation.",
    },
    {
      title: "Study Modules",
      icon: <BookOpen className="w-6 h-6" />,
      text: "Well-structured modules covering NCERT alignment, concept clarity, solved examples, and graded practice questions.",
    },
    {
      title: "Strategy & Psychology",
      icon: <Brain className="w-6 h-6" />,
      text: "Exam strategy, time management, stress handling, and mindset training to perform consistently under pressure.",
    },
    {
      title: "Test Series",
      icon: <BarChart3 className="w-6 h-6" />,
      text: "Chapter-wise, part tests, and full-length mock tests designed as per the latest JEE MAINS pattern.",
    },
    {
      title: "DPP & DWT",
      icon: <ClipboardList className="w-6 h-6" />,
      text: "Daily Practice Problems (DPP) and Daily Worksheet Tests (DWT) to improve accuracy, speed, and conceptual strength.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          JEE MAINS Preparation
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our JEE MAINS program focuses on strong fundamentals, exam
          temperament, and mental readiness to help students perform at their
          best.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                {item.icon}
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-gray-800">
            Study smart. Train your mind. Master JEE MAINS.
          </p>
        </div>
      </div>
    </div>
  );
}
