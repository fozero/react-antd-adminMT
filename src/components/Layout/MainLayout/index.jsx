import { Layout } from 'antd'
import NavMenu from '../NavMenu'

import styles from './index.module.css'

const { Footer, Content } = Layout
const MainLayout = ({ children }) => {
  return (
    <Layout>
      <NavMenu />
      <Content
        className={styles.content}
        style={{ padding: '30px 50px', minHeight: '600px' }}
      >
        {children}
      </Content>
      <Footer className={styles.footer}>
        react-antd-adminMT ©2021 Created by fozero@126.com
      </Footer>
    </Layout>
  )
}

export default MainLayout
