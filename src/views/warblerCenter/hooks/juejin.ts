import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BASE_URL = '/juejin_api';
class GiteeRequest {
  instance!: AxiosInstance;

  // eslint-disable-next-line no-use-before-define
  static service: GiteeRequest = new GiteeRequest();

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 500000,
    });
    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        Promise.reject(error);
      },
    );
  }

  get(url: string, params?: Record<string, any>, headers?: Record<string, any>) {
    return this.instance({
      url,
      params: {
        ...params,
      },
      method: 'get',
      headers,
    });
  }

  post(url: string, data?: Record<string, any>, headers?: Record<string, any>) {
    return this.instance({
      url,
      params: {},
      data,
      method: 'post',
      headers,
    });
  }
}

export default GiteeRequest.service;
