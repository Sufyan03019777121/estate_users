import React from "react";
import { Button, Typography, Row, Col } from "antd";
import "./DiscoverSection.css";

const { Title, Paragraph } = Typography;

const DiscoverSection = () => {
  return (
    <div className="discover-section">
      <Row
        gutter={[48, 48]}
        align="middle"
        justify="space-between"
        className="discover-row"
      >
        {/* Left Side - Text */}
        <Col xs={24} md={12} className="discover-text">
          <Title className="discover-title">
            Discover Our Finest <br /> Selection
          </Title>

          <Paragraph className="discover-paragraph">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam, vehicula a, malesuada non, pharetra
            in, ante.
          </Paragraph>

          <Button className="discover-button">
            Discover →
          </Button>
        </Col>

        {/* Right Side - Image */}
        <Col xs={24} md={12}>
          <div className="discover-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
              alt="discover"
            />
            <div className="discover-image-overlay" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DiscoverSection;
