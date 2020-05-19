import React from 'react';
import Menu from '../Components/Menu/Menu.jsx'
import Content from '../Components/Content/Content.jsx';
import * as axios from 'axios'



const MainPage = () =>  {

let appId = '5e25c641099b810b946c5d5b'
const connect = axios.create({
	baseURL: 'http://api-factory.simbirsoft1.com/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Api-Factory-Application-Id': appId,
	}
})
connect.get('/db/car').then(response => {
	console.log(response.data.data);
})
connect.get('/db/city').then(response => {
	console.log(response.data.data);
})
connect.get('/db/point').then(response => {
	console.log(response.data.data);
})
connect.get('/db/category').then(response => {
	console.log(response.data.data);
})
    return (
      <div className="MainPage">
        <Menu />
        <Content />
      </div>
    );
  }

export default MainPage;