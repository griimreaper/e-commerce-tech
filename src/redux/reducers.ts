import { ActionTypes } from './actions';

// Define el estado inicial
const initialState = {
  shoesToRender: [],
  darkMode: false,
};

// Define el reducer
const rootReducer = (state = initialState, action?: any) => {
  switch (action.type) {
    case ActionTypes.LOAD_SHOES:
      return {
        ...state,
        shoesToRender: action.payload,
      };
    case ActionTypes.SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;