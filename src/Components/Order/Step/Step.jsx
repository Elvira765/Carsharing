import React, { Component } from 'react';
import './Step.scss';
import { NavLink, Route} from 'react-router-dom';
import Car from './StepContent/Car/Car';
import Additional from './StepContent/Additional/Additional';
import Conclusion from './StepContent/Conclusion/Conclusion';
import Location from './StepContent/Location/Location';
import { connect } from 'react-redux';
import { setMenuActionCreator } from '../../../Redux/order-reducer'

const Step = (props) => {
    return (
        <div className="step">
            <div className="step__items">
                {
                    props.menu.map(el => {
                        return(
                            <NavLink key={el.id} onClick={() => props.setMenuActionCreator(el.id) } /*className = { el.active ? "step__items--active" : "step__items" }*/ exact to={el.path}><StepItem name={el.name} /></NavLink>
                        )
                    })
                }
            </div>
            <div className={ props.isMenu ? "step__content" : "step__content--active" }>
                <Route path='/order/1' render ={ () => <Location /> }/>
                <Route path='/order/2' render ={ () => <Car StepOutputData={props.OrderPage.StepOutputData} /> }/>
                <Route path='/order/3' render ={ () => <Additional StepOutputData={props.OrderPage.StepOutputData} /> }/>
                <Route path='/order/4' render ={ () => <Conclusion StepOutputData={props.OrderPage.StepOutputData} /> }/>
            </div>
        </div >
    )
}

const StepItem = (props) => {
    return (
        <div className="step__item">
            <span className="step__name">{props.name} </span>
            <svg className="step__pointer" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
            </svg>
        </div>
    )
}

const mapStateToProps = (state) => ({
    menu: state.orderPage.menu,
    OrderPage: state.orderPage,
    isMenu: state.orderPage.isMenu
})



export default connect(mapStateToProps, { setMenuActionCreator })(Step)