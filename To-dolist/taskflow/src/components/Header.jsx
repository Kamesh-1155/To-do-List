import "../styles/Header.css";

function Header({
    taskCount,
    searchTerm,
    setSearchTerm,
    openModal
}) {
    return (
        <div className="header">

            <div className="brand">

                <h1 className="logo">
                    🌿 TaskFlow
                </h1>

                <p className="tagline">
                    Organize your day. Achieve your goals.
                </p>

            </div>

            <div className="header-top">

                <input
                    className="search-box"
                    type="text"
                    placeholder="🔍 Search tasks..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />

            </div>

            <div className="header-bottom">

                <div className="greeting">

                    <h3>Welcome Back 👋</h3>

                    <h2>
                        You have {taskCount} task{taskCount !== 1 ? "s" : ""} today
                    </h2>

                </div>

                <button
                    className="add-btn"
                    onClick={openModal}
                >
                    + Add Task
                </button>

            </div>

        </div>
    );
}

export default Header;