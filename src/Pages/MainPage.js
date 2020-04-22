import React from 'react';
import Menu from '../Components/Menu/Menu.jsx'
import Content from '../Components/Content/Content.jsx';


const MainPage = () =>  {
    return (
      <div className="MainPage">
        <Menu />
        <Content />
      </div>
    );
  }

export default MainPage;