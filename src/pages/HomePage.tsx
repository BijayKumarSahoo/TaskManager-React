import type { Task } from "../types/task";

function HomePage({ tasks }: { tasks: Task[] }) {
  return (
    <div>
      <h1>Task Manager</h1>
      <p>Welcome to your task manager.</p>
      {tasks.length === 0
        ? "No tasks available."
        : tasks.map((task) => (
            <div key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            </div>
          ))}
    </div>
  );
}

export default HomePage;
