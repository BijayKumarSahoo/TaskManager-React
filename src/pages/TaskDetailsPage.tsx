import { useParams } from "react-router-dom";

function TaskDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
    </div>
  );
}

export default TaskDetailsPage;
