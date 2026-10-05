import { useParams } from "react-router-dom";
import type { Task } from "../types/task";

type TaskDetailsPageProps = {
  getTaskById: (taskId: number) => Task | undefined;
};

function TaskDetailsPage({ getTaskById }: TaskDetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const taskId = Number(id);

  const task = getTaskById(taskId);

  if (!task) {
    return (
      <div>
        <h1>Task Not Found</h1>
        <p>No task exists with ID: {id}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{task.title}</h1>

      <p>{task.description}</p>

      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TaskDetailsPage;
