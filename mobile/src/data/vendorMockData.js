const options = {
  headers: {
      'x-api-key': process.env.API_KEY
  }
};
const url = process.env.API_ROUTE + "api/vendors"; 

export {options, url};