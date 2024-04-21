import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { setTickets } from './store/app-slice.ts'
import store from './store/index.ts'
import tickets from './mock-data/tickets.json'
import { Provider } from 'react-redux'

store.dispatch(setTickets(tickets.tickets))


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
)
