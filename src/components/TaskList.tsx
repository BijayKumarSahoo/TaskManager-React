import type { CreateTaskInput, Task } from "../types/task";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, input: CreateTaskInput) => void;
};

export function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  );
}
