import React from "react";
import "antd/dist/reset.css";
import { Form, Input, Button, Row, Col } from "antd";
import "./Signup.css";
import Signup_image from "../../../assets/imags/signup_image.jpeg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Signup Data:", values);
    localStorage.setItem("signup data", JSON.stringify(values));
    navigate("/"); 
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
            src={Signup_image}
            alt="Signup"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Right Side Form */}
        <Col xs={24} md={12} style={{ padding: "40px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h1>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
              <span
                style={{
                  marginTop: "20px",
                  display: "block",
                  cursor: "pointer",
                  color: "#1890ff"
                }}
                onClick={() => navigate("/login")}
              >
                Already have an account? Login
              </span>

            </Form.Item>

          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
