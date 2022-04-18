import axios from "axios";

const api = axios.create({
  baseURL: "https://588d-2804-56c-d7ce-200-756b-f50c-b72-f9d2.sa.ngrok.io"
});

export default api;