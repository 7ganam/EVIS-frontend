import axios from "axios";

// let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
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

const getHomePage = async () => {
  console.log(
    "`${baseUrl}/api/home-page?populate=deep`",
    `${baseUrl}/api/home-page?populate=deep`
  );
  const response = await axios.get(`${baseUrl}/api/home-page?populate=deep`);

  return response.data;
};

const api = {
  getSpeakers,
  getSpeaker,
  getHomePage,
};

export default api;
