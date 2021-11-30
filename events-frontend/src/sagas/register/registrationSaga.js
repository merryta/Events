import { put, call } from 'redux-saga/effects';
import { registerUserApi } from '../../api/user';
import { userRegisterSuccess, userRegisterFail } from '../../redux/action/Register';

export function* registerSaga(action) {
  try {
    const response = yield call(registerUserApi, action.user);
    console.log(response);
    yield put(userRegisterSuccess(response));
  } catch (error) {
    yield put(userRegisterFail('Failed to register user'));
  }
}