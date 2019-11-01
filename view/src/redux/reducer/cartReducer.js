import { CART, CART_CHECKOUT, CART_VALUE_CHANGE, DELIVERY_MODE, UPDATE_CART } from './../constants';


const initialState = {
  items: [],
  isCartShowing : true,
  valueChange : {},
  delivery : '',
  updater : []

};


function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART:
      return {...state, items : action.payload, updater : action.payload};
    case CART_CHECKOUT:
        return {...state, isCartShowing : !state.isCartShowing};
    case CART_VALUE_CHANGE:
        return {...state,  valueChange : {...state.valueChange , ...action.payload}};
    case DELIVERY_MODE:
            return {...state,  delivery :   action.payload.target.value};
    case UPDATE_CART:
          return {...state, updater:  state.updater.map((content, i) => i == action.payload.position ? {...content, quantity : action.payload.quantity} : content) };
    default:
      return state;
  }
}

export default cartReducer;
