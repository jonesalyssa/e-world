import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "/src/index.css";
import webVid from "/src/assets/WebVid.mp4";
import { useGetAllSwagQuery } from "./swagSlice";

export default function SwagDisplay() {
  const { data, isSuccess, isLoading, error } = useGetAllSwagQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setFeaturedProduct(data[randomIndex]);
    }
  }, [data, isSuccess]);

  const handlesearch = (e) => {
    e.preventDefault();
    const filtered = data?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading data!</h3>;

  return (
    <article>
      <div className="main-vid">
        <video autoPlay loop muted playsInline>
          <source src={webVid} type="video/mp4" />
        </video>
        <div className="shopnow-button">
          <button
            className="shop-now"
            onClick={() =>
              productsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Shop Now
          </button>
        </div>
      </div>

      <br />

      {/* h1 with Popup Attached */}
      <div className="h1-container" ref={productsRef}>
        <h1>All Products</h1>
        {isPopupOpen && featuredProduct && (
          <div className="popup">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
              ×
            </button>
            <h2>Featured Find🔥</h2>
            <img
              src={featuredProduct.image}
              alt={featuredProduct.title}
              className="popup-img"
            />
            <h3>{featuredProduct.title}</h3>
            <p className="price">${featuredProduct.price}</p>
            <button
              className="view-item"
              onClick={() => navigate(`/products/${featuredProduct.id}`)}
            >
              View Item
            </button>
          </div>
        )}
      </div>

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
              <br />
              <h3>${p.price}</h3>
              <button
                type="button"
                className="see-details"
                onClick={() => navigate(`/products/${p.id}`)}
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
