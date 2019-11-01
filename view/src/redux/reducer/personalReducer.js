import { POST_PERSONAL } from './../constants';


const initialState = {
  valueChange: {}
};


function personalReducer(state = initialState, action) {
  switch (action.type) {
    case POST_PERSONAL:
      return {...state,  valueChange : {...state.valueChange , ...action.payload}};
    default:
      return state;
  }
}

export default personalReducer;
