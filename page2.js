import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Dashboard } from './pages/Dashboard';
import { Expenses } from './pages/Expenses';
import { Budgets } from './pages/Budgets';
import { Accounts } from './pages/Accounts';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/budgets" component={Budgets} />
          <Route exact path="/accounts" component={Accounts} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;