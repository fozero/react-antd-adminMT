import { createActions } from 'redux-actions';

export const GET_CONTRACT_LIST_REQUEST = 'GET_CONTRACT_LIST_REQUEST'
export const GET_CONTRACT_LIST_SUCCEEDED = 'GET_CONTRACT_LIST_SUCCEEDED'

export const { getContractListRequest,getContractListSucceeded } = createActions({
  [GET_CONTRACT_LIST_REQUEST]: undefined,
  [GET_CONTRACT_LIST_SUCCEEDED]:payload=> payload
});

