import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  DollarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import "./commercialPage.css";

const { Title, Text } = Typography;

export default function CommercialPage() {
  const [properties, setProperties] = useState([]);
  const API_URL = "/api/agent-properties";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const filtered = data.filter((item) =>
        ["commercial", "office", "shop", "plot"].includes(
          item.category?.toLowerCase()
        )
      );
      setProperties(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="commercial-section">
      <Title level={3} className="homes-title">
        Commercial Properties
      </Title>
      <Text className="homes-subtitle">
        Explore the latest commercial listings
      </Text>

      <Row gutter={[24, 24]} justify="center">
        {properties.length > 0 ? (
          properties.map((p) => (
            <Col xs={24} sm={12} md={8} lg={6} key={p._id}>
              <Card className="custom-card home-card" hoverable>
                <div className="image-wrapper">
                  <img
                    src={
                      p.images?.[0]
                        ? `/uploads/${p.images[0]}`
                        : "https://via.placeholder.com/300x200.png?text=No+Image"
                    }
                    alt={p.title}
                    className="card-image"
                  />
                  <span className="for-sale-tag">For Sale</span>
                </div>

                <div className="card-header">
                  <Text className="card-title">{p.title}</Text>
                  <Text className="card-price">
                    <DollarOutlined /> Rs. {p.price?.toLocaleString()}
                  </Text>
                </div>

                <Text className="card-location">
                  <EnvironmentOutlined /> {p.category}
                </Text>

                <div className="card-footer">
                  <Text>
                    <HomeOutlined /> ID: {p._id.slice(-6)}
                  </Text>
                  <Link
                    to={`/detail/${p._id}`}
                    className="detail-btn"
                  >
                    View Details
                  </Link>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Text type="secondary">No commercial properties found.</Text>
        )}
      </Row>
    </div>
  );
}
