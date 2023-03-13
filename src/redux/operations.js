import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fda3861626c165a09c779c.mockapi.io/api',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContct = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
