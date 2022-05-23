import { useContext } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <UserRoute>
      <div className="container-fluid py-5 ">
        <div className="row py-5 bg-default-image height-page">
          <div className="display-1 py-5 text-center">
            <h1 style={{ color: "#000000" }}>Dashboard page</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Dashboard;
