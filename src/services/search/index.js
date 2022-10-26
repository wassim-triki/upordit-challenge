import config from '../../config';
import { getImage } from '../../features/search/searchSlice';
import uproditClient from '../uproditClient';
export const searchQuerySettings = {
  startIndex: 0,
  maxResults: 3,
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
const search = async (querySettings = searchQuerySettings, thunkAPI) => {
  try {
    const searchEndpoint = buildSearchEndpoint(querySettings);
    console.log(searchEndpoint);
    const response = await uproditClient.get(searchEndpoint);

    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue('Something went wrong!');
  }
};

export default search;
