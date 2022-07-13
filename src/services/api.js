import axios from "axios";

const api = axios.create({
  baseURL: "https://829d-2804-56c-d7a3-ec00-d0a0-c6f0-6e5d-66fc.sa.ngrok.io"
});

export default api;