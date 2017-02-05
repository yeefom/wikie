import axios from 'axios';
import {getTimeStamp} from '../utils/formatUtils';

export function callFeaturedService() {
  const {year, month, day} = getTimeStamp();

  return axios.get(`https://en.wikipedia.org/api/rest_v1/feed/featured/${year}/${month}/${day}`);
}
