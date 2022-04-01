import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./templates/dashboard/Dashboard";
import SignIn from "./templates/sign-in/SignIn";
import NotFound from "./pages/NotFound";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken === null) {
      navigate("/dashboard");
    }
    navigate("/signin");
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<h2>practice MUI</h2>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
