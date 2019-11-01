import { combineReducers } from 'redux'
import detailsReducer from './detailsReducer';
import personalReducer from './personalReducer';






const rootReducer = combineReducers({

    personal: personalReducer,
    details : detailsReducer

});

export default rootReducer;
