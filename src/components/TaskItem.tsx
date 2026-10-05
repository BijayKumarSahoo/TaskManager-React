import { useState } from "react";
import type { CreateTaskInput, Task } from "../types/task";
import { useNavigate } from "react-router-dom";
import React from "react";

type TaskItemProps = {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, input: CreateTaskInput) => void;
};

const TaskItem = React.memo(function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const navigate = useNavigate();

  function handleEdit() {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(true);
  }

  function handleSave() {
    if (!title.trim()) {
      return;
    }

    onUpdateTask(task.id, {
      title: title.trim(),
      description: description.trim(),
    });

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
      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => navigate(`/tasks/${task.id}`)}>Details</button>
    </li>
  );
});

export default TaskItem;
