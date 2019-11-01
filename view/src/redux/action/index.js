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
