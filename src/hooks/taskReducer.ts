import type { CreateTaskInput, Task } from "../types/task";

export type TaskState = {
  tasks: Task[];
};

export type TaskAction =
  | {
      type: "task/added";
      payload: CreateTaskInput;
    }
  | {
      type: "task/updated";
      payload: {
        taskId: number;
        input: CreateTaskInput;
      };
    }
  | {
      type: "task/deleted";
      payload: number;
    }
  | {
      type: "task/toggled";
      payload: number;
    };

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "task/added": {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case "task/updated": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                title: action.payload.input.title,
                description: action.payload.input.description,
              }
            : task,
        ),
      };
    }

    case "task/deleted": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case "task/toggled": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    }
  }
}
