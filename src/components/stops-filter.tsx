import { useSelector } from "react-redux";
import { State, StopsQtyType } from "../types";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { setStopsQuantity } from "../store/app-slice";
import { stopsLabel } from "../utils";

type StopsFilterPropsType = {
    stop: StopsQtyType;
}

function StopsFilter({stop}: StopsFilterPropsType): React.JSX.Element {
    const choosenStops = useSelector((state: State):StopsQtyType[] => state.appSlice.stopsQuantity);
    const dispatch = useAppDispatch();
    const handleSetStops = (stopQty: StopsQtyType): void => {
        dispatch(setStopsQuantity(stopQty))
    };
    const isChecked = choosenStops.includes(stop) || choosenStops.length === 4;

    return (
        <div className="filters__input-wrapper" onClick={() => handleSetStops(stop)}>
            <input className="filters__input" type="checkbox" id="all" />
            <div className="filters__input-custom">
                <div className={`filters__input-checkbox ${isChecked ? 'checked' : ''}`}></div>
                <span className="filters__input-text">{stopsLabel(stop)}</span>
            </div>
        </div>
    )
}

export default StopsFilter;
