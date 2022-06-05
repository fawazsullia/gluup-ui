import { Form, Input, Button, Layout } from "antd";
import { FormEvent, useState } from "react";
import styles from "./AuthForm.module.css";
import HeaderImage from "../../static/image/Frame 18.svg";
import { Link } from "react-router-dom";

function AuthForm(props: any) {
  const [email, setemail] = useState<string>("Please enter your email");
  const [password,setpassword] = useState<string>("")
  const isSignupForm = props.formType === "signup";
  const isLoginForm = props.formType === "login";

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    //handle submitting form here
  };

  return (
    <Layout className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formInner}>
          <div className={styles.headerPattern}>
            <img src={HeaderImage} alt="header image patter" />
          </div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
          >
            <h2>Welcome to Gluup</h2>
            <p className={styles.subhead}>
              Freelance project planner and tracker. Sign-up to access Gluup for
              free.{" "}
            </p>
            <div className={styles.googleContainer}>
              <span>{isSignupForm ? "Signup" : isLoginForm ? "Login" : ""} with Google</span>
            </div>
            <p>or</p>
            <Form.Item
              className={styles.emailContainer}
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className={styles.emailInput}
                defaultValue="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Item>

            { isLoginForm && <Form.Item
              className={styles.emailContainer}
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
        
            >
              <Input
                type="password"
                className={styles.emailInput}
                defaultValue="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Item>}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                block={true}
                loading={false}
                onClick={handleSubmitForm}
              >
                {isSignupForm ? "Signup" : isLoginForm ? "Login" : ""}
              </Button>
            </Form.Item>
            {isLoginForm && <p className={styles.endText}>Forgot Password?</p>}
          </Form>
        </div>
        { isSignupForm && <p className={styles.endText}>Already have an account? <Link to="/login">Sign In</Link></p>}
        { isLoginForm && <p className={styles.endText}>New to Gluup? <Link to="/signup">Sign Up</Link></p>}

      </div>
    </Layout>
  );
}

export default AuthForm;
