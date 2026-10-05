import { NavLink } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {" | "}

      <NavLink
        to="/tasks"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tasks
      </NavLink>

      {" | "}

      <NavLink
        to="/tasks/new"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        New Task
      </NavLink>

      {" | "}

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
      {" | "}
      <ProfileMenu />
    </nav>
  );
}

export default Navbar;
