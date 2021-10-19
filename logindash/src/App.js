import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*function App() {
  return (
    <div className="App">
      <Login />
      
    </div>
  );
}*/

//export default App;

function App()
{
return(
<div className="App">
<h1>Login Page</h1>
<BrowserRouter>
  <Switch>

  <Route path="/Home" component={Home} /> 
    <Route path="/Login" component={Login} />
    <Route path="/Dashboard" component={Dashboard} />
  </Switch>
</BrowserRouter>
</div>
);
}

export default App;

