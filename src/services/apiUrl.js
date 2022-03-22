const api = process.env.NODE_ENV === 'production' ? 'https://linkr-api.herokuapp.com' : 'http://localhost:5000';

export {
  api
};
