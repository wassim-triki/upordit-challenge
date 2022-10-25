import config from '../../config';
import uproditClient from '../uproditClient';

const getUserImage = async (userId) => {
  const endpoint = `${config.image}/${userId}`;
  const resp = await uproditClient.get(endpoint);
  return resp.data;
};

export default getUserImage;
