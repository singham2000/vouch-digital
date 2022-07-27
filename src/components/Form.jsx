import React, { useState } from 'react'
import { Typography, Button,notification, Checkbox, Form as Inputs, Input } from 'antd'
// const {}
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stat, setStat] = useState(false);
  const onFinish = () => {
    setStat(true);
    const data = { "email": email, "password": password };
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data.status);
      if (data.status == 400) {
        setStat(false);
        notification["error"]({
          message: 'Error',
          description:
            'Retry with Correct Credentials',
        });
      } else {
        setStat(false);
        notification["success"]({
          message: 'Logged In',
          description:
            'You have successfully logged in',
        });
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='form-container'>
      <Typography.Title
        style={{
          margin: 0,
          fontSize: '2rem'
        }}
      >
        Welcome Back
      </Typography.Title>
      <Typography.Title
        style={{
          fontSize: '0.5rem',
          fontWeight: '200'
        }}
      >
        Enter Credentials to login into your account
      </Typography.Title>
      <Inputs
        style={{
          width: "48vh",
          padding: "2vh"
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Inputs.Item
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            style={{ padding: "1.5vh" }}
            placeholder='Email Address*'
            name='Email'
            onChange={e => setEmail(e.target.value)}
          />
        </Inputs.Item>

        <Inputs.Item
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            style={{ padding: "1.5vh" }}
            placeholder='Password*'
            name='Password'
            onChange={e => setPassword(e.target.value)}
          />
        </Inputs.Item>

        <Inputs.Item>
          <Button
            className="ant-input greyblue btn"
            style={{ height: "5vh" }}
            htmlType="submit"
            loading={stat}
          >
            Login
          </Button>
        </Inputs.Item>


        <Inputs.Item
          name="remember"
          valuePropName="checked"
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Checkbox>Remember me</Checkbox>
            <Typography>Forget Password ?</Typography>
          </div>
        </Inputs.Item>

        <Inputs.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        </Inputs.Item>
      </Inputs>
    </div>
  )
}

export default Form
