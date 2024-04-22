import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { InitialStateType, StopsQtyType, TicketType } from '../types'
import { CURRENCY_TYPE } from '../utils';

const initialState: InitialStateType = {
    tickets: [],
    currency: CURRENCY_TYPE.rub,
    stopsQuantity: [],
}

const appSlice = createSlice({
    name: 'tickets',
    initialState: initialState,
    reducers: {
        setTickets(state, action: PayloadAction<TicketType[]>) {
            state.tickets = action.payload;
        },
        setCurrency(state, action: PayloadAction<string>) {
            state.currency = action.payload;
        },
        setStopsQuantity(state, action: PayloadAction<StopsQtyType>) {
            if (state.stopsQuantity.length) {
                if (state.stopsQuantity.includes(action.payload)) {
                    state.stopsQuantity = state.stopsQuantity.filter((stops) => stops !== action.payload);
                } else {
                    state.stopsQuantity = [...state.stopsQuantity, action.payload];
                }
            } else {
                state.stopsQuantity = [...state.stopsQuantity, action.payload];
            }
            if (action.payload === undefined) {
                state.stopsQuantity = [0, 1, 2, 3];
            }
        }
    }
});

export const { setTickets, setCurrency, setStopsQuantity } = appSlice.actions;
export default appSlice.reducer;

