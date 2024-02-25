import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register/register";
import Login from "./components/Login/login"

function App() {
  return (
    <Routes>
      <Route path="/register" exact element = {<Register/>} />
      <Route path= "/login" exact element = {<Login/>}/>
    </Routes>
  );
}

export default App;
