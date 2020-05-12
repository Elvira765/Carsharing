import React from 'react';
import './StepOutput.scss';
import StepOutputItem from './StepOutputItem/StepOutputItem'

const StepOutput = (props) => {
    let OutputElements = 
        props.StepOutputData.map( s=> <StepOutputItem name={s.name} item={s.item}/> );

    return (
        <div className="output">
            <div className="output__title">Ваш заказ:</div>
            <ul>
                <div class="output__items">
                    { OutputElements }
                </div>
            </ul>
            <div className="output__price-wrp">
                  <p className="output__price-text">Цена:</p>
                  <div className="output__price">16 000 ₽</div>
            </div>
        </div>
    )
}

export default StepOutput;