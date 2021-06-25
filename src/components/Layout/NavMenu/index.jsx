import React, { useCallback } from 'react'
import * as R from 'ramda'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { routes } from '../../../navigation/index'
const NavMenu = () => {
  const history = useHistory()
  const location = useLocation()

  const handleSelect = useCallback(({ item }) => {
    history.push(item.props.path)
  }, [])

  return (
    <Menu
      onSelect={handleSelect}
      selectedKeys={[
        R.prop('key', R.find(R.propEq('path', location.pathname), routes))
      ]}
      mode='horizontal'
    >
      {routes.map(({ key, path, name, showInMenu }) => {
        if (showInMenu) {
          return (
            <Menu.Item key={key} path={path}>
              {name}
            </Menu.Item>
          )
        }
        return null
      })}
    </Menu>
  )
}

export default NavMenu
