import type { Task } from "../types/task";

const initialTasks: Task[] = [
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
];

export async function getTasks(signal?: AbortSignal): Promise<Task[]> {
  await new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(resolve, 5000);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeoutId);

        reject(new DOMException("Request aborted", "AbortError"));
      },
      { once: true },
    );
  });

  return initialTasks;
}
