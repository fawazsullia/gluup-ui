import { Form, Input, Button, Checkbox, Layout , Row} from 'antd';
import styles from "./Signup.module.css"

const Signup = () => {

const onFinish = ()=> {
  console.log("form")
}

const onFinishFailed = ()=> {
  console.log("finish failed")
}

  return (
    <Layout className={styles.container}>
            <div className={styles.formContainer}>

      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form}
    >
      <h2>Welcome to Gluup</h2>
      <p>Hello world. Is it rendering?</p>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

    </Layout>
    )
}

export default Signup