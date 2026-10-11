import { useState } from "react";
import type { Task } from "../types/task";
import { useNavigate } from "react-router-dom";
import React from "react";

type TaskItemProps = {
  task: Task;
};

const TaskItem = React.memo(function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const navigate = useNavigate();

  function handleSave() {
    if (!title.trim()) {
      return;
    }

    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li>
        <div>
          <label htmlFor={`title-${task.id}`}>Title</label>

          <input
            id={`title-${task.id}`}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor={`description-${task.id}`}>Description</label>

          <textarea
            id={`description-${task.id}`}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </li>
    );
  }

  return (
    <li>
      <h3>
        {task.completed ? "✓ " : ""}
        {task.title}
      </h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => navigate(`/tasks/${task.id}`)}>Details</button>
    </li>
  );
});

export default TaskItem;
