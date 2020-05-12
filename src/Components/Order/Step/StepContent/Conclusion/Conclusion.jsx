import React from 'react';
import './Conclusion.scss';
import StepOutput from '../../StepOutput/StepOutput';
import car2 from '../../../../../Assets/image/order/image 2.png';

class Conclusion extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
        this.props = props;
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
     const Conclusion = (
            <div className="conclusion">
              <div className="conclusion__input">
                <div className="conclusion__order-wrapper">
                    <div className="conclusion__order-confirmation">Ваш заказ подтверждён</div>
                    <div className="conclusion__order-model">Hyndai, i30 N</div>
                    <div className="conclusion__order-number">K 761 HA 73</div>
                    <div className="conclusion__order-tank"><b>Топливо</b> 100%</div>
                    <div className="conclusion__order-date"><b>Доступна с</b> 12.06.2019 12:00</div>
                </div>
                <div className="conclusion__order-image">
                    <img src={car2} alt="car"/>
                </div>
                  </div>
                <div className="conclusion__output">
                  <StepOutput StepOutputData={this.props.StepOutputData} />
                  <button onClick={this.loadStuff}>Итого</button>
                </div>
        </div>
    );

    return (<div className="step__conclusion">{ this.state.loadWorksheep ? <WorksheetSelector/> : Conclusion }</div>);

  }
}

function WorksheetSelector(props) {
    return (
        <div>
            <h1>Выберите группы</h1>
            <button>Next step</button>
        </div>
    );
}


export default Conclusion;