import React from 'react';
import './Order.scss';
import Header from '../Header/Header';
import Step from './Step/Step';
import { NavLink } from 'react-router-dom';

const Order = (props) => {
    return (
        <div className="order">
            <NavLink to ="/">
                <Header />
            </NavLink>
            <Step />
        </div>
    )
}

export default Order;