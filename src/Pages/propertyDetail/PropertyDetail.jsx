import React, { useEffect, useState } from "react";
import { Row, Col, Image, Typography, Button, Card } from "antd";
import { getPropertyById } from "../../api/Api";

const { Title, Paragraph } = Typography;

export default function PropertyDetail({ propertyId = 1 }) {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getPropertyById(propertyId).then((res) => setProperty(res));
  }, [propertyId]);

  if (!property)
    return (
      <div className="page-container">
        <Paragraph>No property selected</Paragraph>
      </div>
    );

  return (
    <div className="page-container">
      <Row gutter={16}>
        <Col xs={24} md={14}>
          <Card>
            <Image
              src={property.image}
              alt={property.title}
              style={{ borderRadius: 8 }}
            />
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Title level={3}>{property.title}</Title>
          <Paragraph className="muted">
            {property.city} • {property.area}
          </Paragraph>
          <Title level={4} type="secondary">
            {property.price}
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            justo ut nunc mattis tempor.
          </Paragraph>
          <Button type="primary">Contact Agent</Button>
        </Col>
      </Row>
    </div>
  );
}
