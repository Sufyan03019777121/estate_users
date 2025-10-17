import React from "react";
import { useNavigate } from "react-router-dom";
import "./featuredCategories.css";
import town_house from "../../assets/imags/town_house.png";
import Modern_Villa from "../../assets/imags/Modern_Villa.png";
import Apartment from "../../assets/imags/Apartment.png";
import Single_Family from "../../assets/imags/Single_Family.png";
import Office from "../../assets/imags/Office.png";

const categories = [
  { key: 1, title: "Town House", desc: "2 Properties", image: town_house },
  { key: 2, title: "Modern Villa", desc: "10 Properties", image: Modern_Villa },
  { key: 3, title: "Apartment", desc: "3 Properties", image: Apartment },
  { key: 4, title: "Single Family", desc: "5 Properties", image: Single_Family },
  { key: 5, title: "Commercial", desc: "3 Properties", image: Office, featured: true },
];

export default function FeaturedCategories() {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === "Commercial") {
      navigate("/commercial");
    }
  };

  return (
    <div className="featured-wrap">
      <h3 className="featured-title">Featured Categories</h3>

      <div className="fc-grid">
        {categories.map((c) => (
          <div
            key={c.key}
            className="fc-card"
            onClick={() => handleCardClick(c.title)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="fc-image"
              style={{ backgroundImage: `url(${c.image})` }}
            >
              <div className="fc-meta">
                <div>
                  <h4 className="fc-card-title">{c.title}</h4>
                  <p className="fc-card-desc">{c.desc}</p>
                </div>

                {c.featured && <span className="fc-badge">Premium</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
