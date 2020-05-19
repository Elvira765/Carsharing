import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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

export default StepItem;