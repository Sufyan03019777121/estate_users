import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  Carousel,
  Descriptions,
  Typography,
  Spin,
  Button,
  Row,
  Col,
  Empty,
} from "antd";
import {
  ArrowLeftOutlined,
  HomeOutlined,
  DollarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = `/api/agent-properties/${id}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperty(data);
    } catch (err) {
      console.error("Error fetching property details:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
        <Text type="secondary" style={{ marginTop: 10 }}>
          Loading property details...
        </Text>
      </div>
    );
  }

  if (!property) {
    return (
      <Empty
        description="⚠️ Property not found or deleted."
        style={{ marginTop: 100 }}
      />
    );
  }

  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <Link to="/">
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          style={{ marginBottom: 20 }}
        >
          Back to Properties
        </Button>
      </Link>

      <Card
        hoverable
        bordered={false}
        style={{
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
          borderRadius: 12,
        }}
      >
        {/* Image Carousel */}
        <Carousel autoplay>
          {property.images?.map((img, i) => (
            <div key={i}>
              <img
                src={`/uploads/${img}`}
                alt={property.title}
                style={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </div>
          ))}
        </Carousel>

        <div style={{ padding: "25px" }}>
          <Title level={3} style={{ color: "#1677ff" }}>
            <HomeOutlined /> {property.title}
          </Title>
          <Title level={4} type="success">
            <DollarOutlined /> Rs. {property.price?.toLocaleString()}
          </Title>

          <Descriptions bordered column={2} size="middle" className="mt-3">
            <Descriptions.Item label="Category">
              {property.category || "N/A"}
            </Descriptions.Item>
            <Descriptions.Item label="Furnished">
              {property.furnished || "N/A"}
            </Descriptions.Item>
            <Descriptions.Item label="Area">
              {property.area} Marla
            </Descriptions.Item>
            <Descriptions.Item label="Bedrooms">
              {property.bedrooms || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Bathrooms">
              {property.bathrooms || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Posted on">
              <CalendarOutlined />{" "}
              {new Date(property.createdAt).toLocaleDateString()}
            </Descriptions.Item>
          </Descriptions>

          <div style={{ marginTop: 20 }}>
            <Title level={5}>Description</Title>
            <Paragraph>
              {property.description || "No description available."}
            </Paragraph>
          </div>
        </div>
      </Card>
    </div>
  );
}
