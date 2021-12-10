import { takeLatest } from "@redux-saga/core/effects";
import { GET_SERVICES } from "../../redux/types/Types";
import { getServicesSaga } from "./servicesSaga";

export default function* watchServicesSaga() {
  yield takeLatest(GET_SERVICES, getServicesSaga);
}