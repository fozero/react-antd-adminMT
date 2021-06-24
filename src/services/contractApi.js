import apiClient from './apiClient'

export const getContractList = () => apiClient.get(`/api/v4/search/top_search`)
