import axios from "axios";

const getFeaturedCategories = async () => {
  const response = await axios.get("/api/gadget-store/featured-categories");
  return response.data;
};

const getTwoBanner = async () => {
  const response = await axios.get("/api/gadget-store/two-banners");
  return response.data;
};

const getBlogLists = async () => {
  const response = await axios.get("/api/gadget-store/blog-lists");
  return response.data;
};

const getMainCarousel = async () => {
  const response = await axios.get("/api/gadget-store/main-carousel");
  return response.data;
};

const getTopPicksList = async () => {
  const response = await axios.get("/api/gadget-store/top-picks-list");
  return response.data;
};

const getMostViewedList = async () => {
  const response = await axios.get("/api/gadget-store/most-viewed");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getTwoBanner,
  getBlogLists,
  getMainCarousel,
  getTopPicksList,
  getMostViewedList,
  getFeaturedCategories,
};
