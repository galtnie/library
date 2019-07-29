import {
  CHANGE_STEPPER,
  INPUT_NEW_DATA,
  RESET_NEW_DATA,
  RESET_STEPPER,
} from "./types";

export const stepForth = state => {
  return {
    type: CHANGE_STEPPER,
    payload: state,
  };
};

export const resetStepper = () => {
  return {
    type: RESET_STEPPER,
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
