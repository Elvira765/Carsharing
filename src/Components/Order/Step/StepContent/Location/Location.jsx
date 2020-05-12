import React from 'react';
import Car from './../Car/Car';
import './Location.scss';
import StepOutput from '../../StepOutput/StepOutput';
import { NavLink } from 'react-router-dom';
import { addLocationActionCreator, updateNewLocationText } from '../../../../../Redux/order-reducer';
import map from '../../../../../Assets/image/order/map.png';

const Location = (props)=> {

    let newOutputItem = React.createRef();

    let onAddLocation = () => {
        props.addLocation();
    }

    let onLocationChange = () => {
        let text = newOutputItem.current.value;
        props.updateNewLocationText(text);
     }
    

    return (
    <div className="location">
        <div className="location__input">
        <form className="location__form">
            <label>Город
                    <input className="location__city" type="search" placeholder="Начните воодить город..." name="city" ref={newOutputItem} onChange={onLocationChange} value={props.newLocationText} />
            </label>
            <label>Пункт выдачи
                <input className="location__point" type="search" placeholder="Начните вводить пункт ..." name="point" />
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

export default Location;

/*
class Location extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
        this.props = props;
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

    render() {
        const Location = (
            <div className="location">
                <div className="location__input">
                <form className="location__form">
                    <label>Город
                            <input className="location__city" type="search" placeholder="Начните воодить город..." name="city" ref={newOutputItem} />
                    </label>
                    <label>Пункт выдачи
                        <input className="location__point" type="search" placeholder="Начните вводить пункт ..." name="point" />
                    </label>
                </form>
                <div className="location-map">
                    <p className="location__map-text">Выбрать на карте:</p>
                        <img src="./image/order/map.png" alt="map " className="location__map-image"/>
                </div>
                </div>
                <div className="location__output">
                    <StepOutput StepOutputData={this.props.StepOutputData} />
                    <NavLink exact to="/order/2">
                        <button onClick={this.loadStuff} /*onClick={addLocation}>Выбрать модель</button>
                    /*</NavLink>
                </div>
            </div>
        );
    return (<div className="step__location">{ this.state.loadWorksheep ? <Car/> : Location }</div>);
  }
}


export default Location;*/