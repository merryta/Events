import { call, put } from "redux-saga/effects"
import { getAllSubCategoriesSuccess, getAllSubCategoriesFail } from "../../redux/action/SubCategories"
import { getSubCategoriesApi } from "../../api/subcategories"

export function* getSubCategoriesSaga() {
  try {
    const subCategories = yield call(getSubCategoriesApi);
    yield put(getAllSubCategoriesSuccess(subCategories))
  } catch (error) {
    yield put(getAllSubCategoriesFail('Failed to service sub-categories'));
  }
}