import { TaskList } from "../components/TaskList";
import type { CreateTaskInput, Task } from "../types/task";

function TasksPage({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  onUpdateTask,
}: {
  tasks: Task[];
  onToggleTaskCompletion: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (id: number, updatedTask: CreateTaskInput) => void;
}) {
  return (
    <>
      <h1>Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <TaskList
          tasks={tasks}
          onToggleTask={onToggleTaskCompletion}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      )}
    </>
  );
}

export default TasksPage;
