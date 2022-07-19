import axios from "axios";

const getTopRatedProduct = async () => {
  const response = await axios.get("/api/super-store/toprated-product");
  return response.data;
};

const getTopRatedBrand = async () => {
  const response = await axios.get("/api/super-store/toprated-brand");
  return response.data;
};

const getNewArrivalList = async () => {
  const response = await axios.get("/api/super-store/new-arrivals");
  return response.data;
};

const getCarBrands = async () => {
  const response = await axios.get("/api/super-store/car-brand-list");
  return response.data;
};

const getCarList = async () => {
  const response = await axios.get("/api/super-store/car-list");
  return response.data;
};

const getMobileBrands = async () => {
  const response = await axios.get("/api/super-store/mobile-brand-list");
  return response.data;
};

const getMobileShops = async () => {
  const response = await axios.get("/api/super-store/mobile-shop-list");
  return response.data;
};

const getMobileList = async () => {
  const response = await axios.get("/api/super-store/mobile-list");
  return response.data;
};

const getOpticsBrands = async () => {
  const response = await axios.get("/api/super-store/optics/watch-brands");
  return response.data;
};

const getOpticsShops = async () => {
  const response = await axios.get("/api/super-store/optics/watch-shops");
  return response.data;
};

const getOpticsList = async () => {
  const response = await axios.get("/api/super-store/optics-list");
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get("/api/super-store/bottom-categories");
  return response.data;
};

const getMoreItems = async () => {
  const response = await axios.get("/api/super-store/get-more-items");
  return response.data;
};

const getServiceList = async () => {
  const response = await axios.get("/api/super-store/get-service-list");
  return response.data;
};

const getMainCarousel = async () => {
  const response = await axios.get("/api/super-store/main-carousel");
  return response.data;
};

const getFlashDeals = async () => {
  const response = await axios.get("/api/super-store/flash-deals");
  return response.data;
};

const getTopCategories = async () => {
  const response = await axios.get("/api/super-store/top-categories");
  return response.data;
};

const getBigDiscountList = async () => {
  const response = await axios.get("/api/super-store/big-discounts");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getMainCarousel,
  getFlashDeals,
  getTopCategories,
  getBigDiscountList,
  getTopRatedProduct,
  getTopRatedBrand,
  getNewArrivalList,
  getCarBrands,
  getCarList,
  getMobileBrands,
  getMobileShops,
  getMobileList,
  getOpticsBrands,
  getOpticsShops,
  getOpticsList,
  getCategories,
  getMoreItems,
  getServiceList,
};
