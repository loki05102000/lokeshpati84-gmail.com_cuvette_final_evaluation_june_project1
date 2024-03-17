import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
