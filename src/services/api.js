import axios from "axios";

const api = axios.create({
  baseURL: "https://b06b-177-55-205-53.sa.ngrok.io/"
});

export default api;