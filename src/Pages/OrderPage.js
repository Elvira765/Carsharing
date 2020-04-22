import React from 'react';
import Menu from '../Components/Menu/Menu';
import Order from '../Components/Order/Order';

const OrderPage = () =>  {
    return (
      <div className="OrderPage">
        <Menu />
        <Order />
      </div>
    );
  }

export default OrderPage;