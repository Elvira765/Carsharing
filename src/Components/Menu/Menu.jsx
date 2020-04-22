import React from 'react';
import './Menu.scss';

const Menu = () => {
    return <div className="menu">
                <div className="menu__burger">
                    <a className="menu__burger-button" href="#">
                        <span className="menu__burger-lines"></span>
                    </a>
                    <nav className="menu__burger-nav">
                        <a className="menu__burger-link" href="#">Парковка</a>
                        <a className="menu__burger-link" href="#">Страховка</a>
                        <a className="menu__burger-link" href="#">Бензин</a>
                        <a className="menu__burger-link" href="#">Обслуживание</a>
                        <div className="menu__burger-social-icons">
                            <a className="menu__burger-social" href="#"></a>
                        </div>
                    </nav>
                    <div className="menu__burger-overlay"></div>
                </div>
                <button className="menu__language-btn">
                    <div className="menu__language">Eng</div>
                </button>
            </div>

}

export default Menu;