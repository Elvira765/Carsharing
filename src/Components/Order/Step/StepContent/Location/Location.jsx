import React, { useState, useEffect } from 'react';
import Car from './../Car/Car';
import './Location.scss';
import StepOutput from '../../StepOutput/StepOutput';
import { NavLink } from 'react-router-dom';
import { addLocationActionCreator, updateNewLocationText } from '../../../../../Redux/order-reducer';
import map from '../../../../../Assets/image/order/map.png';
import * as axios from 'axios'
import {loadCities, loadPoints } from '../../../../../Redux/order-reducer';
import { connect } from 'react-redux';

const Location = (props)=> {
    console.log(props)

    let newOutputItem = React.createRef();

    let onAddLocation = () => {
        props.addLocation();
    }

    let onLocationChange = () => {
        let text = newOutputItem.current.value;
        props.updateNewLocationText(text);
     }
    
    const [count , setCount] = useState(0);

    const [cityInput, setCityInput ] = useState('');
    const [PointInput, setPointInput] = useState('');

    const cityId= props.cities.map(city => city.id );

    useEffect (() => {
        let appId = '5e25c641099b810b946c5d5b'
        const connect = axios.create({
            baseURL: 'http://api-factory.simbirsoft1.com/api',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Factory-Application-Id': appId,
        }
    })
        connect.get('/db/point').then(response => {
            props.loadPoints(response.data.data);
        })
    }, [])

    useEffect (() => {
        let appId = '5e25c641099b810b946c5d5b'
        const connect = axios.create({
            baseURL: 'http://api-factory.simbirsoft1.com/api',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Factory-Application-Id': appId,
        }
    })
        connect.get('/db/city').then(response => {
            props.loadCities(response.data.data);
        })
    }, [])
    return (
    <div className="location">
        <div className="location__input">
        <form className="location__form">
            <label>Город
                {/* {<input 
                    className="location__city" 
                    type="text" 
                    placeholder="Начните воодить город..." 
                    name="city"
                    onChange={(event) => setCityList(event.target.value) } 
                    value={cityInput} 
                />} */}
                
                <select className="location__city" >
                    {
                        props.cities.map(city => <option className="location__city"> { city.name } </option>)
                    }
                </select>
                {
                    
                    cityInput !== ''
                        ?   <svg onClick= {()=> setCityInput('')} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                            </svg>
                        :   null
                }
                {
                    //cityList ? <div><ul>{cityName}</ul></div> : null
                }
            </label>

            
            <label>Пункт выдачи
                {/* <input 
                    className="location__point" 
                    type="search" 
                    placeholder="Начните вводить пункт ..." 
                    name="point" 
                /> */}
                <select className="location__city" >
                    {
                        props.points.map(point => <option> { point.name } </option>) 

                    }
                </select>
            </label>
        </form>
        <div className="location-map">
            <p className="location__map-text">Выбрать на карте:</p>
                <img src={map} alt="map " className="location__map-image"/>
        </div>
        </div>
        <div className="location__output">
            <StepOutput StepOutputData={props.StepOutputData} />
            <NavLink exact to="/order/2">
                <button onClick={onAddLocation}>Выбрать модель</button>
            </NavLink>
        </div>
    </div>
    )
}



const mapStateToProps = (state) => ({
    cities: state.orderPage.cities,
    points: state.orderPage.points
})
export default connect(mapStateToProps, {loadCities,loadPoints})(Location);