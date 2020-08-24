import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);

  return request
    .then(response => response.data);
}

const create = personObject => {
  const request = axios.post(baseUrl, personObject);

  return request
    .then(response => response.data);
}

const remove = id => axios.delete(`${baseUrl}/${id}`);

const edit = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person);

  return request
    .then(response => response.data);
}

export default {getAll, create, remove, edit};
