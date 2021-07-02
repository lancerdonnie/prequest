import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface CustomAxiosRequest extends AxiosRequestConfig {
  customData?: {
    time?: number;
  };
}

export interface CustomAxiosResponse extends AxiosResponse {
  customData?: {
    time?: number;
  };
}
