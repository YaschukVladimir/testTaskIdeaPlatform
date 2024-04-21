
import { useSelector } from 'react-redux'
import './App.scss'
import { State } from './types'
import Ticket from './components/ticket';
import Filters from './components/filters';

function App() {

  const tickets = useSelector((state: State) => state.appSlice.tickets);

  return (
    <div className="container">
      <section className="filters">
        <Filters />
      </section>
      <section className="tickets">
        <ul className="list">
          {tickets.map((ticket, index) => <Ticket ticket={ticket} key={index} />)}
        </ul>
      </section>
    </div>

  )
}

export default App
