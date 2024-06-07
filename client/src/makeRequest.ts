import axios from "axios";
import { BASE_URL } from "./environment";
// Uses the api url provided in .env
// for example: http://localhost:1337/api/orders or https://www.goodwinbiking.com/api
export const makeRequest = axios.create({
  baseURL: BASE_URL, // for Local testing, use API_URL
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN,
  },
});
