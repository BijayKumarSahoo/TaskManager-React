import { getTasks } from "../services/taskService";
import { useQuery } from "@tanstack/react-query";

export function useTasks() {
  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: ({ signal }) => getTasks(signal),
  });

  return {
    tasks: tasksQuery.data ?? [],
    status: tasksQuery.status,
    error: tasksQuery.error,
  };
}
