import { useNavigate } from "react-router-dom";

function NewTaskPage() {
  const navigate = useNavigate();

  function handleCreated() {
    // create task

    navigate("/tasks");
  }

  return <button onClick={handleCreated}>Create</button>;
}
export default NewTaskPage;
