import axios from "axios";

const api = axios.create({
  baseURL: "https://0a3c-2804-56c-c22c-3000-2492-9453-e677-d925.sa.ngrok.io"
});

export default api;