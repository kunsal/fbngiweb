import BaseService from "./base-service";
import axios from "axios";
import userService from "./user-service";

class InvestmentService extends BaseService {
  async getById(id) {
    try {
      const response = await axios.get(`${this.endpoint}/investments/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.token()}`
        }
      });
      
      if (response.status === 200) {
        return response.data;
      } 
    } catch (error) {
      if (error.response.status == 401) {
        userService.logout();
      }
      console.log(error.response)
    }
  }

  async mine() {
    try {
      const response = await axios.get(`${this.endpoint}/investments/me`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.token()}`
        }
      });
      
      if (response.status === 200) {
        return response.data;
      } 
    } catch (error) {
      if (error.response.status == 401) {
        userService.logout();
      }
      console.log(error.response)
    }
  }

}

export default new InvestmentService;