import React from 'react';
import Additional from './../Additional/Additional';
import StepOutput from '../../StepOutput/StepOutput';
import './Car.scss'
import { NavLink } from 'react-router-dom';

class Car extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
     const Car = (
            <div class="car">
              <div className="car__input">
                  <form className="car__form">
                    <input className="radio" type="radio" name="car" value="Все модели" id="all car" checked />
                    <label for="all car">Все модели</label>
                    <input className="radio" type="radio" name="car" value="Эконом" id="econom" />
                    <label for="econom">Эконом</label>
                    <input className="radio" type="radio" name="car" value="Премиум" id="premium"/>
                    <label for="premium">Премиум</label>
                  </form>
                  <div className="car__catalog">
                    <div className="car__item">
                      <div className="car__item-name">ELANTRA</div>
                      <div className="car__item-price">12 000 - 25 000 ₽</div>
                      <img src="./image/order/image 1.png" alt="car" className="car__item-image"/>
                    </div>
                    <div className="car__item">
                      <div className="car__item-name">i30 N</div>
                      <div className="car__item-price">12 000 - 25 000 ₽</div>
                      <img src="./image/order/image 2.png" alt="car" className="car__item-image"/>
                    </div>
                    <div className="car__item">
                      <div className="car__item-name">CRETA</div>
                      <div className="car__item-price">12 000 - 25 000 ₽</div>
                      <img src="./image/order/image 3.png" alt="car" className="car__item-image"/>
                    </div>
                    <div className="car__item">
                      <div className="car__item-name">SONATA</div>
                      <div className="car__item-price">10 000 - 32 000 ₽</div>
                      <img src="./image/order/image 4.png" alt="car" class="car__item-image"/>
                    </div>
                  </div>
              </div>
              <div className="car__output">
                <StepOutput />
                <NavLink exact to="/order/3">
                  <button onClick={this.loadStuff}>Дополнительно</button>
                </NavLink>
              </div>
        </div>
    );

    return (<div className="step__car">{ this.state.loadWorksheep ? <Additional /> : Car }</div>);
  }
}

export default Car;
