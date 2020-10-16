import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class APIHelper {
  public static request<T>(
    customAxios: AxiosInstance,
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ) {
    return customAxios.request<T>({
      method,
      url,
      data,
    });
  }
}
