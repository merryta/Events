import { fork } from "redux-saga/effects";
import watchUserRegistration from "./register/registrationWatcher";
import watchUserLogin from "./login/loginWatcher";
import watchSubCategoriesSaga from "./subcategories/subcategoriesWatcher";
import watchServicesSaga from "./services/servicesWatcher";

export default function* rootSaga() {
  yield fork(watchUserRegistration);
  yield fork(watchUserLogin);
  yield fork(watchSubCategoriesSaga);
  yield fork(watchServicesSaga);
}
