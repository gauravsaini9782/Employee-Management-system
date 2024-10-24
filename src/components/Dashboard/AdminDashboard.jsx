import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";




const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7 pt-9 ">
      {/* Navbar stays at the top */}
      <Header />
      <CreateTask/>
      <AllTask/>
      
    </div>
  );
};

export default AdminDashboard;

 


