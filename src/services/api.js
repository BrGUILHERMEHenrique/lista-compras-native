import axios from "axios";

const api = axios.create({
  baseURL: "https://7cd8-2804-56c-c206-d500-4585-5b91-4916-61dc.sa.ngrok.io"
});

export default api;