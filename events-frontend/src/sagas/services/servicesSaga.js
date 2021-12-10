import { call, put } from "@redux-saga/core/effects";
import { getServicesSuccess, getServicesFail } from "../../redux/action/Services";
import { getServicesApi } from "../../api/services";

export function* getServicesSaga() {
  try {
    const services = yield call(getServicesApi);
    yield put(getServicesSuccess(services));
  } catch (error) {
    yield put(getServicesFail("Could not retrieve all services"));
  }
}