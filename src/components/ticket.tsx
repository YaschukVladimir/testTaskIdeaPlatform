import { TicketType } from "../types";

type TicketPropsType = {
    ticket: TicketType;
}

function Ticket ({ticket}: TicketPropsType):React.JSX.Element {

    const prepareString = (stops: number): string => {
        switch (stops) {
            case 1:
                return `${stops} пересадка`;
            case 2 || 3 || 4:
                return `${stops} пересадки`;
            case 0:
                return `без пересадок`;
            default:
                return `без пересадок`;
        }
    }

    const preparedDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'short' });
    }

    return (
        <li className="list__item ticket">
            <div className="list__item-main">
                <div className="list__item-icon">
                    <img src="" alt="icon" width="80px" height="50px"/>
                </div>
                <button className="list__item-button">{`Купить за ${ticket.price} ₽`}</button>
            </div>
            <div className="list__item-details">
                <div className="list__item-departure">
                    <span className="list__item-time">{ticket.departure_time}</span>
                    <span className="list__item-text">{`${ticket.origin}, ${ticket.origin_name}`}</span>
                    <span className="list__item-date">{preparedDate(ticket.departure_date)}</span>
                </div>
                <div className="list__item-transfers">{prepareString(ticket.stops)}
                    <div className="list__item-plane-icon">
                        <img src="\src\mock-data\images\airplane_icon_126136.png" width="24px" height="18px" ></img>
                    </div>
                </div>
                <div className="list__item-arrivals">
                    <span className="list__item-time">{ticket.arrival_time}</span>
                    <span className="list__item-text">{`${ticket.destination}, ${ticket.destination_name}`}</span>
                    <span className="list__item-date">{preparedDate(ticket.arrival_date)}</span>
                </div>
            </div>
        </li>
    )
}

export default Ticket;
