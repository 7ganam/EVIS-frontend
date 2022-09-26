import axios from "axios";
// let baseUrl = 'https://evis-backend-2.onrender.com';
// let baseUrl = "http://localhost:1337";
let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
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

const getAboutPage = async () => {
  const response = await axios.get(`${baseUrl}/api/about-page?populate=deep`);
  return response.data;
};

const getSponsor = async () => {
  const response = await axios.get(`${baseUrl}/api/sponsors?populate=deep`);
  return response.data;
};

const getPartner = async () => {
  const response = await axios.get(`${baseUrl}/api/partners?populate=deep`);
  return response.data;
};

const api = {
  getSpeakers,
  getSpeaker,
  getHomePage,
  getAboutPage,
  getSponsor,
  getPartner
};

export default api;
