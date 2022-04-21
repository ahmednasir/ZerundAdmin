/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-catch */
import axios from "axios";

class ApiService {
  async postData(url, data, headers) {
    try {
      return new Promise((resolve, reject) => {
        axios
          .post(url, data, { headers })
          .then((resp) => {
            resolve(resp.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (error) {
      throw error;
    }
  }

  async getData(url, headers) {
    try {
      return new Promise((resolve, reject) => {
        axios
          .get(url, { headers })
          .then((resp) => {
            resolve(resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (error) {
      throw error;
    }
  }

  async putData(url, data, headers) {
    try {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url,
          headers,
          data,
        })
          .then((resp) => {
            resolve(resp.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (error) {
      throw error;
    }
  }

  async patchData(url, data, headers) {
    try {
      return new Promise((resolve, reject) => {
        axios
          .patch(url, data, { headers })
          .then((resp) => {
            resolve(resp.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;
