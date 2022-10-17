import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import vehicleSlice from "../slices/vehicleSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    vehicle: vehicleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
