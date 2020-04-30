import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addLocation } from './Redux/order-reducer';

let StepOutputData = [
  {id: 1,name: 'Пункт выдачи', item:'Ульяновск, Нариманова 42'},
  {id: 2,name:'Модель', item:'Hyndai, i30 N'},
  {id: 3,name:'Длительность аренды', item:'1д 2ч'},
  {id: 4,name:'Тариф', item:'На сутки'},
  {id: 5,name:'Полный бак', item:'Да'}
]

ReactDOM.render(<App StepOutputData={StepOutputData}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
