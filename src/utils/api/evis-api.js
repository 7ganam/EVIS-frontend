import axios from "axios";

let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL2;
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
  const response = await axios.get(`${baseUrl}/api/home-page?populate=deep`);

  return response.data;
};

const getYearSpeakers = async (year) => {
  let strFilter;
  if (!year) {
    strFilter =
      "/api/speakers?filters[year][$eq]=year%202023&filters[year][$eq]=both&populate=deep";
  }
  if (year === 22) {
    strFilter =
      "/api/speakers?filters[year][$eq]=year%202022&filters[year][$eq]=both&populate=deep";
  }
  if (year === 23) {
    strFilter =
      "/api/speakers?filters[year][$eq]=year%202023&filters[year][$eq]=both&populate=deep";
  }
  if (year === "both") {
    strFilter = "/api/speakers?filters[year][$eq]=both&populate=deep";
  }
  const response = await axios.get(`${baseUrl}${strFilter}`);

  return response.data;
};

const getAboutPage = async () => {
  const response = await axios.get(`${baseUrl}/api/about-page?populate=deep`);
  return response.data;
};

const getSponsors = async (year) => {
  let strFilter;
  if (!year) {
    strFilter = "/api/sponsors?populate=deep";
  }
  if (year === 22) {
    strFilter =
      "/api/sponsors?filters[year][$eq]=year%202022&filters[year][$eq]=both&populate=deep";
  }
  if (year === 23) {
    strFilter =
      "/api/sponsors?filters[year][$eq]=year%202023&filters[year][$eq]=both&populate=deep";
  }
  if (year === "both") {
    strFilter = "/api/sponsors?filters[year][$eq]=both&populate=deep";
  }
  const response = await axios.get(`${baseUrl}${strFilter}`);

  return response.data;

  // const response = await axios.get(`${baseUrl}/api/sponsors?populate=deep`);
  // return response.data;
};

const getContactUs = async () => {
  const response = await axios.get(`${baseUrl}/api/contact-page?populate=deep`);
  return response.data;
};

const getInnovationTeam = async () => {
  const response = await axios.get(`${baseUrl}/api/team-members?populate=deep`);
  return response.data;
};
const getWhyExhibit = async () => {
  const response = await axios.get(
    `${baseUrl}/api/why-exhibit-page?populate=deep`
  );
  return response.data;
};

const getAgenda = async () => {
  const response = await axios.get(`${baseUrl}/api/agenda-page?populate=deep`);
  return response.data;
};

const getOpenTech = async () => {
  const response = await axios.get(
    `${baseUrl}/api/open-tech-session-page?populate=deep`
  );
  return response.data;
};

const getTestimonials = async () => {
  const response = await axios.get(`${baseUrl}/api/testimonials?populate=deep`);
  return response.data;
};

const getEvisInNews = async () => {
  const response = await axios.get(`${baseUrl}/api/news-videos?populate=deep`);
  return response.data;
};

const getNewsArticle = async () => {
  const response = await axios.get(
    `${baseUrl}/api/news-articles?populate=deep`
  );
  return response.data;
};

const api = {
  getSpeakers,
  getSpeaker,
  getHomePage,
  getYearSpeakers,
  getAboutPage,
  getSponsors,
  getTestimonials,
  getEvisInNews,
  getNewsArticle,
  getAgenda,
  getOpenTech,
  getContactUs,
  getInnovationTeam,
  getWhyExhibit,
};

export default api;
