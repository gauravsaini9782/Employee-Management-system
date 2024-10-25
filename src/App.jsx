import { useState , useContext} from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext} from './context/AuthProvider'
const App = () => {

       const data = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;


