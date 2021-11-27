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
      const token = `Bearer ${user.token}`;
      axios.defaults.headers.post.Authorization = token;
      axios.defaults.headers.get.Authorization = token;
    }
  }

  async get(path, options) {
    await this.initHeader();
    return axios.get(this.baseURL + path, options);
  }

  async post(path, data, options) {
    await this.initHeader();
    return axios.post(this.baseURL + path, data, options);
  }
}
