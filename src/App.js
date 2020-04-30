import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainPage from './Pages/MainPage.js';
import OrderPage from './Pages/OrderPage.js'


const App = (props) => {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path="/" render={ () => <MainPage />} />
        <Route path="/order" render={ () => <OrderPage StepOutputData={props.StepOutputData}/> } />
     </div>
     </Router>
  )
}

export default App;

