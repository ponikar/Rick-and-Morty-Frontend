import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchCards = () => API.get('/cards');
export const createCard = (newCard) => API.post('/cards', newCard);
export const deleteCard = (id) => API.delete(`/cards/${id}`);

