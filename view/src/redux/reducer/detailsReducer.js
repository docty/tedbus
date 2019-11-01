import { DETAILS_BUS } from './../constants';






const initialState = {

  bus :  'VIP'
};

const detailsReducer =  (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_BUS:
      return {...state,  bus: action.payload};
    default:
      return state;
  }
}

export default detailsReducer;
