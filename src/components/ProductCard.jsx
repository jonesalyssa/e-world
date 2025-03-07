import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const seeProductDetails = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => seeProductDetails(product.id)}
        >
          {" "}
          See Details
        </button>{" "}
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default ProductCard;
