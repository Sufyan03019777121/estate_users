import React from "react";
import { Card, Badge, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;


export default function PropertyCard({ property, onClick }) {
    return (
        <Card
            hoverable
            cover={<img alt={property.title} src={property.image || '/placeholder.png'} />}
            onClick={() => onClick && onClick(property)}
            className="property-card"
        >
            <div className="card-top">
                {property.isFeatured && <Badge color="#f50" text="Featured" />}
                <Text className="price">{property.price}</Text>
            </div>
            <Meta title={property.title} description={<span className="muted">{property.city} • {property.area}</span>} />
        </Card>
    );
}