import ContractList from '../pages/ContractList'
import ContractComboList from '../pages/ContractComboList'
import Error404 from '../pages/Error404'

export const routes = [
  {
    key: 'contractlist',
    path: '/contractList',
    name: '合同管理',
    component: ContractList,
    showInMenu: true
  },
  {
    key: 'contractcombolist',
    path: '/contractComboList',
    name: '合同套餐管理',
    component: ContractComboList,
    showInMenu: true
  },
  {
    key: 'main',
    path: '/',
    name: '合同管理',
    component: ContractList,
    exact: true
  },
  {
    key: 'error',
    path: '*',
    name: '页面未找到',
    component: Error404
  }
]
