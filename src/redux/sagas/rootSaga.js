import { all } from "redux-saga/effects";

import { watchFetchSpecificVehicle, watchFetchVehicles } from "./vehicleSaga";

export default function* rootSaga() {
  yield all([watchFetchVehicles(), watchFetchSpecificVehicle()]);
}
