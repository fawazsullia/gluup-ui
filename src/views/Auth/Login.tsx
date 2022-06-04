import { Layout } from 'antd'
import AuthForm from '../../components/AuthForm/AuthForm'
import styles from "./Login.module.css"

const Login = () => {
  return (
      <Layout className={styles.container}>
      <AuthForm formType="login" />
      </Layout>
  )
}

export default Login