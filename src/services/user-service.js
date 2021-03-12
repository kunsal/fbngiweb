import Axios from 'axios';
import BaseService from './base-service';
import {
  setUser,
  clearUser,
  setUserToken,
  clearUserToken
} from '../redux/actions';
import store from '../redux/store';
class UserService extends BaseService {
  constructor() {
    super();
  }

  async login(email, password) {
    store.dispatch(clearUserToken());
    try {
      const response = await Axios.post(`${this.endpoint}/user/login`, { email, password });
      console.log(response);
      if (response.status === 200) {
        const token = response.data.token;
        store.dispatch(setUserToken(token));
        store.dispatch(setUser(response.data));
        return true;
      } else {
        throw new Error('An error occurred.');
      }
    } catch (error) {
      return error.response.data;
    }
  }

  isLoggedIn = async () => {
    if (this.token()) {
      return true
    } else {
      return false;
    }
  }

  logout = () => {
    store.dispatch(clearUserToken());
    store.dispatch(clearUser());
  }

}

export default new UserService;