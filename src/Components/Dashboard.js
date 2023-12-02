import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handler() {
    navigate("/about");
  }

  function backhandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
      <button onClick={handler}>About</button>
      <button onClick={backhandler}>Go Back</button>
    </div>
  );
}

export default Dashboard;
