import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const API_URL = `http://localhost:5000/api/agent-properties/${id}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperty(data);
    } catch (err) {
      console.error("Error fetching property details:", err);
    }
  };

  if (!property) {
    return (
      <div className="text-center mt-5 text-secondary">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading property details...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        ← Back to Properties
      </Link>

      <div className="card shadow-lg border-0">
        {/* 🖼️ Image Carousel */}
        <div
          id="propertyCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {property.images?.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`http://localhost:5000/uploads/${img}`}
                  className="d-block w-100"
                  alt={property.title}
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          {property.images?.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#propertyCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#propertyCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </>
          )}
        </div>

        {/* 🏠 Property Info */}
        <div className="card-body">
          <h3 className="card-title text-primary">{property.title}</h3>
          <h5 className="text-success mb-3">
            Rs. {property.price?.toLocaleString()}
          </h5>

          <div className="row text-start">
            <div className="col-md-6">
              <p>
                <strong>Category:</strong> {property.category}
              </p>
              <p>
                <strong>Furnished:</strong> {property.furnished}
              </p>
              <p>
                <strong>Area:</strong> {property.area} Marla
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Bedrooms:</strong> {property.bedrooms}
              </p>
              <p>
                <strong>Bathrooms:</strong> {property.bathrooms}
              </p>
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(property.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <p className="mt-3">
            <strong>Description:</strong> {property.description}
          </p>
        </div>
      </div>
    </div>
  );
}
