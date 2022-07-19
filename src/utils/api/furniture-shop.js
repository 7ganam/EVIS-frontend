import axios from "axios";

const getTopNewProducts = async () => {
  const response = await axios.get("/api/furniture-shop/top-new-products");
  return response.data;
};

const getTopSellingProducts = async () => {
  const response = await axios.get("/api/furniture-shop/top-selling-products");
  return response.data;
};

const getFurnitureProducts = async () => {
  const response = await axios.get("/api/furniture-shop/all-products");
  return response.data;
};

const getFurnitureShopNavList = async () => {
  const response = await axios.get("/api/furniture-shop/navigation");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getTopNewProducts,
  getFurnitureProducts,
  getTopSellingProducts,
  getFurnitureShopNavList,
};
