import axios from "axios";
//http://localhost:1337/api/orders
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN,
  },
});
