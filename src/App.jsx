import { useState } from "react";
import { developers, insights } from "./data/mockData";
import { getAllMetrics } from "./utils/metrics";
import Sidebar from "./components/Sidebar";
import MetricsGrid from "./components/MetricsGrid";
import Interpretation from "./components/Interpretation";
import NextSteps from "./components/NextSteps";
import "./index.css";

export default function App() {
  const [selectedId, setSelectedId] = useState("dev1");

  const dev = developers.find((d) => d.id === selectedId);
  const metrics = getAllMetrics(selectedId);
  const insight = insights[selectedId];

  return (
    <div className="app-shell">
      {/* Top Nav */}
      <nav className="topnav">
        <div className="topnav-brand">
          <div className="dot" />
          DevPulse
        </div>
        <div className="topnav-meta">Developer Productivity Dashboard · April 2026</div>
      </nav>

      {/* Main Layout */}
      <div className="main-layout">
        <Sidebar selectedId={selectedId} onSelect={setSelectedId} />

        <main className="content">
          {/* Developer Hero */}
          <div className="dev-hero">
            <div className="dev-hero-avatar">{dev.avatar}</div>
            <div>
              <div className="dev-hero-name">{dev.name}</div>
              <div className="dev-hero-meta">{dev.role}</div>
              <div className="dev-hero-team">{dev.team} Team</div>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <div className="section-header">
              <span className="section-label">5 Metrics</span>
              <div className="section-line" />
            </div>
            <MetricsGrid metrics={metrics} />
          </div>

          {/* Interpretation */}
          <div>
            <div className="section-header">
              <span className="section-label">Interpretation</span>
              <div className="section-line" />
            </div>
            <Interpretation text={insight.interpretation} />
          </div>

          {/* Next Steps */}
          <div>
            <div className="section-header">
              <span className="section-label">Suggested Next Steps</span>
              <div className="section-line" />
            </div>
            <NextSteps steps={insight.nextSteps} />
          </div>
        </main>
      </div>
    </div>
  );
}
