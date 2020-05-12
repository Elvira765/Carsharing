const ADD_LOCATION = 'ADD-LOCATION';
const UPDATE_NEW_LOCATION_TEXT = 'UPDATE-NEW-LOCATION-TEXT';

let initialState = {
    OrderPage: {
        StepItem: [
            {id: 1, name: 'Местоположение'},
            {id: 2, name: 'Модель'},
            {id: 3, name: 'Дополнительно'},
            {id: 4, name: 'Итого'}
        ],
        Location: [],
        StepOutputData : [
            {id: 1, name: 'Пункт выдачи', item:' '},
            {id: 2, name: 'Модель', item:'Hyndai, i30 N'},
            {id: 3, name: 'Длительность аренды', item:'1д 2ч'},
            {id: 4, name: 'Тариф', item:'На сутки'},
            {id: 5, name: 'Полный бак', item:'Да'}
        ]
    }
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LOCATION:
            let newLocation = {
                id: 6, 
                name: 'Модель', 
                item: state.newLocationText
            }
            state.StepOutputData.push(newLocation);
            state.newLocationText = ''; 
            return state;

        case UPDATE_NEW_LOCATION_TEXT:
            state.newLocationText = action.newText;
            return state;
        default:
            return state; 
    }
}

export const addLocationActionCreator = () =>  ({ type: ADD_LOCATION });

export const updateNewLocationText = (text) => 
 ({type: UPDATE_NEW_LOCATION_TEXT, newText: text});
     

export default orderReducer;