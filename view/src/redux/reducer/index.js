import { combineReducers } from 'redux'
import detailsReducer from './detailsReducer';
import personalReducer from './personalReducer';
import paymentReducer from './paymentReducer';






const rootReducer = combineReducers({

    personal: personalReducer,
    details : detailsReducer,
    payment : paymentReducer

});

export default rootReducer;
