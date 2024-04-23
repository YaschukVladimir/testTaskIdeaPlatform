import { useSelector } from "react-redux";
import { State, TicketType } from "../types";
import { prepareString, preparedDate, preparedPrice } from "../utils";

type TicketPropsType = {
    ticket: TicketType;
}

function Ticket ({ticket}: TicketPropsType):React.JSX.Element {
    const currency = useSelector((state: State) => state.appSlice.currency);
    const { price,
            stops,
            carrier,
            departure_time,
            departure_date,
            origin_name,
            origin,
            arrival_time,
            destination,
            destination_name,
            arrival_date} = ticket;

    return (
        <li className="list__item ticket">
            <div className="list__item-main">
                <div className="list__item-icon">
                    <img src={`/images/${carrier}.png`} alt="icon" width="80px" height="50px"/>
                </div>
                <button className="list__item-button">{`Купить за ${preparedPrice(currency, price)}`}</button>
            </div>
            <div className="list__item-details">
                <div className="list__item-departure">
                    <span className="list__item-time">{departure_time}</span>
                    <span className="list__item-text">{`${origin}, ${origin_name}`}</span>
                    <span className="list__item-date">{preparedDate(departure_date)}</span>
                </div>
                <div className="list__item-transfers">{prepareString(stops)}
                    <div className="list__item-plane-icon">
                        <img src="/images/airplane_icon_126136.png" width="24px" height="18px" ></img>
                    </div>
                </div>
                <div className="list__item-arrivals">
                    <span className="list__item-time">{arrival_time}</span>
                    <span className="list__item-text">{`${destination}, ${destination_name}`}</span>
                    <span className="list__item-date">{preparedDate(arrival_date)}</span>
                </div>
            </div>
        </li>
    )
}

export default Ticket;
