import { HOME_PAGES } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
