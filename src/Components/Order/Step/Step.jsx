import React, { Component } from 'react';
import './Step.scss';
import { NavLink, Route} from 'react-router-dom';
import Location from './StepContent/Location/Location';
import Car from './StepContent/Car/Car';
import Additional from './StepContent/Additional/Additional';
import Conclusion from './StepContent/Conclusion/Conclusion';

const Step = (props) => {
    return (
        <div className="step">
            <div className="step__items">
                <NavLink exact to="/order/1"><StepItem name="Местоположение" id="1"/></NavLink>
                <NavLink exact to="/order/2"><StepItem name="Модель" id="2" /></NavLink>
                <NavLink exact to="/order/3"><StepItem name="Допольнительно" id="3" /></NavLink>
                <NavLink exact to="/order/4"><StepItem name="Итого" id="4" /></NavLink>
            </div>
            <div className="step__content">
                <Route path='/order/1' render ={ () => <Location /> }/>
                <Route path='/order/2' render ={ () => <Car /> }/>
                <Route path='/order/3' render ={ () => <Additional /> }/>
                <Route path='/order/4' render ={ () => <Conclusion /> }/>
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