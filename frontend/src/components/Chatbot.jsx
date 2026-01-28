import { useState } from "react";
import { KB } from "../data/kb";

export default function Chatbot() {
  const [agent, setAgent] = useState("start");
  const current = KB[agent];

  return (
    <div className="fixed inset-0 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-center font-semibold">
        JEE Course Assistant
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-[85%] bg-white rounded-2xl p-3 shadow">
          <p className="text-gray-800 text-sm leading-relaxed">
            {current.message}
          </p>
        </div>
      </div>

      {/* Options / Buttons */}
      <div className="bg-white border-t p-3 space-y-2">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setAgent(opt.next)}
            className="
              w-full
              text-left
              px-4
              py-3
              rounded-xl
              border
              border-blue-500
              text-blue-600
              font-medium
              hover:bg-blue-50
              active:scale-[0.98]
              transition
            ">
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
