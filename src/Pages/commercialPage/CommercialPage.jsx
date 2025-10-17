import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CommercialPage() {
  const [properties, setProperties] = useState([]);
  const API_URL = "http://localhost:5000/api/agent-properties";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      // ✅ Filter only relevant property types
      const filtered = data.filter((item) =>
        ["commercial", "office", "shop", "plot"].includes(
          item.category?.toLowerCase()
        )
      );

      setProperties(filtered);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Commercial Properties
      </h2>

      <div className="row g-4">
        {properties.length > 0 ? (
          properties.map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={
                    p.images?.[0]
                      ? `http://localhost:5000/uploads/${p.images[0]}`
                      : "https://via.placeholder.com/300x200.png?text=No+Image"
                  }
                  className="card-img-top"
                  alt={p.title}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="text-muted small mb-1">
                    Category: {p.category}
                  </p>
                  <span className="badge bg-success mb-2">
                    Rs. {p.price?.toLocaleString()}
                  </span>
                  <p className="card-text text-truncate">
                    {p.description || "No description available."}
                  </p>

                  {/* ✅ View Details Button */}
                  <Link
                    to={`/detail/${p._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-secondary mt-4">
            No commercial properties found.
          </p>
        )}
      </div>
    </div>
  );
}
