import axios from 'axios'
import { Fact } from 'json-rules-engine'

export const getVendorDetail = new Fact('vendorDetail', (params) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(response => response.data)
})
