import axios from "axios";

let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const getSpeakers = async () => {
  console.log("baseUrl :>> ", baseUrl);
  const response = await axios.get(`${baseUrl}/api/speakers?populate=*`);
  console.log("response :>> ", response);
  return response.data;
};

const getSpeaker = async (slug) => {
  const response = await axios.get("/api/grocery3/all-products");
  return response.data;
};

const api = {
  getSpeakers,
  getSpeaker,
};

export default api;
