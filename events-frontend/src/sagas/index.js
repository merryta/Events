import { fork } from 'redux-saga/effects';
import watchUserRegistration from './register/registrationWatcher';

export default function* rootSaga() {
  yield fork(watchUserRegistration);
}