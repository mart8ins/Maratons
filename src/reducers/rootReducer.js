import {runners, events} from "../eventsSeedData";

const initialState = {
    runners,
    events
  }

const rootReducer = (state = initialState, action) => {
  if(action.type === "ADD_RUNNER") {
    return {
      ...state,
      runners: [...state.runners, action.payload]
    }
  }
  return state;
}

export default rootReducer;