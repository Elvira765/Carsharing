import React, { Component } from 'react';
import './Step.scss';
import { NavLink, Route} from 'react-router-dom';
import Car from './StepContent/Car/Car';
import Additional from './StepContent/Additional/Additional';
import Conclusion from './StepContent/Conclusion/Conclusion';
import LocationContainer from './StepContent/Location/LocationContainer';

const Step = (props) => {
    let state = props.OrderPage;
    return (
        <div className="step">
            <div className="step__items">
                <NavLink exact to="/order/1"><StepItem name={state.StepItem[0].name} id={state.StepItem[0].id} /></NavLink>
                <NavLink exact to="/order/2"><StepItem name={props.store.StepItem[1].name} id={props.OrderPage.StepItem[1].id} /></NavLink>
                <NavLink exact to="/order/3"><StepItem name={props.store.StepItem[2].name} id={props.OrderPage.StepItem[2].id} /></NavLink>
                <NavLink exact to="/order/4"><StepItem name={props.store.StepItem[3].name} id={props.OrderPage.StepItem[3].id} /></NavLink>
            </div>
            <div className="step__content">
                <Route path='/order/1' render ={ () => <LocationContainer store={props.store}  /> }/>
                <Route path='/order/2' render ={ () => <Car StepOutputData={props.OrderPage.StepOutputData} /> }/>
                <Route path='/order/3' render ={ () => <Additional StepOutputData={props.OrderPage.StepOutputData} /> }/>
                <Route path='/order/4' render ={ () => <Conclusion StepOutputData={props.OrderPage.StepOutputData} /> }/>
            </div>
        </div >
    )
}

const StepItem = (props) => {

    let path = "/order/" + props.id;
    

    return (
        <div class="step__item">
            <NavLink to={path} className="step__name">{props.name}</NavLink>
            <svg className="step__pointer" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
            </svg>
        </div>
    )
}


export default Step;