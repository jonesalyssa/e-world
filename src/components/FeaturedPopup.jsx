import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/index.css";

export default function FeaturedPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <h2>Featured Find! </h2>
        <img
          src="/path-to-featured-image.jpg"
          alt="Featured Item"
          className="popup-img"
        />
        <button
          className="view-item"
          onClick={() => navigate("/products/featured-id")}
        >
          View Item
        </button>
      </div>
    </div>
  );
}
