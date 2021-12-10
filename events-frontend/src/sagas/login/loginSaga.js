import { put, call } from 'redux-saga/effects';
import { loginUserApi } from '../../api/user';
import { userLoginSuccess, userLoginFail } from '../../redux/action/Login';

export function* loginSaga(action) {
  try {
    const user = yield call(loginUserApi, action.user);
    yield put(userLoginSuccess(user));
  } catch (error) {
    yield put(userLoginFail("Login failed try again!!..."));
  }
}