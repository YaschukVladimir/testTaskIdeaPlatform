import { StopsQtyType, TransferQuantityType } from "./types";

export const CURRENCY: string[] = ['RUB', 'USD', 'EUR'];


export enum CURRENCY_TYPE {
    rub = 'RUB',
    usd = 'USD',
    eur = 'EUR',
}

export const TRANSFER_QUANTITY: TransferQuantityType = {
    all: undefined,
    noStops: 0,
    oneStop: 1,
    twoStops: 2,
    threeStops: 3
}

export const EUR = 100;
export const USD = 90;



export const stopsLabel = (stop: StopsQtyType): string => {
    switch (stop) {
        case 0:
            return 'Без пересадок';
        case 1:
            return '1 пересадка';
        case 2:
            return '2 пересадки';
        case 3:
            return '3 пересадки';
        default:
            return 'Bce';
    }
}

export const preparedPrice = (cur: string, price: number): string => {
    switch (cur) {
        case 'RUB':
            return `${price} ₽`;
        case 'USD':
            return `${Math.floor(price / USD)} $`;
        case 'EUR':
            return `${Math.floor(price / EUR)} €`;
        default:
            return `${price} ₽`;
    }
}

export const prepareString = (stops: number): string => {
    switch (stops) {
        case 1:
            return `${stops} пересадка`;
        case 2:
            return `${stops} пересадки`;
        case 3:
            return `${stops} пересадки`;
        case 0:
            return `без пересадок`;
        default:
            return `без пересадок`;
    }
}

export const preparedDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'short' });
}

