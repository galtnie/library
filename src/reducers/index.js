import { combineReducers } from "redux";
import handleStepper from "./handleStepper";
import handleNewData from "./handleNewData";
import handleInformationFields from "./handleInformationFields";

export default combineReducers({
  stepper: handleStepper,
  newData: handleNewData,
  informationFields: handleInformationFields,
});
