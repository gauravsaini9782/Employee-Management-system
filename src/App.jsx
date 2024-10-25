import { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Define getLocalStorage inside the App component
  const getLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setIsAdmin(user.role === 'admin');
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <Login />
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;
