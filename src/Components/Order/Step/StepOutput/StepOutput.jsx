import React from 'react';
import './StepOutput.scss';

const StepOutput = (props) => {
    return (
        <div className="output">
            <div className="output__title">Ваш заказ:</div>
            <ul>
                <div class="output__items">
                    <li><span className="output__item">Пункт выдачи</span><span className="output__location">Ульяновск, Нариманова 42</span></li>
                    <li><span className="output__item">Модель</span><span className="output__model">Hyndai, i30 N</span></li>
                    <li><span className="output__item">Длительность аренды</span><span className="output__time">1д 2ч</span></li>
                    <li><span className="output__item">Тариф</span><span className="output__tariff"></span></li>
                    <li><span className="output__item">Полный бак</span><span className="output__tank">Да</span></li>
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