import { useState } from "react";
import type { CreateTaskInput, Task } from "../types/task";

export function useTasks() {
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

  function addTask(input: CreateTaskInput) {
    const newTask: Task = {
      id: Date.now(),
      title: input.title,
      description: input.description,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function updateTask(taskId: number, input: CreateTaskInput) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: input.title, description: input.description }
          : task,
      ),
    );
  }

  function deleteTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function toggleTaskCompletion(taskId: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function getTaskById(taskId: number): Task | undefined {
    return tasks.find((task) => task.id === taskId);
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    getTaskById,
  };
}
