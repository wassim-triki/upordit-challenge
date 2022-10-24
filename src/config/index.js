export default {
  baseURL: 'https://api.uprodit.com',
  search: `/v1/search/all?usecase=${process.env.REACT_APP_USECASE}`,
  image: '/v2/profile/picture/f',
};
