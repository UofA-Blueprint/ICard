import { API_ROUTE, API_KEY } from "@env";

const options = {
  headers: {
    "x-api-key": API_KEY,
  },
};
const url = API_ROUTE + "api/vendors";
console.log(API_KEY)
export { options, url };
