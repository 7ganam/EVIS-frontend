import axios from "axios";

// let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
let baseUrl = "https://evis-backend.onrender.com";
const getSpeakers = async () => {
  const response = await axios.get(`${baseUrl}/api/speakers?populate=*`);
  return response.data;
};

const getSpeaker = async (slug) => {
  const response = await axios.get(
    `${baseUrl}/api/speakers?filters[slug][$eq]=${slug}&populate=*`
  );
  return response.data;
};

const api = {
  getSpeakers,
  getSpeaker,
};

export default api;
