const ADD_LOCATION = 'ADD-LOCATION';
const UPDATE_NEW_LOCATION_TEXT = 'UPDATE-NEW-LOCATION-TEXT';
const SET_MENU = 'SET_MENU';
const SET_CITIES = 'SET_CITIES';
const SET_POINTS = 'SET_POINTS';
const SET_CARS = 'SET_CARS';


let initialState = {
    isMenu: true,
    menu: [
        {id: 1, name: 'Местоположение', path: '/order/1', active: true},
        {id: 2, name: 'Модель',path: '/order/2', active: false},
        {id: 3, name: 'Дополнительно',path: '/order/3', active: false},
        {id: 4, name: 'Итого',path: '/order/4', active: false}
    ],
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
    ],
    cities: [],
    points: [],
    cars: []
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
        case SET_MENU: 
            return {
                ...state,
                isMenu: !state.isMenu
            }
        case SET_MENU: 
            return {
                ...state,
                menu: state.menu.map(el => {
                    if (el.id === action.id) {
                        return { ...el,active: false }
                    }
                        return { ...el }
                })
            }
        case SET_CITIES:
            return {
                ...state,
                cities: action.cities
            }
        case SET_POINTS:
            return {
                ...state,
                points: action.points
            }
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case UPDATE_NEW_LOCATION_TEXT:
            state.newLocationText = action.newText;
            return state;
        default:
            return state; 
    }
}

// export const setMenuActionCreator = (isMenu) => ({ type: SET_MENU, isMenu});

export const setMenuActionCreator = (id) => ({ type: SET_MENU, id });

export const addLocationActionCreator = () =>  ({ type: ADD_LOCATION });

export const updateNewLocationText = (text) => 
 ({type: UPDATE_NEW_LOCATION_TEXT, newText: text});

export const loadCities = (arrayCities) => ({ type: SET_CITIES, cities:arrayCities});

export const loadPoints = (arrayPoints) => ({ type: SET_POINTS, points:arrayPoints});

export const loadCars = (arrayCars) => ({ type: SET_CARS, cars:arrayCars });
     

export default orderReducer;