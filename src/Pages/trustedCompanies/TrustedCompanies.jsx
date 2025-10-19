import React from "react";
import { Row, Col, Typography } from "antd";
import "./trustedCompanies.css"; 

import amazon from "../../assets/imags/brands/amazon.png";
import amd from "../../assets/imags/brands/amd.png";
import cisco from "../../assets/imags/brands/cisco.png";
import dropcam from "../../assets/imags/brands/dropcam.png";
import logitech from "../../assets/imags/brands/logitech.png";
import spotify from "../../assets/imags/brands/spotify.png";

const { Text } = Typography;

export default function TrustedCompanies() {
  const logos = [amazon, amd, cisco, dropcam, logitech, spotify];

  return (
    <div className="trusted-section">
      <Text className="trusted-text">
        Thousands of world’s leading companies trust <strong>Space</strong>
      </Text>

      <Row justify="center" align="middle">
        {logos.map((logo, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index} className="logo-container">
            <img src={logo} alt="Company Logo" className="company-logo" />
          </Col>
        ))}
      </Row>
    </div>
  );
}
