import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import StatsPanel from "../components/StatsPanel";
import "../styles/Dashboard.css";
import { loadTasks, saveTasks } from "../utils/localStorage";

function Dashboard() {

    const defaultTasks = [
        {
            id: 1,
            title: "Learn React Components",
            description: "Complete the TaskCard UI today.",
            status: "Pending",
            priority: "Medium"
        },
        {
            id: 2,
            title: "Build Dashboard",
            description: "Finish the dashboard layout.",
            status: "Pending",
            priority: "High"
        },
        {
            id: 3,
            title: "Practice CSS",
            description: "Improve styling skills.",
            status: "Completed",
            priority: "Low"
        }
    ];

    const [tasks, setTasks] = useState(() => {
        return loadTasks() || defaultTasks;
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const filteredTasks = useMemo(() => {

        return tasks.filter(task =>

            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

            task.description.toLowerCase().includes(searchTerm.toLowerCase())

        );

    }, [tasks, searchTerm]);

    const saveTask = (taskData) => {

        if (editingTask) {

            setTasks(prev =>
                prev.map(task =>
                    task.id === editingTask.id
                        ? { ...task, ...taskData }
                        : task
                )
            );

        } else {

            setTasks(prev => [

                ...prev,

                {

                    id: Date.now(),

                    status: "Pending",

                    ...taskData

                }

            ]);

        }

        setEditingTask(null);
        setIsModalOpen(false);

    };

    const handleEdit = (task) => {

        setEditingTask(task);

        setIsModalOpen(true);

    };

    const toggleComplete = (id) => {

        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? {
                          ...task,
                          status:
                              task.status === "Completed"
                                  ? "Pending"
                                  : "Completed"
                      }
                    : task
            )
        );

    };

    const confirmDelete = () => {

        if (!deleteTask) return;

        setTasks(prev =>
            prev.filter(task => task.id !== deleteTask.id)
        );

        setDeleteTask(null);

    };

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        task => task.status === "Completed"
    ).length;

    const pendingTasks = totalTasks - completedTasks;

    return (

        <div className="dashboard">

            <div className="dashboard-container">

                <Header

                    taskCount={totalTasks}

                    searchTerm={searchTerm}

                    setSearchTerm={setSearchTerm}

                    openModal={() => {

                        setEditingTask(null);

                        setIsModalOpen(true);

                    }}

                />

                <div className="dashboard-content">

                    <div className="left-panel">

                        <h2>Tasks</h2>

                        {filteredTasks.length === 0 ? (

                            <p>No tasks found.</p>

                        ) : (

                            filteredTasks.map(task => (

                                <TaskCard

                                    key={task.id}

                                    task={task}

                                    onEdit={handleEdit}

                                    onDelete={(id) => {

                                        const selectedTask =
                                            tasks.find(
                                                task => task.id === id
                                            );

                                        setDeleteTask(selectedTask);

                                    }}

                                    onToggleComplete={toggleComplete}

                                />

                            ))

                        )}

                    </div>

                    <div className="right-panel">

                        <StatsPanel

                            total={totalTasks}

                            completed={completedTasks}

                            pending={pendingTasks}

                        />

                    </div>

                </div>

                <AddTaskModal

                    isOpen={isModalOpen}

                    onClose={() => {

                        setEditingTask(null);

                        setIsModalOpen(false);

                    }}

                    onSave={saveTask}

                    editingTask={editingTask}

                />

                <ConfirmDeleteModal

                    isOpen={deleteTask !== null}

                    task={deleteTask}

                    onClose={() => setDeleteTask(null)}

                    onConfirm={confirmDelete}

                />

            </div>

        </div>

    );

}

export default Dashboard;