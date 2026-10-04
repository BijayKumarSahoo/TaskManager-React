import React, { useEffect, useRef, useState } from "react";
import type { CreateTaskInput } from "../types/task";

type TaskFormProps = {
  onAddTask: (task: CreateTaskInput) => void;
};

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const titleInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");

    titleInputRef.current?.focus();
  }

  useEffect(() => {
    // titleInputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          ref={titleInputRef}
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
          required
        />
        {error && <p>{error}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}
