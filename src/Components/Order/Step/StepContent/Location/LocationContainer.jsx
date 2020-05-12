import React from 'react';
import { addLocationActionCreator, updateNewLocationText } from '../../../../../Redux/order-reducer';
import Location from './Location';


const LocationContainer  = (props)=> {
    let state = props.store.getState();

    let addLocation = () => {
        props.store.dispatch(addLocationActionCreator());
    }

    let onLocationChange = (text) => {
        let action =  updateNewLocationText(text);
        props.store.dispatch(action);
    }
    

    return (<Location updateNewLocationText={onLocationChange} addLocation={addLocation} 
                        OrderPage={state.OrderPage} newLocationText={ state.OrderPage.StepOutputData}/>)
}

export default LocationContainer;
