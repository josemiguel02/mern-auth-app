import axios from 'axios';
import { CONSTANTS } from '../constants/constants';

export const authApi = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});
