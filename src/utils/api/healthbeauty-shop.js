import axios from "axios";

const getHealthBeautyNavigation = async () => {
  const response = await axios.get("/api/healthbeauty/navigation");
  return response.data;
};

const getTopNewProducts = async () => {
  const response = await axios.get("/api/healthbeauty/top-new-products");
  return response.data;
};

const getHealthBeautyProducts = async () => {
  const response = await axios.get("/api/healthbeauty/all-products");
  return response.data;
};

const getHealthBeautyServices = async () => {
  const response = await axios.get("/api/healthbeauty/services");
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getTopNewProducts,
  getHealthBeautyProducts,
  getHealthBeautyServices,
  getHealthBeautyNavigation,
};
