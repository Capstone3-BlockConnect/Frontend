import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://port-0-block-connect-euegqv2bln4657t7.sel5.cloudtype.app",
  timeout: 3000,
});
