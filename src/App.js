import React from 'react';
import RemindersPage from './pages/RemindersPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <RemindersPage />
      </Route>
      <Route exact path='/:id' children={<RemindersPage />} />
    </Router>
  );
}

export default App;
