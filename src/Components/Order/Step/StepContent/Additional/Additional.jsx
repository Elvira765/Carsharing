import React from 'react';
import './Additional.scss';
import StepOutput from '../../StepOutput/StepOutput';
import Conclusion from './../Conclusion/Conclusion';
import { NavLink } from 'react-router-dom';

class Additional extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
     const Additional = (
            <div className="additional">
              <div className="additional__input">
                  <form className="additional__form">
                    <p className="additional__title">Цвет</p>
                    <div className="additional__color">
                      <input className="radio" type="radio" name="color" value="Любой" id="all color"/>
                      <label for="all color">Любой</label>
                      <input className="radio" type="radio" name="color" value="Красный" id="red"/>
                      <label for="red">Красный</label>
                      <input className="radio" type="radio" name="color" value="Голубой" id="blue" checked/>
                      <label for="blue">Голубой</label>
                    </div>
                    <p className="additional__title">Дата аренды</p>
                    <div className="additional__date">
                      <label>C
                        <input className="additional__date-start" type="datetime" placeholder="Введите дату и время" name="start"/>
                      </label>
                      <label>По
                        <input className="additional__date-finish" type="datetime" placeholder="Введите дату и время" name="finish"/>
                      </label>
                    </div>
                    <p className="additional__title">Тариф</p>
                    <div className="additional__tariff"> 
                      <input className="radio" type="radio" name="tariff" value="Минутный" id="min"/>
                      <label for="min">Поминутно, 7₽/мин</label>
                      <input className="radio" type="radio" name="tariff" value="По суточно" id="day" checked/>
                      <label for="day">На сутки, 1999 ₽/сутки</label>
                    </div>
                    <p className="additional__title">Доп услуги</p>
                    <div className="additional__service">
                      <input className="checkbox" type="checkbox" id="full tank" checked/>
                      <label for="full tank">Полный бак, 500р</label>
                      <input className="checkbox" type="checkbox" id="baby chair"/>
                      <label for="baby chair">Детское кресло, 200р</label>
                      <input className="checkbox" type="checkbox" id="right wheel"/>
                      <label for="right wheel">Правый руль, 1600р</label>
                    </div>
                  </form>
                </div>
                <div className="car__output">
                  <StepOutput />
                  <NavLink exact to="/order/4">
                    <button onClick={this.loadStuff}>Итого</button>
                  </NavLink>
                </div>
        </div>
    );

    return (<div className="step__additional">{ this.state.loadWorksheep ? <Conclusion /> : Additional }</div>);

  }
}

export default Additional;