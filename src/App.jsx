import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/layout/Header/Header";
import Home from "./Pages/Home/Home";
import FeaturedCategories from "./Pages/featured_Categories/Featured_Categories";
import LocalExpertise from "./Pages/localExpertise/LocalExpertise";
import TrustedCompanies from "./Pages/trustedCompanies/TrustedCompanies";
import FeaturedProperties from "./Pages/featuredProperties/FeaturedProperties";
import Testimonials from "./Pages/testimonials/Testimonials";
import TeamSection from "./Pages/teamSection/TeamSection";
import DiscoverSection from "./Pages/discoverSection/DiscoverSection";
import HomesForYou from "./Pages/homesForYou/HomesForYou";
import ProFooter from "./components/layout/footer/Footer";
import CommercialPage from "./Pages/commercialPage/CommercialPage";
import PropertyDetailPage from "./Pages/propertyDetailPage/PropertyDetailPage";

const { Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        {/* 🔹 Header */}
        <Navbar />

        {/* 🔹 Main Content */}
        <Content className="app-content">
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <FeaturedCategories />
                  <HomesForYou />
                  <LocalExpertise />
                  <TrustedCompanies />
                  <FeaturedProperties />
                  <Testimonials />
                  <TeamSection />
                  <DiscoverSection />
                </>
              }
            />

           
            <Route  />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/detail/:id" element={<PropertyDetailPage />} />
          </Routes>
        </Content>

        {/* 🔹 Footer */}
        <ProFooter
          style={{
            textAlign: "center",
            background: "#f9fafb",
            padding: "20px",
            color: "#555",
            fontSize: "14px",
          }}
        >
         
        </ProFooter>
      </Layout>
    </Router>
  );
}
