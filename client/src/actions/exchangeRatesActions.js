import axios from 'axios';

export const getRates = async (country) => {
  return await {
    type: 'GET_RATES',
    payload: axios.get(`https://api.exchangeratesapi.io/latest?base=${country}`)
  }
}
``