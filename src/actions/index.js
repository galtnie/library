import { STEP_FORTH, INPUT_NEW_DATA, RESET_NEW_DATA } from "./types";

export const stepForth = state => {
  return {
    type: STEP_FORTH,
    payload: state,
  };
};

export const inputNewData = data => {
  return {
    type: INPUT_NEW_DATA,
    payload: data,
  };
};

export const resetNewData = () => {
  return {
    type: RESET_NEW_DATA,
  };
};
