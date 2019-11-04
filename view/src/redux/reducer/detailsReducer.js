import { DETAILS_BUS, DETAILS_PASSENGERS, DETAILS_BUS_TYPE, DETAILS_DATE,DETAILS_TIME } from './../constants';






const initialState = {

  bus :  'VIP',
  bustype : 'Asford',
  passengers : '1',
  date : {year :new Date().getUTCFullYear(), month : new Date().getUTCMonth()+1, day : new Date().getUTCDate()},
  time : '04 : 00'
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
    default:
      return state;
  }
}

export default detailsReducer;
