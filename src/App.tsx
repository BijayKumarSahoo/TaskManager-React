import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import NewTaskPage from "./pages/NewTaskPage";
import SettingsPage from "./pages/SettingsPage";
import Navbar from "./components/NavBar";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    getTaskById,
  } = useTasks();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} />} />

        <Route
          path="/tasks"
          element={
            <TasksPage
              tasks={tasks}
              onToggleTask={toggleTaskCompletion}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          }
        />

        <Route
          path="/tasks/new"
          element={<NewTaskPage onAddTask={addTask} />}
        />

        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/tasks/:id"
          element={<TaskDetailsPage getTaskById={getTaskById} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
