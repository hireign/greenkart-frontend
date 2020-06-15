import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import LoginPage from './Pages/LoginPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomePage from './Pages/HomePage';
import SearchLandingPage from './Pages/SearchLandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/login' component={LoginPage} /> 
            <Route exact path='/contactus' component={ContactUsPage} /> 
            <Route exact path='/search' component={SearchLandingPage} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
