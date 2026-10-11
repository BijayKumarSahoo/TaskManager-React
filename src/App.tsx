import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import SettingsPage from "./pages/SettingsPage";
import Navbar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, status, error } = useTasks();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} />} />

        <Route
          path="/tasks"
          element={<TasksPage tasks={tasks} status={status} error={error} />}
        />

        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
