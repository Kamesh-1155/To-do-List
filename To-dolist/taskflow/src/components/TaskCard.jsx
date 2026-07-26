import "../styles/TaskCard.css";
import {
    Pencil,
    Trash2,
    CheckCircle2
} from "lucide-react";

function TaskCard({ task, onEdit, onDelete, onToggleComplete }) {

    return (
        <div className="task-card">

            <div className="task-content">

                <div className="task-header">

                    <h3>{task.title}</h3>

                    <span className={`priority ${task.priority.toLowerCase()}`}>
                        {task.priority}
                    </span>

                </div>

                <p className="task-description">
                    {task.description}
                </p>

                <div className="task-footer">

                    <span className={`status ${task.status.toLowerCase()}`}>
                        {task.status}
                    </span>

                    <div className="task-actions">

                        <button
                            className="icon-btn edit-btn"
                            onClick={() => onEdit(task)}
                        >
                            <Pencil size={18}/>
                        </button>

                        <button
                            className="icon-btn delete-btn"
                            onClick={() => onDelete(task.id)}
                        >
                            <Trash2 size={18}/>
                        </button>

                        <button
                            className="icon-btn complete-btn"
                            onClick={() => onToggleComplete(task.id)}
                        >
                            <CheckCircle2 size={18}/>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TaskCard;