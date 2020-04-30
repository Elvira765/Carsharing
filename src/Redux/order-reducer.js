const ADD_LOCATION = 'ADD-LOCATION';

let initialState = {
    output: [
        {id: 1, title:'Пункт выдачи', locationCity:''},
        {id: 2, title:'Модель'}
    ]
}

export let addLocation = (locationCityText) => {
    let newLocation = {
        locationCity:locationCityText
    };
    initialState.output(0).push(newLocation);
}

/*const orderReducer = (state, action) => {
    switch(action,type) {
        case ADD_LOCATION:
            let locationCity = {
                city: state.locationCityText
            };
    }
}*/