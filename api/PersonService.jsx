import axios from 'axios';


export const PersonService = {
  getAllPersons: () => axios.get(`${import.meta.env.VITE_import.meta.env.VITE_API_URL}/personas`),
  getPersonById: (personId) => axios.get(`${import.meta.env.VITE_import.meta.env.VITE_API_URL}/personas/${personId}`),
  createPerson: (personData) => axios.post(`${import.meta.env.VITE_API_URL}/personas`, personData),
  updatePerson: (personId, personData) => axios.put(`${import.meta.env.VITE_API_URL}/personas/${personId}`, personData),
  deletePerson: (personId) => axios.delete(`${import.meta.env.VITE_API_URL}/personas/${personId}`)
};