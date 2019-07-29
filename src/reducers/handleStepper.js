import { CHANGE_STEPPER } from "../actions/types";

const initialState = [
  { label: "1", name: "Genre", status: "active" },
  { label: "2", name: "Subgenre", status: "disabled" },
  { label: "...", name: null, status: "disabled" },
];
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STEPPER:
      return action.payload;
    default:
      return state;
  }
};
