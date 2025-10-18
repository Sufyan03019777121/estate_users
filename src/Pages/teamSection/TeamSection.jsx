import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./TeamSection.css";
import sir_rizwan from "../../assets/imags/sir_rizwan.jpeg"
import team_pic2 from "../../assets/imags/team_pic2.png"
import team_pic3 from "../../assets/imags/team_pic3.png"
import team_pic4 from "../../assets/imags/team_pic4.png"

const { Title, Text } = Typography;

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sir Rizwan",
      role: "Supper Admin",
      image: sir_rizwan,
    },
    {
      name: "Anna Brooks",
      role: "Project Manager",
      image: team_pic2,
    },
    {
      name: "Michael Lee",
      role: "Sales Executive",
      image: team_pic3,
    },
    {
      name: "Sophia Turner",
      role: "UI/UX Designer",
      image: team_pic4,
    },
  ];

  return (
    <div className="team-section">
      <Title level={4} className="team-title">
        Meet Our Team Of Experts
      </Title>

      <Text className="team-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      <Row gutter={[24, 24]} justify="center">
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              bordered={false}
              className="team-card"
              bodyStyle={{ padding: 0 }}
            >
              <div
                className="team-image"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="team-info">
                <Title level={5} className="team-name">
                  {member.name}
                </Title>
                <Text className="team-role">{member.role}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamSection;
