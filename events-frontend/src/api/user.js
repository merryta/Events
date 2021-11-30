import axios from "axios";

export const registerUserApi = async (user) => {
  const REGISTER_API_ENDPOINT = "http://localhost:5000/createAccount";
  const {data}  = await axios.post(REGISTER_API_ENDPOINT, user);
  console.log("jfjdkjd", data);
  return data;
};
