import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse,} from "axios";
import * as AxiosLogger from "axios-logger"
import {Singleton,} from "typescript-ioc";

@Singleton
export class ApiClient {

  private readonly axiosClient: AxiosInstance

  constructor() {
    this.axiosClient = axios.create()
    this.setLogger()
  }

  private setLogger() {
    this.axiosClient.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)
    this.axiosClient.interceptors.response.use((
      response) => {return AxiosLogger.responseLogger(response, {data: false,})}
      , AxiosLogger.errorLogger)
  }

  public get<T = any, R = AxiosResponse<T>, D = any,>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosClient.get<T, R, D>(url, config)
  }

}