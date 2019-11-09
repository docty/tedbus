import { DETAILS_BUS, DETAILS_PASSENGERS, DETAILS_BUS_TYPE, DETAILS_DATE,DETAILS_TIME,
DETAILS_LUGGAGE, DETAILS_PICKUP, DETAILS_PRICE } from './../constants';






const initialState = {

  bus :  'VIP',
  bustype : 'Asford',
  passengers : '1',
  date : {year :new Date().getUTCFullYear(), month : new Date().getUTCMonth()+1, day : new Date().getUTCDate()},
  time : '',
  luggage : true,
  pickup : '',
  price : ''
};

const detailsReducer =  (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_BUS:
      return {...state,  bus: action.payload};
    case DETAILS_PASSENGERS:
      return {...state,  passengers: action.payload};
    case DETAILS_BUS_TYPE:
      return {...state,  bustype: action.payload};
    case DETAILS_DATE:
      return {...state,  date: action.payload};
    case DETAILS_TIME:
      return {...state,  time: action.payload};
    case DETAILS_LUGGAGE:
      return {...state,  luggage: !state.luggage};
    case DETAILS_PICKUP:
      return {...state,  pickup: action.payload};
    case DETAILS_PRICE:
        return {...state,  price: action.payload};
    default:
      return state;
  }
}

export default detailsReducer;
