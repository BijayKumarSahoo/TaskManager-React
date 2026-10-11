import { useMemo, useState } from "react";
import { TaskList } from "../components/TaskList";
import type { Task, TaskFilter } from "../types/task";

type TasksPageProps = {
  tasks: Task[];
  status: "pending" | "success" | "error";
  error: Error | null;
};

function TasksPage({ tasks, status, error }: TasksPageProps) {
  const [filter, setFilter] = useState<TaskFilter>("all");

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);

      case "completed":
        return tasks.filter((task) => task.completed);

      case "all":
      default:
        return tasks;
    }
  }, [tasks, filter]);

  if (status === "pending") {
    return <p>Loading Tasks</p>;
  }

  if (status === "error") {
    return (
      <>
        <h2>Something went wrong</h2>
        <p>{error?.message}</p>
      </>
    );
  }

  return (
    <>
      <h1>Tasks</h1>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </>
  );
}

export default TasksPage;
