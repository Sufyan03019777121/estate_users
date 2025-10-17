import React from "react";
import { Card, Row, Col, Typography, Tag } from "antd";
import { EnvironmentOutlined, HomeOutlined, AreaChartOutlined } from "@ant-design/icons";
import "./featuredProperties.css"; // ✅ external CSS import

const { Title, Text } = Typography;

const homes = [
  {
    id: 1,
    title: "Modern Villa",
    price: "PKR 2.5 Crore",
    location: "Lahore, DHA Phase 6",
    beds: 4,
    baths: 3,
    sqft: "2800",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "PKR 1.2 Crore",
    location: "Karachi, Clifton Block 5",
    beds: 3,
    baths: 2,
    sqft: "1800",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
  },
  {
    id: 3,
    title: "Family House",
    price: "PKR 85 Lakh",
    location: "Islamabad, G-13/2",
    beds: 5,
    baths: 4,
    sqft: "3500",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "PKR 1.2 Crore",
    location: "Karachi, Clifton Block 5",
    beds: 3,
    baths: 2,
    sqft: "1800",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
  },
];

export default function FeaturedProperties() {
  return (
    <div className="homes-section">
      <Title level={4} className="homes-title">
        Featuers properties
      </Title>
      <Text type="secondary" className="homes-subtitle">
        Based on your view history
      </Text>

      <Row gutter={[20, 20]} justify="center">
        {homes.map((home) => (
          <Col xs={24} sm={12} md={6} lg={6} key={home.id}>
            <div className="home-card">
              <Card
                hoverable
                className="custom-card"
                cover={
                  <div className="image-wrapper">
                    <img src={home.image} alt={home.title} className="card-image" />
                    <Tag color="green" className="for-sale-tag">
                      For Sale
                    </Tag>
                  </div>
                }
              >

                <div>
                  <Text strong className="card-price">
                    {home.price}
                  </Text>
                </div>
                <div className="card-header">
                  <Title
                   level={4} className="card-title">
                    {home.title}
                  </Title>
                </div>


                <Text type="secondary" className="card-location">
                  <EnvironmentOutlined /> {home.location}
                </Text>

                <div className="card-footer">
                  <span>
                    <HomeOutlined /> {home.beds} Beds
                  </span>
                  <span>🛁 {home.baths}</span>
                  <span>
                    <AreaChartOutlined /> {home.sqft} sqft
                  </span>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
