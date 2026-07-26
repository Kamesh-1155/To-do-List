import { useEffect, useState } from "react";
import "../styles/AddTaskModal.css";

function AddTaskModal({
    isOpen,
    onClose,
    onSave,
    editingTask
}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Medium"
    });

    useEffect(() => {
        if (!isOpen) return;

        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority
            });
        } else {
            setFormData({
                title: "",
                description: "",
                priority: "Medium"
            });
        }
    }, [editingTask, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Task title is required.");
            return;
        }

        onSave(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Task Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <div className="modal-buttons">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {editingTask ? "Save Changes" : "Add Task"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddTaskModal;