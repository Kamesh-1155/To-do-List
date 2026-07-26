import "../styles/ProgressBar.css";

function ProgressBar({ progress }) {
    return (
        <div className="progress-container">

            <div className="progress-header">
                <span>Completion</span>
                <span>{progress}%</span>
            </div>

            <div className="progress-bar">

                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>

            </div>

        </div>
    );
}

export default ProgressBar;