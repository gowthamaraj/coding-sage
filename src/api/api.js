import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://arcane-beyond-25770.herokuapp.com'
  });

export default instance