import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../index.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const seeProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        className="product-image"
        image={product.image}
        alt={product.title}
      />
      <CardContent className="product-content">
        <Typography className="product-title">{product.title}</Typography>
        <Typography className="product-rating">{product.rating}</Typography>

        <Typography className="product-price">${product.price}</Typography>
        <button
          type="button"
          className="product-button"
          onClick={() => seeProductDetails(product.id)}
        >
          See Details
        </button>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
