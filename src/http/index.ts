import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const $api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
    Accept_Version: "v1",
  },
});

export default $api;
