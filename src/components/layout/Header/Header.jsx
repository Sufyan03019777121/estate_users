import React, { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Typography, Button, Drawer, Dropdown } from "antd";
import { UserOutlined, PhoneOutlined, PlusOutlined, MenuOutlined } from "@ant-design/icons";
import RegisterAgentModal from "./registerAgentModal/RegisterAgentModal";
import "./Header.css";

const { Header } = Layout;
const { Title } = Typography;

export default function Navbar({ phoneNumber = "0300-1234567", onNavigate }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleResize = () => setIsMobile(window.innerWidth <= 910);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const navMenuItems = [
    { key: "home", label: "Home" },
    { key: "listings", label: "Listings" },
    { key: "members", label: "Members" },
    { key: "blog", label: "Blog" },
    { key: "pages", label: "Pages" },
    { key: "contact", label: "Contact" },
  ];

  const navMenu = (
    <Menu mode={isMobile ? "vertical" : "horizontal"} style={{ borderBottom: "none" }}>
      {navMenuItems.map((item) => (
        <Menu.Item
          key={item.key}
          onClick={() => {
            onNavigate && onNavigate(item.key);
            setVisible(false);
          }}
          className="navMenuItems_color"
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header className="navbar-header">
      {/* Logo */}
      <div className="navbar-logo">
        <Title level={4}>
          Isttaa<span>World</span>
        </Title>
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="navbar-desktop">
          {navMenu}
          <Button icon={<PlusOutlined />} className="navbar_addproperty_button" onClick={() => setIsModalVisible(true)}>
            Register As An Agent
          </Button>
          <div className="navbar-phone">
            <PhoneOutlined style={{ fontSize: 16, color: "#1890ff" }} />
            <span className="navbar_phoneNumber">{phoneNumber}</span>
          </div>
          <Dropdown overlay={userMenu} placement="bottomRight">
            <Avatar size="small" icon={<UserOutlined />} style={{ cursor: "pointer" }} />
          </Dropdown>
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && <MenuOutlined className="navbar-hamburger" onClick={() => setVisible(true)} />}

      {/* Drawer */}
      <Drawer title="Menu" placement="right" onClose={() => setVisible(false)} open={visible} width="80%" bodyStyle={{ paddingTop: 20 }}>
        {navMenu}
        <Button type="primary" icon={<PlusOutlined />} block className="navbar-drawer-button" onClick={() => setIsModalVisible(true)}>
          Register As An Agent
        </Button>
        <div className="navbar-drawer-phone">
          <PhoneOutlined />
          <span>{phoneNumber}</span>
        </div>
        <Dropdown overlay={userMenu} placement="bottomLeft">
          <Avatar size="small" icon={<UserOutlined />} className="navbar-drawer-avatar" />
        </Dropdown>
      </Drawer>

      {/* Modal Component */}
      <RegisterAgentModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </Header>
  );
}
