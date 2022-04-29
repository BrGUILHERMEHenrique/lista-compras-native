import axios from "axios";

const api = axios.create({
  baseURL: "https://0ccc-2804-56c-c295-bf00-dd12-d680-8013-15dd.sa.ngrok.io"
});

export default api;