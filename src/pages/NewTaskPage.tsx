import { TaskForm } from "../components/TaskForm";
import type { CreateTaskInput } from "../types/task";

export default function NewTaskPage({
  onAddTask,
}: {
  onAddTask: (task: CreateTaskInput) => void;
}) {
  return <TaskForm onAddTask={onAddTask} />;
}
