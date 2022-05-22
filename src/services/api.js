import axios from "axios";

const api = axios.create({
  baseURL: "https://9a30-2804-56c-d70d-2c00-61f4-f0f7-f37a-e44c.sa.ngrok.io"
});

export default api;