// This is not working

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGetAllSwagQuery } from "./swagSlice";
import {  useNavigate } from "react-router-dom";
export default function Products() {
  const { data, isSuccess, isLoading, error } = useGetAllSwagQuery();
  const [product, setProduct] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const seeProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState('');
  
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

  // Loading state: show loading message until data is fetched
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  // Error handling: if there’s an error in fetching data, show an error message
  if (error) {
    return <h3>Error loading data!</h3>;
  }

  // Data is available and successfully fetched
  console.log(data);
  console.log(product);

  console.log('isLoading:', isLoading);
console.log('isSuccess:', isSuccess);
console.log('data:', data);

  return (
    <article>
      <h2>All Products</h2>
      <div>
        <form onSubmit={handlesearch}>
          <label>
            <input
              type="text"
              name="Swag"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Title..."
            />
          </label>
          <button type="submit">Search Swag</button>
        </form>
      </div>
      
      <ul className="swag">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <li key={p.id} className="swag">
              <h3>
                {p.title} Price: {p.price}
              </h3>
              <figure>
                <img src={p.image} alt={p.title} />
              </figure>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => seeProductDetails(p.id)}
              >
                See Details
              </button>
            </li>
          ))
        ) : (
          data.map((p) => (
            <li key={p.id} className="swag">
              <h3>
                {p.title} Price {p.price}
              </h3>
              <figure>
                <img src={p.image} alt={p.name} />
              </figure>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => seeProductDetails(p.id)}
              >
                See Details
              </button>
            </li>
          ))
        )}
      </ul>
    </article>
  );
}


