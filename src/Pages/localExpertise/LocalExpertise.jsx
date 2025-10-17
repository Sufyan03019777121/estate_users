import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import Local_expertise from "../../assets/imags/Local_expertise.png";
import "./LocalExpertise.css";

const { Title, Paragraph } = Typography;

export default function LocalExpertise() {
  return (
    <div className="local-section">
      <Row gutter={[64, 64]} align="middle" justify="center">
        {/* Left Image */}
        <Col xs={24} md={10} className="local-image-col">
          <div className="local-badge">
            <div className="icon-circle">
              <TeamOutlined />
            </div>
            <div className="text-wrapper">
              <p className="label">Total Clients</p>
              <p className="number">7,000 M</p>
            </div>
          </div>

          <img
            src={Local_expertise}
            alt="Luxury Home"
            className="local-image"
          />
        </Col>

        {/* Right Content */}
        <Col xs={24} md={12}>
          <Title level={4} className="local-title fade-in">
            Local expertise for luxury homes
          </Title>
          <Paragraph className="local-text fade-in delay-1">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi.
            Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut
            mauris non.
          </Paragraph>

          <Button type="primary" shape="round" size="large" className="local-btn">
            Learn More →
          </Button>
        </Col>
      </Row>
    </div>
  );
}
