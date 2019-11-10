import { PAYMENT_METHOD } from './../constants';






const initialState = {

  payby :  'MTN',

};

const detailsReducer =  (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_METHOD:
      return {...state,  payby: action.payload};

    default:
      return state;
  }
}

export default detailsReducer;
