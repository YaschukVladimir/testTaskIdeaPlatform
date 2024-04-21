

function Filters (): React.JSX.Element {
    return (
        <div className="filters__wrapper">
            <fieldset className="filters__fieldset">
                <legend>Валюта</legend>
                    <div className="filters__currency-wrapper">
                        <div className="filters__currency">RUB</div>
                        <div className="filters__currency">USD</div>
                        <div className="filters__currency">EUR</div>
                    </div>      
            </fieldset>
            <fieldset className="filters__fieldset">
                <legend>Количество пересадок</legend>
                <div className="filters__input-wrapper">
                    <input className="filters__input" type="checkbox" id="all"/>
                    <div className="filters__input-custom">
                        <div className="filters__input-checkbox checked"></div>
                        <span className="filters__input-text">все</span>
                    </div>
                </div>
                <div className="filters__input-wrapper">
                    <input className="filters__input" type="checkbox" id="all"/>
                    <div className="filters__input-custom">
                        <div className="filters__input-checkbox"></div>
                        <span className="filters__input-text">Без пересадок</span>
                    </div>
                </div>
                <div className="filters__input-wrapper">
                    <input className="filters__input" type="checkbox" id="1-stops"/>
                    <div className="filters__input-custom">
                        <div className="filters__input-checkbox"></div>
                        <span className="filters__input-text">1 пересадка</span>
                    </div>
                </div>
                <div className="filters__input-wrapper">
                    <input className="filters__input" type="checkbox" id="2-stops"/>
                    <div className="filters__input-custom">
                        <div className="filters__input-checkbox"></div>
                        <span className="filters__input-text">2 пересадки</span>
                    </div>
                </div>
                <div className="filters__input-wrapper">
                    <input className="filters__input" type="checkbox" id="3-stops"/>
                    <div className="filters__input-custom">
                        <div className="filters__input-checkbox"></div>
                        <span className="filters__input-text">3 пересадки</span>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default Filters;
