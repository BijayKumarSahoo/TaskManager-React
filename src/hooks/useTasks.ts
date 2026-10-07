import { useEffect, useReducer } from "react";
import type { CreateTaskInput, Task } from "../types/task";
import { taskReducer, type TaskState } from "./taskReducer";
import { getTasks } from "../services/taskService";

const initialState: TaskState = {
  tasks: [],
  status: "idle",
  error: null,
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

  useEffect(() => {
    async function loadTasks() {
      dispatch({
        type: "tasks/loading",
      });

      try {
        const tasks = await getTasks();

        dispatch({
          type: "tasks/loaded",
          payload: tasks,
        });
      } catch {
        dispatch({
          type: "tasks/loadFailed",
          payload: "Failed to load tasks.",
        });
      }
    }

    loadTasks();
  }, []);

  return {
    tasks: state.tasks,
    status: state.status,
    error: state.error,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    getTaskById,
  };
}
