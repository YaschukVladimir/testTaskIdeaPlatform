
import { useSelector } from 'react-redux'
import './App.scss'
import { State, TicketType } from './types'
import Ticket from './components/ticket';
import Filters from './components/filters';

function App() {

  const tickets = useSelector((state: State) => state.appSlice.tickets);
  const choosenStops = useSelector((state: State) => state.appSlice.stopsQuantity);

  const filteredTickets = () => {
    let resultArr: TicketType[] = tickets;
    if (choosenStops.length) {
      resultArr = [];
      choosenStops.forEach((stop) => {
        const result = tickets.filter((ticket) => ticket.stops === stop);
        resultArr = [...resultArr, ...result]
      });
    } 
    
    return resultArr;
  }

  return (
    <div className="container">
      <section className="filters">
        <Filters />
      </section>
      <section className="tickets">
        <ul className="list">
          {filteredTickets().map((ticket, index) => <Ticket ticket={ticket} key={index} />)}
        </ul>
      </section>
    </div>

  )
}

export default App
