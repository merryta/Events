import { takeLatest } from "@redux-saga/core/effects";
import { GET_SUBCATEGORIES } from "../../redux/types/Types";
import { getSubCategoriesSaga } from "./subcategoriesSaga";

export default function* watchSubCategoriesSaga() {
  yield takeLatest(GET_SUBCATEGORIES, getSubCategoriesSaga);
}