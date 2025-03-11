// This is not working

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/src/index.css";
import Footer from "/src/components/Footer";

import { useGetAllSwagQuery } from "./swagSlice";
import { useNavigate } from "react-router-dom";
export default function Products() {
  const { data, isSuccess, isLoading, error } = useGetAllSwagQuery();
  const [product, setProduct] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const seeProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handlesearch = (e) => {
    e.preventDefault();
    const filtered = data?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (isSuccess && data) {
    console.log("Data loaded successfully:", data);
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error loading data!</h3>;
  }

  console.log(data);
  console.log(product);

  console.log("isLoading:", isLoading);
  console.log("isSuccess:", isSuccess);
  console.log("data:", data);

  return (
    <article>
      <h1>All Products</h1>
      <hr className="divider"></hr>
      <div className="search">
        <form className="search" onSubmit={handlesearch}>
          <label>
            <input
              type="text"
              name="Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Title..."
            />
          </label>
          <button className="search-button" type="submit">
            Search Items
          </button>
        </form>
      </div>

      <ul className="all-container">
        {(filteredProducts.length > 0 ? filteredProducts : data).map((p) => (
          <li key={p.id} className="view-all">
            <figure className="all-figure">
              <img className="products-image" src={p.image} alt={p.title} />
            </figure>
            <div className="product-description">
              <h3>
                <strong>{p.title}</strong>
              </h3>
              <br></br>
              <h3>${p.price}</h3>
              {/* <p className="rating">⭐ {p.rating} / */}
              <button
                type="button"
                className="see-details"
                onClick={() => seeProductDetails(p.id)}
              >
                See Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
