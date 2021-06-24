
import axios from 'axios'


export const getContractList = ()=>{
  const url = '/proxy-api/api/v4/search/top_search'
  return axios.get(url)
}