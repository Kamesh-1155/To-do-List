import "../styles/AddTaskModal.css";

function ConfirmDeleteModal({
    isOpen,
    onClose,
    onConfirm,
    task
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h2>Delete Task</h2>

                <p
                    style={{
                        margin: "20px 0",
                        lineHeight: "1.6"
                    }}
                >
                    Are you sure you want to delete
                    <br />
                    <strong>
                        "{task?.title}"
                    </strong>
                    ?
                </p>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        style={{
                            background: "#d9534f"
                        }}
                        onClick={onConfirm}
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ConfirmDeleteModal;