import { GET_SERVICES, GET_SERVICES_SUCCESS, GET_SERVICES_FAIL, GET_SERVICE_BY_SUBCATEGORY, GET_SERVICE_BY_SUBCATEGORY_SUCCESS, GET_SERVICE_BY_SUBCATEGORY_FAIL} from "../types/Types";

// get all services
export const getServices = (serviceId) => ({
  type: GET_SERVICES,
  serviceId
});

export const getServicesSuccess = (services) => ({
  type: GET_SERVICES_SUCCESS,
  services
});

export const getServicesFail = (error) => ({
  type: GET_SERVICES_FAIL,
  error
});

// get services by subcategories
export const getServicesBySubcategory = (subCategoryId) => {
  return ({
    type: GET_SERVICE_BY_SUBCATEGORY,
    subCategoryId
  })
};


export const getServicesBySubcategorySuccess = (services) => {
  return ({
    type: GET_SERVICE_BY_SUBCATEGORY_SUCCESS,
    services
  })
};

export const getServicesBySubcategoryFail = (error) => {
  return ({
    type: GET_SERVICE_BY_SUBCATEGORY_FAIL,
    error
  })
}

