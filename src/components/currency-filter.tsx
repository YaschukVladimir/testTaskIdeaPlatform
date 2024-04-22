import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { setCurrency } from "../store/app-slice";
import { CURRENCY } from "../utils";
import { State } from "../types";


function CurrencyFilter(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const handleSetCurrency = (cur: string): void => {
        dispatch(setCurrency(cur))
    };

    const choosenCurrency = useSelector((state: State) => state.appSlice.currency)
    return (
        <div className="filters__currency-wrapper">
            {CURRENCY.map((value) => {
                return (
                    <div
                        key={value}
                        className={`filters__currency ${choosenCurrency === value ? 'is-active' : ''}`}
                        onClick={() => handleSetCurrency(value)}>{value}
                    </div>
                )
            })}
        </div>
    )

}

export default CurrencyFilter;
