import { TRANSFER_QUANTITY } from "../utils";
import CurrencyFilter from "./currency-filter";
import StopsFilter from "./stops-filter";


function Filters (): React.JSX.Element {
    return (
        <div className="filters__wrapper">
            <fieldset className="filters__fieldset">
                <legend>Валюта</legend>
                    <CurrencyFilter />
            </fieldset>
            <fieldset className="filters__fieldset">
                <legend>Количество пересадок</legend>
                <StopsFilter stop={TRANSFER_QUANTITY.all} />
                <StopsFilter stop={TRANSFER_QUANTITY.noStops} />
                <StopsFilter stop={TRANSFER_QUANTITY.oneStop} />
                <StopsFilter stop={TRANSFER_QUANTITY.twoStops} />
                <StopsFilter stop={TRANSFER_QUANTITY.threeStops} />
            </fieldset>
        </div>
    );
}

export default Filters;
