import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'antd'
import { routes } from '../../../navigation/index'
const NavMenu = () => {
  const [current, setCurrent] = useState()
  const history = useHistory()
  const handleClick = e => {
    setCurrent(e.key)
  }

  const handleSelect = useCallback(
    ({ item }) => {
      history.push(item.props.path)
    },
    [history]
  )

  return (
    <Menu
      onClick={handleClick}
      onSelect={handleSelect}
      selectedKeys={[current]}
      mode='horizontal'
    >
      {routes.map(({ key, path, name }) => (
        <Menu.Item key={key} path={path}>
          {name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default NavMenu
