import { developers } from "../data/mockData";

export default function Sidebar({ selectedId, onSelect }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-label">Developers</div>
            {developers.map((dev) => (
                <div
                    key={dev.id}
                    className={`dev-item${selectedId === dev.id ? " active" : ""}`}
                    onClick={() => onSelect(dev.id)}
                >
                    <div className="dev-avatar">{dev.avatar}</div>
                    <div className="dev-info">
                        <div className="dev-name">{dev.name}</div>
                        <div className="dev-role">{dev.role}</div>
                    </div>
                </div>
            ))}
        </aside>
    );
}
