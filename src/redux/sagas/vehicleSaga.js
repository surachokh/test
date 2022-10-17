import { takeEvery, put, call } from "redux-saga/effects";
import { getVehicles, getVehicle } from "../../apis/vehicleApi";
import { STORE_VEHICLES, STORE_VEHICLE } from "../slices/vehicleSlice";

export function* watchFetchVehicles() {
  yield takeEvery("REQUEST_VEHICLE", fetchVehicles);
}
export function* watchFetchSpecificVehicle() {
  yield takeEvery("REQUEST_SPECIFIC_VEHICLE", fetchSpecificVehicle);
}

function* fetchVehicles() {
  const vehicles = yield call(getVehicles);
  yield put(STORE_VEHICLES(vehicles));
}

function* fetchSpecificVehicle(action) {
  const vehicle = yield call(getVehicle, action.param);
  yield put(STORE_VEHICLE(vehicle));
}
