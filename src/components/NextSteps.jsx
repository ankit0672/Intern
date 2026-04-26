export default function NextSteps({ steps }) {
    return (
        <div className="steps-list">
            {steps.map((text, i) => (
                <div key={i} className="step-item">
                    <div className="step-num">{i + 1}</div>
                    <div className="step-text">{text}</div>
                </div>
            ))}
        </div>
    );
}
