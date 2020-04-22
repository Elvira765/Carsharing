import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainPage from './Pages/MainPage.js';
import OrderPage from './Pages/OrderPage.js'

/*const App = () => <div className="App">
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
    </div>
  </Router>
</div>;*/



const App = () => {
  return(
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route path="/order" component={OrderPage}/>
     </div>
     </Router>
  )
}

export default App;

