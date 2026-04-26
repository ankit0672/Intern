const STATUS_MAP = {
    good: { label: "Good", icon: "●", cls: "badge-good" },
    average: { label: "Average", icon: "◑", cls: "badge-average" },
    bad: { label: "Needs Attention", icon: "!", cls: "badge-bad" },
};

const DESCRIPTIONS = {
    "Lead Time for Changes": "Avg days from PR opened → production deploy",
    "Cycle Time": "Avg days from issue In Progress → Done",
    "Bug Rate": "Production bugs / issues completed × 100",
    "Deployment Frequency": "Successful production deploys this month",
    "PR Throughput": "Merged pull requests this month",
};

export default function MetricCard({ label, value, unit, status }) {
    const s = STATUS_MAP[status] ?? STATUS_MAP.average;
    return (
        <div className="metric-card">
            <div className="metric-card-label">{label}</div>
            <div className="metric-card-value">
                <span className="metric-card-number">{value}</span>
                <span className="metric-card-unit">{unit}</span>
            </div>
            <div className={`metric-card-badge ${s.cls}`}>
                <span>{s.icon}</span>
                <span>{s.label}</span>
            </div>
            <div className="metric-card-desc">{DESCRIPTIONS[label]}</div>
        </div>
    );
}
