import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import NewTaskPage from "./pages/NewTaskPage";
import SettingsPage from "./pages/SettingsPage";
import Navbar from "./components/NavBar";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/tasks" element={<TasksPage />} />

        <Route path="/tasks/new" element={<NewTaskPage />} />

        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
