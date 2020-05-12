import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import MainPage from './Pages/MainPage.js';
import OrderPage from './Pages/OrderPage.js'
import { addLocation } from "./Redux/store";


const App = (props) => {
  return(
      <div className="App">
        <Route exact path="/" render={ () => <MainPage />} />
        <Route path="/order" render={ () => <OrderPage store={ props.store } state={props.state} /> } />
     </div>
  )
}

export default App;

