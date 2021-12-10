import { takeLatest } from "@redux-saga/core/effects";
import { LOGIN } from "../../redux/types/Types";
import { loginSaga } from "./loginSaga";

export default function* watchUserLogin() {
  yield takeLatest(LOGIN, loginSaga);
}
