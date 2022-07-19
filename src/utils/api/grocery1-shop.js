import axios from "axios";

const getGrocery1Navigation = async () => {
  const response = await axios.get("/api/grocery1/navigation");
  return response.data;
};

const getPopularProducts = async () => {
  const response = await axios.get("/api/grocery1/popular-products");
  return response.data;
};

const getTrendingProducts = async () => {
  const response = await axios.get("/api/grocery1/trending-products");
  return response.data;
};

const getGrocery1Products = async () => {
  const response = await axios.get("/api/grocery1/all-products");
  return response.data;
};

const getGrocery1Services = async () => {
  const response = await axios.get("/api/grocery1/services");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getPopularProducts,
  getTrendingProducts,
  getGrocery1Products,
  getGrocery1Services,
  getGrocery1Navigation,
};
