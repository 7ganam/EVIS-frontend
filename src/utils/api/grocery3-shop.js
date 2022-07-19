import axios from "axios";

const getTopSailedProducts = async () => {
  const response = await axios.get("/api/grocery3/top-sailed-products");
  return response.data;
};

const getGrocery3Products = async () => {
  const response = await axios.get("/api/grocery3/all-products");
  return response.data;
};

const getGrocery3offerProducts = async () => {
  const response = await axios.get("/api/grocery3/offer-products");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getGrocery3Products,
  getTopSailedProducts,
  getGrocery3offerProducts,
};
