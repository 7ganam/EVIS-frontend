import axios from "axios";

const getFlashDeals = async () => {
  const response = await axios.get("/api/fashion-store/flash-deals");
  return response.data;
};

const getNewArrivals = async () => {
  const response = await axios.get("/api/fashion-store/new-arrivals");
  return response.data;
};

const getTrendingItems = async () => {
  const response = await axios.get("/api/fashion-store/trending-items");
  return response.data;
};

const getServiceList = async () => {
  const response = await axios.get("/api/fashion-store/service-list");
  return response.data;
};

const getDealOfTheWeekList = async () => {
  const response = await axios.get("/api/fashion-store/deal-of-the-week");
  return response.data;
};

const getHotDealList = async () => {
  const response = await axios.get("/api/fashion-store/hot-deals");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getFlashDeals,
  getNewArrivals,
  getServiceList,
  getHotDealList,
  getTrendingItems,
  getDealOfTheWeekList,
};
