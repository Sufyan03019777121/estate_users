import React from "react";
import { Typography, Input } from "antd";
import "./Home.css";

const { Title } = Typography;

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <Title level={2}>Enjoy The Finest Homes</Title>
        <p>Search from hundreds of listings across Pakistan</p>

        {/* Search Bar */}
        <Input
          className="hero-search"
          placeholder="search properties..."
        />
      </div>
    </div>
  );
}
