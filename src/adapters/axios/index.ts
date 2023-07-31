import { IHTTP, IHTTPRequest, IHTTPRequestError } from "@/types/httpRequest";
import axios, { AxiosRequestConfig } from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

const errorMessages: IHTTPRequestError = {
  default: "something went wrong",
  noResponse: "no response from server",
  network: "network error",
};
function errorHandler(error: any): void {
  if (error.response) {
    throw `${error.response.data.message}` || errorMessages.default;
  } else if (error.request) {
    throw error.request.response || errorMessages.noResponse;
  } else {
    throw error.message || errorMessages.network;
  }
}
const genericRequest = axios.create({
  baseURL: API_ENDPOINT,
});

async function fetch({
  url,
  method,
  headers,
  data,
  params,
}: IHTTPRequest): Promise<any> {
  try {
    const response = await genericRequest({
      url,
      headers,
      method,
      data,
      params,
    } as AxiosRequestConfig);
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
}

export const HttpAdapter: IHTTP = {
  fetch,
};
