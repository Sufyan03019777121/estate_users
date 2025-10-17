import React from "react";
import { Card, Typography, Descriptions, Button } from "antd";
const { Title } = Typography;


export default function Profile() {
    const user = { name: 'Ali', email: 'ali@example.com' };
    return (
        <div className="page-container">
            <Title level={3}>My Profile</Title>
            <Card>
                <Descriptions column={1}>
                    <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" style={{ marginTop: 12 }}>Edit Profile</Button>
            </Card>
        </div>
    );
}