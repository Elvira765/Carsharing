import React from 'react'; 

class Additional extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

  render() {
     const Additional = (
            <div class="step__car">
                  <form class="search__additional">
                    <p>Цвет</p>
                    <div class="search__color">
                      <input class="radio" type="radio" name="color" value="Любой" id="all color"/>
                      <label for="all color">Любой</label>
                      <input class="radio" type="radio" name="color" value="Красный" id="red"/>
                      <label for="red">Красный</label>
                      <input class="radio" type="radio" name="color" value="Голубой" id="blue" checked/>
                      <label for="blue">Голубой</label>
                    </div>
                    <p>Дата аренды</p>
                    <div class="search__date">
                      <label>C
                        <input class="search__city" type="datetime" placeholder="Введите дату и время" name="start"/>
                      </label>
                      <label>По
                        <input class="search__point" type="datetime" placeholder="Введите дату и время" name="finish"/>
                      </label>
                    </div>
                    <p>Тариф</p>
                    <div class="search__tariff"> 
                      <input class="radio" type="radio" name="tariff" value="Минутный" id="min"/>
                      <label for="min">Поминутно, 7₽/мин</label>
                      <input class="radio" type="radio" name="tariff" value="По суточно" id="day" checked/>
                      <label for="day">На сутки, 1999 ₽/сутки</label>
                    </div>
                    <p>Доп услуги</p>
                    <div class="search__service">
                      <input class="checkbox" type="checkbox" id="full tank" checked/>
                      <label for="full tank">Полный бак, 500р</label>
                      <input class="checkbox" type="checkbox" id="baby chair"/>
                      <label for="baby chair">Детское кресло, 200р</label>
                      <input class="checkbox" type="checkbox" id="right wheel"/>
                      <label for="right wheel">Правый руль, 1600р</label>
                    </div>
                  </form>
                <button onClick={this.loadStuff}>Начать</button>
        </div>
    );

    return (<div>{ this.state.loadWorksheep ? <WorksheetSelector/> : Additional }</div>);

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


export default Additional;