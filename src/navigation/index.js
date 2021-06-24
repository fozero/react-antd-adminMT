import ContractList from '../pages/ContractList'
import ContractComboList from '../pages/ContractComboList'

export const routes = [
  {
    key: 'contractlist',
    path: '/contractList',
    name: '合同管理',
    component: ContractList
  },
  {
    key: 'contractcombolist',
    path: '/contractComboList',
    name: '合同套餐管理',
    component: ContractComboList
  }
]
