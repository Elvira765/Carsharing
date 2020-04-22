import React, { Component } from 'react';
import './Step.scss';
import { NavLink} from 'react-router-dom';
import StepContent from './StepContent/StepContent'

const Step = (props) => {
    return (
        <div className="step">
            <div className="step__items">
                <StepItem name="Местоположение" id="1"/>
                <StepItem name="Модель" id="2" />
                <StepItem name="Допольнительно" id="3" />
                <StepItem name="Итого" id="4" />
            </div>
            <div className="step__content">
                <StepContent />
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