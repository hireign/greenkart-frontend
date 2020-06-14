import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={LoginPage} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
