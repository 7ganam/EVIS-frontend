import axios from "axios";

const getSection4Products = async () => {
  const response = await axios.get("/api/grocery-section4/products");
  return response.data;
};

const getSection5Products = async () => {
  const response = await axios.get("/api/grocery-section5/products");
  return response.data;
};

const getSection7Products = async () => {
  const response = await axios.get("/api/grocery-section7/products");
  return response.data;
};

const getSection8Products = async () => {
  const response = await axios.get("/api/grocery-section8/products");
  return response.data;
};

const getSection9Testimonials = async () => {
  const response = await axios.get("/api/grocery-section9/testimonial-list");
  return response.data;
};

const getGroceryNavigation = async () => {
  const response = await axios.get("/api/grocery-navigation");
  return response.data;
};

const getSection2Services = async () => {
  const response = await axios.get("/api/grocery-section2/services");
  return response.data;
};

const getSection3Categories = async () => {
  const response = await axios.get("/api/grocery-section3/shop-by-category");
  return response.data;
};

const getSection6CardList = async () => {
  const response = await axios.get("/api/grocery-section6/card-list");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getSection4Products,
  getSection5Products,
  getSection7Products,
  getSection8Products,
  getSection6CardList,
  getSection2Services,
  getGroceryNavigation,
  getSection3Categories,
  getSection9Testimonials,
};
