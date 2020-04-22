import React from 'react';
import Car from './../Car/Car'

class Location extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
    const Location = (
        <div className="step__location">
            <form class="step__location-form">
                <label>Город
                        <input class="step__location-city" type="search" placeholder="Начните воодить город..." name="city" />
                </label>
                <label>Пункт выдачи
                    <input class="step__location-point" type="search" placeholder="Начните вводить пункт ..." name="point" />
                </label>
            </form>
            <button onClick={this.loadStuff}>Начать</button>
        </div>
    );
    return (<div>{ this.state.loadWorksheep ? <Car/> : Location }</div>);
  }
}

export default Location;