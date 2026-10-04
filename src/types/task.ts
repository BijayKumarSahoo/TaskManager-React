export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type CreateTaskInput = {
  title: string;
  description: string;
};
