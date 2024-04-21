import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { InitialStateType, TicketType } from '../types'

const initialState: InitialStateType = {
    tickets: [],
}



const appSlice = createSlice({
    name: 'tickets',
    initialState: initialState,
    reducers: {
        setTickets(state, action: PayloadAction<TicketType[]>) {
            state.tickets = action.payload;
        }
    }
});

export const { setTickets } = appSlice.actions;
export default appSlice.reducer;

