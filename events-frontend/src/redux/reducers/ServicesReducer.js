import { GET_SERVICES, GET_SERVICES_SUCCESS, GET_SERVICES_FAIL } from "../types/Types";

export const getServicesReducer = (state = {services: []}, action) => {
  switch(action.type) {
    case GET_SERVICES:
      return {
        ...state,
        loading: true,
      }
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        services: [action.services]
      }
    case GET_SERVICES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        services: []
      }
    default:
      return state;
  }
}