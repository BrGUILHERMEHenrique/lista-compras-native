import axios from "axios";

const api = axios.create({
  baseURL: "https://e96d-2804-56c-d7a0-8b00-e854-1a5d-44e4-3123.sa.ngrok.io"
});

export default api;