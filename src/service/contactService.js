import { default as axios } from "axios";

const { REACT_APP_URL } = process.env;

export default {
  get: async (id = undefined) => {
    if (id) return await axios.get(`${REACT_APP_URL}/contact/${id}`);

    return await axios.get(`${REACT_APP_URL}/contact`);
  },
  post: async (dataContact = {}) => {
    return await axios.post(`${REACT_APP_URL}/contact`, dataContact);
  },
  put: async ({ id, firstName, lastName, age, photo }) => {
    const dataSend = {
      firstName,
      lastName,
      age,
      photo,
    };
    console.log(dataSend);
    return await axios.put(`${REACT_APP_URL}/contact/${id}`, dataSend);
  },
  delete: async (id) => {
    return await axios.delete(`${REACT_APP_URL}/contact/${id}`);
  },
};
