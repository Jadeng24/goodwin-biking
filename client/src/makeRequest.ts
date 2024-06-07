import axios from "axios";

// Uses the api url provided in .env
// for example: http://localhost:1337/api/orders or https://www.goodwinbiking.com/api
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN,
  },
});
