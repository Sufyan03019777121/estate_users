import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
const { Title } = Typography;


export default function ContactAgent({ agentId }) {
    const onFinish = (values) => {
        // call API to send message
        message.success('Inquiry sent');
    };


    return (
        <div className="page-container">
            <Title level={3}>Contact Agent</Title>
            <Card>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name="name" label="Your name" rules={[{ required: true }]}> <Input /> </Form.Item>
                    <Form.Item name="phone" label="Phone" rules={[{ required: true }]}> <Input /> </Form.Item>
                    <Form.Item name="message" label="Message" rules={[{ required: true }]}> <Input.TextArea rows={4} /> </Form.Item>
                    <Button type="primary" htmlType="submit">Send Inquiry</Button>
                </Form>
            </Card>
        </div>
    );
}