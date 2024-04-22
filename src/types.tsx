import store from "./store";

export type TicketType = {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}

export type InitialStateType = {
    tickets: TicketType[];
    currency: string;
    stopsQuantity: StopsQtyType[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StopsQtyType = 0 | 1 | 2 | 3 | undefined ;

export type TransferQuantityType = {
    all: StopsQtyType;
    noStops: StopsQtyType;
    oneStop: StopsQtyType;
    twoStops: StopsQtyType;
    threeStops: StopsQtyType;
}
