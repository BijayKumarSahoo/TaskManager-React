import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function ProfileMenu() {
  const user = useContext(UserContext);

  return <span>Hello {user?.name}</span>;
}
