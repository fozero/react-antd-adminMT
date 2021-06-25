import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getContractListRequest } from '../../redux/contract/actions'
import { contractListSelector } from '../../redux/contract/selectors'
import MainLayout from '../../components/Layout/MainLayout'
import getContractListColumns from './contractListColumns'

const ContractList = () => {
  const words = useSelector(contractListSelector)

  const dispatch = useDispatch()

  const getList = () => {
    dispatch(getContractListRequest())
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <MainLayout>
      <Table columns={getContractListColumns()} dataSource={words} />
    </MainLayout>
  )
}

export default ContractList
