import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default instance
