import axios from "axios";
export const getAllNotification = async (url: string) => {
  const response = await axios.get(`http://localhost:8000/${url}`);
  return response;
};

export const getNotification = async (url: string) => {
  const response = await axios.get(`http://localhost:8000/${url}`);
  return response;
};
