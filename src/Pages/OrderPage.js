import React from 'react';
import Menu from '../Components/Menu/Menu';
import Order from '../Components/Order/Order';

const OrderPage = (props) =>  {
    return (
      <div className="OrderPage">
        <Menu />
        <Order store={props.store} state={props.state}/>
      </div>
    );
  }

export default OrderPage;