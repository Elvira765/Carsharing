import orderReducer from "./order-reducer";

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    renderEntireTree() {
        console.log('State ');
    },
    subscribe (observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action) {
        this._state.OrderPage = orderReducer(this._state.OrderPage, action);
        this.renderEntireTree(this._state);

    }
}

export default store;



/*let renderEntireTree = () => {
    console.log('State ');
}*/


/*let state = {
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

export const addLocation = (LocationItem) => {
    let newLocation = {
        id: 6, 
        name: 'Модель', 
        item: LocationItem
    }
    state.OrderPage.StepOutputData.push(newLocation)
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

 export default state;*/