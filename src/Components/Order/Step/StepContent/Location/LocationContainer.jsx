import React from 'react';
import { addLocationActionCreator, updateNewLocationText } from '../../../../../Redux/order-reducer';
import Location from './Location';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        orderPage: state.orderPage,
        newLocationText: state.orderPage.StepOutputData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewLocationText: (text) => {
            let action =  updateNewLocationText(text);
            dispatch(action);
        },
        addLocation :() => {
            dispatch(addLocationActionCreator());
        }
    }
}

const LocationContainer = connect (mapStateToProps, mapDispatchToProps)(Location)

export default LocationContainer;
