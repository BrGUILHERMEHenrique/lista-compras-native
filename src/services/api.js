import axios from "axios";

const api = axios.create({
  baseURL: "https://fc4a-2804-56c-d7a5-1a00-ad39-b8f5-ba6d-f78.sa.ngrok.io"
});

export default api;