import React, { useEffect } from 'react';
import Additional from './../Additional/Additional';
import StepOutput from '../../StepOutput/StepOutput';
import './Car.scss'
import { NavLink } from 'react-router-dom';
import {loadCars} from '../../../../../Redux/order-reducer';
import { connect } from 'react-redux';
import car1 from '../../../../../Assets/image/order/image 1.png';
import car2 from '../../../../../Assets/image/order/image 2.png';
import car3 from '../../../../../Assets/image/order/image 3.png';
import car4 from '../../../../../Assets/image/order/image 4.png';
import * as axios from 'axios'

const Car = (props) => {
  console.log(props);

  let onAddLocation = () => {
    props.addLocation();
}

    useEffect (() => {
        let appId = '5e25c641099b810b946c5d5b'
        const connect = axios.create({
            baseURL: 'http://api-factory.simbirsoft1.com/api',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Factory-Application-Id': appId,
        }
    })
        connect.get('/db/car').then(response => {
            props.loadCars(response.data.data);
        })
    }, [])
  return (
          <div className="car">
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
                  { 
                    props.cars.map( car=> {
                      return (
                        <div className="car__item">
                          <div className="car__item-name">{car.name}</div>
                          <div className="car__item-price">{car.priceMin} - {car.priceMax} ₽</div>
                          <img src={'http://api-factory.simbirsoft1.com' + car.thumbnail.path} alt="car" className="car__item-image"/>
                        </div>
                      )
                    } )
                  }
                </div>
            </div>
            <div className="car__output">
            <StepOutput StepOutputData={props.StepOutputData} />
              <NavLink exact to="/order/2">
                  <button onClick={onAddLocation}>Выбрать модель</button>
              </NavLink>
            </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
    cars: state.orderPage.cars
})

export default connect(mapStateToProps, {loadCars})(Car)
