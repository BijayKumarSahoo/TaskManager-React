import { useReducer } from "react";
import type { CreateTaskInput, Task } from "../types/task";
import { taskReducer, type TaskState } from "./taskReducer";

const initialState: TaskState = {
  tasks: [
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
  ],
};

export function useTasks() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  function addTask(input: CreateTaskInput) {
    dispatch({ type: "task/added", payload: input });
  }

  function updateTask(taskId: number, input: CreateTaskInput) {
    dispatch({ type: "task/updated", payload: { taskId, input } });
  }

  function deleteTask(taskId: number) {
    dispatch({ type: "task/deleted", payload: taskId });
  }

  function toggleTaskCompletion(taskId: number) {
    dispatch({ type: "task/toggled", payload: taskId });
  }

  function getTaskById(taskId: number): Task | undefined {
    return state.tasks.find((task) => (task.id = taskId));
  }

  return {
    tasks: state.tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    getTaskById,
  };
}
