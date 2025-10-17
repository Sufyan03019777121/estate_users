import React from "react";
import { List, Rate, Typography } from "antd";
const { Title } = Typography;


export default function Reviews() {
    const reviews = [];
    return (
        <div className="page-container">
            <Title level={3}>Reviews</Title>
            <List dataSource={reviews} renderItem={r => (
                <List.Item>
                    <List.Item.Meta title={r.user} description={<><Rate disabled defaultValue={r.rating} /> <p>{r.comment}</p></>} />
                </List.Item>
            )} />
        </div>
    );
}