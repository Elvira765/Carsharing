import React from 'react';
import Menu from '../Components/Menu/Menu';
import Order from '../Components/Order/Order';

const OrderPage = (props) =>  {
    return (
      <div className="OrderPage">
        <Menu />
        <Order StepOutputData={props.StepOutputData}/>
      </div>
    );
  }

export default OrderPage;