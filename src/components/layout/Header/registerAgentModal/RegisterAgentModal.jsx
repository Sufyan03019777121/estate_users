import React, { useState } from "react";
import { Modal, Form, Input, Button, message, Typography } from "antd";
import { LockOutlined, UserOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import "./registerAgentModal.css";

const { Title, Text } = Typography;

export default function RegisterAgentModal({ visible, onClose }) {
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:5000/api/user-agents";

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        message.success(`🎉 Agent "${values.Name}" registered successfully!`);
        onClose();
      } else {
        message.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      message.error("Server error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="pro-register-modal"
    >
      <div className="modal-header">
        <Title level={4} className="modal-title">Register as User Agent</Title>
        <Text type="secondary">Fill out the details below to become a registered agent</Text>
      </div>

      <Form layout="vertical" onFinish={handleRegister} className="register-form">
        <Form.Item
          label="Full Name"
          name="Name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "#1677ff" }} />}
            placeholder="John Doe"
            className="form-input"
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="Phone"
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input
            prefix={<PhoneOutlined style={{ color: "#1677ff" }} />}
            placeholder="03XX-XXXXXXX"
            className="form-input"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[{ type: "email", message: "Invalid email address" }]}
        >
          <Input
            prefix={<MailOutlined style={{ color: "#1677ff" }} />}
            placeholder="agent@example.com"
            className="form-input"
          />
        </Form.Item>

        <Form.Item
          label="Agency Name"
          name="Agency"
          rules={[{ required: true, message: "Please enter your agency name" }]}
        >
          <Input
            prefix={<HomeOutlined style={{ color: "#1677ff" }} />}
            placeholder="Enter agency name"
            className="form-input"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: "Please enter a password" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "#1677ff" }} />}
            placeholder="Enter password"
            className="form-input"
          />
        </Form.Item>

        <Form.Item className="form-submit">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="register-btn"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
