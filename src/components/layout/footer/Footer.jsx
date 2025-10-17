import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const socialStyle = {
  fontSize: 20,
  marginRight: 12,
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const ProFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#111827",
        color: "#fff",
        padding: "80px 12% 40px 12%",
        position: "relative",
      }}
    >
      <Row gutter={[32, 32]}>
        {/* Company Info */}
        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            IsttaaWorld
          </Title>
          <Text style={{ color: "#9ca3af", lineHeight: 1.8 }}>
            Discover and explore the finest properties across Pakistan. We help
            you find your dream home with ease and confidence.
          </Text>
          <div style={{ marginTop: 16 }}>
            <FacebookOutlined
              style={socialStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1877f2")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            />
            <TwitterOutlined
              style={socialStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1da1f2")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            />
            <InstagramOutlined
              style={socialStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#e1306c")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            />
            <LinkedinOutlined
              style={socialStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#0a66c2")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            />
          </div>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: "#fff", marginBottom: 16 }}>
            Quick Links
          </Title>
          <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af" }}>
            {["Home", "Listings", "Blog", "Contact"].map((link, i) => (
              <li
                key={i}
                style={{
                  marginBottom: 8,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1677ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                <Link>{link}</Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Contact Info */}
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: "#fff", marginBottom: 16 }}>
            Contact Us
          </Title>
          <Text
            style={{
              color: "#9ca3af",
              display: "block",
              marginBottom: 8,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            📞 +92 300 1234567
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              display: "block",
              marginBottom: 8,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            ✉ info@isttaaworld.com
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              display: "block",
              marginBottom: 8,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            🏢 DHA Phase 6, Lahore, Pakistan
          </Text>
        </Col>
      </Row>

      {/* Divider & Copyright */}
      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: 50,
          paddingTop: 20,
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} IsttaaWorld — All rights reserved.
      </div>
    </Footer>
  );
};

export default ProFooter;
