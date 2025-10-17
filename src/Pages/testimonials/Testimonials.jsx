import React from "react";
import { Card, Row, Col, Typography, Avatar, Rate } from "antd";
import { CommentOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Testimonials = () => {
    const testimonials = [
        {
            name: "Cameron Williamson",
            role: "Developer",
            text: "Searches for multiprojects, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "Esther Howard",
            role: "Marketing Head",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Devon Lane",
            role: "Designer",
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
            img: "https://randomuser.me/api/portraits/women/75.jpg",
        },
    ];

    return (
        <div
            style={{
                padding: "80px 8%",
                background: "linear-gradient(180deg, #fafafa 0%, #fff 100%)",
            }}
        >
            {/* Header Section */}
            <Row
                justify="space-between"
                align="middle"
                style={{
                    marginBottom: 50,
                    rowGap: 20,
                }}
            >
                {/* Left Title */}
                <Col xs={24} md={12}>
                    <Title
                        level={4}
                        style={{
                            marginBottom: 10,
                            fontSize: "1.0rem",
                            fontWeight: 700,
                            textAlign: "left",
                            color: "#111827",
                        }}
                    >
                        What our customers are saying us?
                    </Title>
                </Col>

                {/* Right Stats */}
                <Col xs={24} md={12} style={{ textAlign: "right" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 25,
                        }}
                    >
                        {/* Rating */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                flexWrap: "wrap",
                                gap: 6,
                                width: "100%",
                                textAlign: "right",
                            }}
                        >
                            <Text strong style={{ fontSize: 18, color: "#111827" }}>
                                4.88
                            </Text>
                            <Text style={{ color: "#6b7280" }}>Overall rating</Text>
                            <Rate
                                disabled
                                defaultValue={5}
                                style={{
                                    fontSize: 15,
                                    color: "#facc15",
                                }}
                            />
                        </div>


                    </div>
                </Col>
            </Row>

            {/* Testimonials Cards */}
            <Row gutter={[24, 24]} justify="center">
                {testimonials.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            style={{
                                borderRadius: 16,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                textAlign: "left",
                                border: "none",
                                backgroundColor: "#fff",
                                transition: "all 0.4s ease",
                            }}
                            bodyStyle={{ padding: "25px 25px 30px 25px" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(0,0,0,0.08)";
                            }}
                        >
                            <CommentOutlined
                                style={{
                                    fontSize: 28,
                                    color: "#e5e7eb",
                                    marginBottom: 15,
                                }}
                            />
                            <p
                                style={{
                                    color: "#4b5563",
                                    fontSize: 15,
                                    lineHeight: 1.7,
                                    textAlign: "justify",
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 6,
                                    WebkitBoxOrient: "vertical",
                                    minHeight: 120,
                                    marginBottom: 25,
                                }}
                            >
                                {item.text}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "auto",
                                }}
                            >
                                <Avatar size={48} src={item.img} />
                                <div style={{ marginLeft: 12 }}>
                                    <Text strong style={{ fontSize: 15, color: "#111827" }}>
                                        {item.name}
                                    </Text>
                                    <br />
                                    <Text style={{ fontSize: 13, color: "#6b7280" }}>
                                        {item.role}
                                    </Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Testimonials;
