import { takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "../../redux/types/Types";
import { registerSaga } from "./registrationSaga";

export default function* watchUserRegistration() {
  yield takeLatest(REGISTER_USER, registerSaga);
}