import MetricCard from "./MetricCard";

export default function MetricsGrid({ metrics }) {
    const cards = [
        { label: "Lead Time for Changes", ...metrics.leadTime },
        { label: "Cycle Time", ...metrics.cycleTime },
        { label: "Bug Rate", ...metrics.bugRate },
        { label: "Deployment Frequency", ...metrics.deploymentFrequency },
        { label: "PR Throughput", ...metrics.prThroughput },
    ];

    return (
        <div className="metrics-grid">
            {cards.map((c) => (
                <MetricCard key={c.label} {...c} />
            ))}
        </div>
    );
}
