import axios from "axios";

const api = axios.create({
  baseURL: "https://1486-2804-56c-d7c7-a500-a539-58f4-d3c-7269.sa.ngrok.io"
});

export default api;