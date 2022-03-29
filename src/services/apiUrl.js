const api =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'https://linkr-api.herokuapp.com';

export { api };
