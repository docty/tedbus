import * as types from './../constants';




export function setValueChange(item) {
    return {
        type: types.POST_PERSONAL,
        payload : { [item.target.name]: item.target.value}

    }
}

export function setBus(item) {
    return {
        type: types.DETAILS_BUS,
        payload : item.target.value

    }
}

export function changePassenger(item) {
    return {
        type: types.DETAILS_PASSENGERS,
        payload : item.target.value

    }
}

export function setBusType(item){
    return {
        type: types.DETAILS_BUS_TYPE,
        payload : item

    }
}

export function setBusTime(item){
    return {
        type: types.DETAILS_TIME,
        payload : item.target.value

    }
}

export function changeLuggage(){
    return {
        type: types.DETAILS_LUGGAGE
    }
}

export function changePickup(item){
    return {
        type: types.DETAILS_PICKUP,
        payload : item.target.value
    }
}

export function setPrice(item){
    return {
        type: types.DETAILS_PRICE,
        payload : item
    }
}

export function setPaymentChange(item) {
    return {
        type: types.PAYMENT_METHOD,
        payload : item.target.value

    }
}
