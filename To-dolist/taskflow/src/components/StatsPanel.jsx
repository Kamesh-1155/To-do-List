import ProgressBar from "./ProgressBar";
import "../styles/StatsPanel.css";

function StatsPanel({
    total,
    completed,
    pending
}) {

    const progress =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    return (

        <div className="stats-panel">

            <h2>📊 Productivity</h2>

            <ProgressBar progress={progress} />

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>{total}</h3>

                    <p>Total</p>

                </div>

                <div className="stat-card">

                    <h3>{completed}</h3>

                    <p>Completed</p>

                </div>

                <div className="stat-card">

                    <h3>{pending}</h3>

                    <p>Pending</p>

                </div>

            </div>

        </div>

    );

}

export default StatsPanel;