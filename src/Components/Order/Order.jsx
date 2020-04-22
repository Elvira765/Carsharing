import React from 'react';
import './Order.scss';
import Header from '../Header/Header';
import Step from './Step/Step';

const Order = () => {
    return (
        <div className="order">
            <Header />
            <Step />
        </div>
    )
}

export default Order;