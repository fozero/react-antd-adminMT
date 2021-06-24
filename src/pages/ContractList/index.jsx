import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getContractListRequest } from "../../redux/app/actions";

const ContractList = () => {
  // TODO selector
  const words = useSelector(({ app }) => app.words)

  const dispatch = useDispatch()

  const getList = () => {
    dispatch(getContractListRequest())
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div>
      合同管理
      <ul>
        {words.map((item, index) => {
          return (
            <li key={index}>{item.display_query}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContractList
