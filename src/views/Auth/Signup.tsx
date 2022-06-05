import { Layout } from 'antd'
import AuthForm from '../../components/AuthForm/AuthForm'
import styles from "./Signup.module.css"

const Signup = () => {
  return (
      <Layout className={styles.container}>
      <AuthForm formType="signup" />
      </Layout>
  )
}

export default Signup