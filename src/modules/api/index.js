import axios from 'axios';
import Storage from '@modules/services/storage';

const baseURL = 'http://192.168.18.39:8090';

export default class Api {
  constructor() {
    this.baseURL = baseURL;
    this.initHeader();
  }

  async initHeader() {
    const user = await Storage.getItem('user');
    if (user) {
      axios.defaults.headers.post.Authorization = `Bearer ${user.token}`;
    }
  }

  async get(path, options) {
    return axios.get(this.baseURL + path, options);
  }

  async put(path, data, options) {
    return axios.put(this.baseURL + path, data, options);
  }

  async post(path, data, options) {
    console.log(this.baseURL + path);
    return axios.post(this.baseURL + path, data, options);
  }

  async delete(path, options) {
    return axios.delete(this.baseURL + path, options);
  }

  async patch(path, data, options) {
    return axios.patch(this.baseURL + path, data, options);
  }
}
