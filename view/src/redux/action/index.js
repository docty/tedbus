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
