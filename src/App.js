import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import EmployeeDashboard from './EmployeeDashboard';
import EmployeeForm from './EmployeeForm';

const App = () => {
  return (
    <Router>
      
        <Navbar />
        
          <Route path="/" exact component={EmployeeDashboard} />
          <Route path="/employee-form" component={EmployeeForm} />
        
      
    </Router>
  );
};

export default App;
