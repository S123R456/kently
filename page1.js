import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExpenseList from './components/ExpenseList';
import Budget from './components/Budget';
import AccountList from './components/AccountList';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExpenseList} />
        <Route path="/budget" component={Budget} />
        <Route path="/accounts" component={AccountList} />
      </div>
    </Router>
  );
}

export default App;