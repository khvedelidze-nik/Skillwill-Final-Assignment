import axios from "axios";

// const API_URL = import.meta.env.REACT_APP_API_URL;
// const API_KEY = import.meta.env.REACT_APP_API_KEY;
const API_URL = "https://api.unsplash.com";
const API_KEY = "YJHWiVIJfdLY2kVCe3KB8Zof92UxthXspqW0V8tUZro";

const $axios = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export default $axios;
