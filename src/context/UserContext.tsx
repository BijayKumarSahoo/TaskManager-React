import { createContext } from "react";

type User = {
  id: number;
  name: string;
};

export const UserContext = createContext<User | null>(null);
