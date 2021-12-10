import axios from "axios";

export const getServicesApi = async () => {
  const GET_SERVICES_API_ENDPOINT = "http://localhost:5000/getAllServices";
  const { data } = await axios.get(GET_SERVICES_API_ENDPOINT);
  return data;
}