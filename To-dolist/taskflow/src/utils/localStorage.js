const STORAGE_KEY = "taskflow_tasks";

export const loadTasks = () => {
    try {
        const tasks = localStorage.getItem(STORAGE_KEY);

        if (!tasks) return null;

        return JSON.parse(tasks);
    } catch (error) {
        console.error("Error loading tasks:", error);
        return null;
    }
};

export const saveTasks = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks:", error);
    }
};