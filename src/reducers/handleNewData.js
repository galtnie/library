import { INPUT_NEW_DATA, RESET_NEW_DATA } from "../actions/types";

const initialState = {
  genre: null,
  subgenre: null,
  isDescriptionRequired: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_NEW_DATA:
      return { ...state, ...action.payload };
    case RESET_NEW_DATA:
      return initialState;
    default:
      return state;
  }
};
