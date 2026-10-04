import { useState } from "react";
import type { CreateTaskInput, Task } from "./types/task";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Understand React fundamentals",
      completed: false,
    },
    {
      id: 2,
      title: "Build Task Manager",
      description: "Create the first practical feature",
      completed: false,
    },
    {
      id: 3,
      title: "Learn TypeScript",
      description: "Use TypeScript effectively with React",
      completed: true,
    },
  ]);

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const pendingTasksCount = tasks.length - completedTasksCount;

  function handleToggleTask(taskId: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function handleAddTask(task: CreateTaskInput) {
    const newTask: Task = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleUpdateTask(taskId: number, input: CreateTaskInput) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              ...input,
            }
          : task,
      ),
    );
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p>
        {`Total tasks: ${tasks.length}
        Completed: ${completedTasksCount}
        Pending: ${pendingTasksCount}`}
      </p>
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
