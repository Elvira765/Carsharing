import React from 'react';
import Additional from './../Additional/Additional'

class Car extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
     const Car = (
            <div class="step__car">
                  <form class="step__car-form">
                    <input class="radio" type="radio" name="car" value="Все модели" id="all car" checked />
                    <label for="all car">Все модели</label>
                    <input class="radio" type="radio" name="car" value="Эконом" id="econom" />
                    <label for="econom">Эконом</label>
                    <input class="radio" type="radio" name="car" value="Премиум" id="premium"/>
                    <label for="premium">Премиум</label>
                  </form>
                <button onClick={this.loadStuff}>Начать</button>
        </div>
    );

    return (<div>{ this.state.loadWorksheep ? <Additional /> : Car }</div>);
  }
}

export default Car;
