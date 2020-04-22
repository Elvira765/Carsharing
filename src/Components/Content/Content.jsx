import React from 'react';
import './Content.scss';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

const Content = () => {
    return  <div className="content">
                <Header />
                <div className="content__main">
                    <div className="content__title">Каршеринг</div>
                    <div className="content__subtitle">Need for drive</div>
                    <div className="content__text">Поминутная аренда авто твоего города</div>
                        <NavLink exact to="/order">
                            <button className="content__btn">
                                <span className="content__btn-text">Забронировать</span>
                            </button>
                        </NavLink>
                </div>
                    <div className="content__footer">
                        <div className="content__number">8 (495) 234-22-44 </div>
                        <div className="content__copyright">© 2016-2019 «Need for drive»</div>
                </div>
            </div>
}

export default Content;