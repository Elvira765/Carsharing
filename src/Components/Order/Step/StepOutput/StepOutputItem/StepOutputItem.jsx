import React from 'react';
import './../StepOutput.scss';

const StepOutputItem = (props) => {
    return <li>
                <span className="output__name">{props.name}</span>
                <span className="output__item">{props.item}</span>
            </li>
}

export default StepOutputItem;