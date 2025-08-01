import React from 'react';
import { Navigate } from 'react-router-dom';
import Dash from "./dashboard";
import Home from './Home';
import Admin from './admin/adminpanel';
import Admincah from './admin/admincashy';


const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  const Adminchk = () => {
    const token = localStorage.getItem('admintoken');
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return <Admin />;
  };
  const Admincash = () => {
    const token = localStorage.getItem('admintoken');
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return < Admincah/>;
  };
  const Homechk = () => {
  
    const token = localStorage.getItem('token');
    
    if (token) {
      
        return <Dash />;
    }
    else {
        
        return <Home />;
  
    }

  };
  
export  {ProtectedRoute,Homechk,Adminchk,Admincash};
  