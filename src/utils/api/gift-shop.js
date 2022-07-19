import axios from "axios";

const getGiftShopNavigation = async () => {
  const response = await axios.get("/api/gift-shop-navigation");
  return response.data;
};

const getPopularProducts = async () => {
  const response = await axios.get("/api/gift-shop/popular-products");
  return response.data;
};

const getTopSailedProducts = async () => {
  const response = await axios.get("/api/gift-shop/top-sailed-products");
  return response.data;
};

const getGiftShopProducts = async () => {
  const response = await axios.get("/api/gift-shop/all-products");
  return response.data;
};

const getGiftShopServiceList = async () => {
  const response = await axios.get("/api/gift-shop/service-list");
  return response.data;
};

const getGiftShopTopCategories = async () => {
  const response = await axios.get("/api/gift-shop/top-categories");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getPopularProducts,
  getGiftShopProducts,
  getTopSailedProducts,
  getGiftShopNavigation,
  getGiftShopServiceList,
  getGiftShopTopCategories,
};
