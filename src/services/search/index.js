import config from '../../config';
import uproditClient from '../uproditClient';
const searchQuerySettings = {
  startIndex: 0,
  maxResults: 20,
};

const buildSearchEndpoint = (querySettings) => {
  let endpoint = config.search;
  Object.entries(querySettings).forEach(
    ([key, value]) =>
      (endpoint +=
        key === 'startIndex' || (key && value) ? `&${key}=${value}` : '')
  );
  return endpoint;
};
const search = async (querySettings = searchQuerySettings) => {
  const searchEndpoint = buildSearchEndpoint(querySettings);
  const response = await uproditClient.get(searchEndpoint);
  return response.data;
};

export default search;