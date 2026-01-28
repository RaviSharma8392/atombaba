import { Routes, Route } from "react-router-dom";
import JEEMains from "./pages/JEEMainsPage";

export default function App() {
  return (
    <Routes>
      {/* Home or chatbot redirect page */}
      <Route
        path="/"
        element={
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>ATOM BABA</h1>
            <p>Click below to explore JEE MAINS</p>
            <a
              href="/jee-mains"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 20px",
                background: "#1e40af",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
              }}>
              Go to JEE MAINS
            </a>
          </div>
        }
      />

      {/* JEE MAINS Page */}
      <Route path="/jee-mains" element={<JEEMains />} />
    </Routes>
  );
}
