import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./HomesForYou.css";

const { Title, Text } = Typography;

const homes = [
  {
    title: "Modern Villa",
    price: "PKR 2.5 Crore",
    location: "Lahore, DHA Phase 6",
    beds: 4,
    baths: 3,
    area: "2800 sqft",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Apartment",
    price: "PKR 1.2 Crore",
    location: "Karachi, Clifton Block 5",
    beds: 3,
    baths: 2,
    area: "1800 sqft",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Family House",
    price: "PKR 85 Lakh",
    location: "Islamabad, G-13/2",
    beds: 5,
    baths: 4,
    area: "3500 sqft",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomesForYou() {
  return (
    <div className="homes-section">
      <Title level={3} className="homes-title">
        Homes For You
      </Title>
      <Text className="homes-subtitle">
        Based on your view history
      </Text>

      <Row gutter={[24, 24]} justify="center">
        {homes.map((home, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="custom-card home-card" hoverable>
              <div className="image-wrapper">
                <img src={home.image} alt={home.title} className="card-image" />
                <span className="for-sale-tag">For Sale</span>
              </div>
              <div className="card-header">
                <Text className="card-title">{home.title}</Text>
                <Text className="card-price">{home.price}</Text>
              </div>
              <Text className="card-location">{home.location}</Text>
              <div className="card-footer">
                <Text>
                  <HomeOutlined /> {home.beds} Beds
                </Text>
                <Text>
                  <ApartmentOutlined /> {home.baths} Baths
                </Text>
                <Text>
                  <UserOutlined /> {home.area}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
