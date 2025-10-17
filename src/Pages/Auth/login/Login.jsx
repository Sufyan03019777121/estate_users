import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import "antd/dist/reset.css";
import "./Login.css";
import Login_image from "../../../assets/imags/login_image.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const signup_data = JSON.parse(localStorage.getItem("signup data"));
    
     if (!signup_data) {
      message.error("No signup data found! Please sign up first.");
      
    }
   

    if (
      signup_data.email === values.email &&
      signup_data.password === values.password
      
      
    ) {
      localStorage.setItem("token", "any")
      alert("Login successful!");

      
      location.pathname="/"
      console.log(values)
    } else {
      alert("Invalid email or password!");
      location.pathname="/signup"

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        gutter={0}
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side Image */}
        <Col xs={24} md={12}>
          <img
            src={Login_image}
            alt="Login"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Right Side Form */}
        <Col xs={24} md={12} style={{ padding: "40px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email address!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
