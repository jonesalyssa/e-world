import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "/src/index.css";
import webVid from "/src/assets/WebVid.mp4";
import leatherjacket from "/src/assets/leatherjacket.mp4";
import buttonjacket from "/src/assets/buttonjacket.mp4";
import computer from "/src/assets/computer.mp4";
import gamingmonitor from "/src/assets/gamingmonitor.mp4";
import { useGetAllSwagQuery } from "./swagSlice";

function ProductCard({ product, navigate }) {
  return (
    <li className="view-all">
      <figure className="all-figure">
        <img
          className="products-image"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="product-description">
        <h3>
          <strong>{product.title}</strong>
        </h3>
        <br />
        <h3>${product.price}</h3>
        <button
          type="button"
          className="see-details"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          See Details
        </button>
      </div>
    </li>
  );
}

export default function SwagDisplay() {
  const { data, isSuccess, isLoading, error } = useGetAllSwagQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [hasReachedProducts, setHasReachedProducts] = useState(false); // ✅ Add this line here
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setFeaturedProduct(data[randomIndex]);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay popup by 15 seconds (15000 ms)
          const timer = setTimeout(() => {
            setHasReachedProducts(true);
          }, 15000);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

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

      <div className="h1-container" ref={productsRef}>
        <h1>Products</h1>
      </div>

      {hasReachedProducts && isPopupOpen && featuredProduct && (
        <div className="popup-overlay">
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
        </div>
      )}

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

      {filteredProducts.length > 0 ? (
        <ul className="all-container">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} navigate={navigate} />
          ))}
        </ul>
      ) : (
        <>
          <section className="all">
            <h1 id="shirts" className="scroll-offset">
              Women's Shirts
            </h1>
            <div className="all-container">
              {[data[6], data[7], data[5], data[6]].map(
                (p) =>
                  p && (
                    <ProductCard key={p.id} product={p} navigate={navigate} />
                  )
              )}
            </div>
          </section>

          <ul className="double-container">
            <h1 id="womens-jackets">Women's Secondhand Second Layers</h1>

            <section className="dual">
              <div className="featured-container">
                {data[15] && (
                  <div className="simple-product">
                    <h5>{data[15].title}</h5>
                    <h6 className="small">${data[15].price}</h6>
                    <button
                      type="button"
                      className="see-details"
                      onClick={() => navigate(`/products/${data[15].id}`)}
                    >
                      See Details
                    </button>
                  </div>
                )}
              </div>

              <div className="text">
                <div className="scroll-vid">
                  <video autoPlay loop muted playsInline>
                    <source src={leatherjacket} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            <section className="dual">
              <div className="text">
                <div className="scroll-vid">
                  <video autoPlay loop muted playsInline>
                    <source src={buttonjacket} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="featured-container">
                {data[15] && (
                  <div className="simple-product">
                    <h5>{data[15].title}</h5>
                    <h6 className="small">${data[16].price}</h6>
                    <button
                      type="button"
                      className="see-details"
                      onClick={() => navigate(`/products/${data[16].id}`)}
                    >
                      See Details
                    </button>
                  </div>
                )}
              </div>
            </section>
          </ul>

          <section className="all">
            <h1 id="shirts" className="scroll-offset">
              Women's Shirts
            </h1>

            <div className="all-container">
              {[data[17], data[18], data[19], data[20]].map(
                (p) =>
                  p && (
                    <ProductCard key={p.id} product={p} navigate={navigate} />
                  )
              )}
            </div>
          </section>

          <ul className="double-container">
            <h1 className="scroll-offset">Computer Monitor</h1>

            <section className="dual">
              <div className="featured-container">
                {data[15] && (
                  <div className="simple-product">
                    <h5>{data[12].title}</h5>
                    <h6 className="small">${data[12].price}</h6>
                    <button
                      type="button"
                      className="see-details"
                      onClick={() => navigate(`/products/${data[12].id}`)}
                    >
                      See Details
                    </button>
                  </div>
                )}
              </div>

              <div className="text">
                <div className="computer-vid">
                  <video autoPlay loop muted playsInline>
                    <source src={computer} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
          </ul>

          <h1 id="menshirts" className="scroll-offset">
            {" "}
            Men's Shirts
          </h1>

          <ul className="all-container">
            {data.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} />
            ))}
          </ul>

          <ul className="double-container">
            <h1 className="scroll-offset">Gaming Monitor</h1>

            <section className="dual">
              <div className="featured-container">
                {data[15] && (
                  <div className="simple-product">
                    <h5>{data[13].title}</h5>
                    <h6 className="small">${data[13].price}</h6>
                    <button
                      type="button"
                      className="see-details"
                      onClick={() => navigate(`/products/${data[13].id}`)}
                    >
                      See Details
                    </button>
                  </div>
                )}
              </div>

              <div className="text">
                <div className="computer-vid">
                  <video autoPlay loop muted playsInline>
                    <source src={gamingmonitor} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
          </ul>

          <h1 id="tech">Tech Accessories</h1>

          <ul className="all-container">
            {[8, 9, 10, 11].map(
              (i) =>
                data[i] && (
                  <ProductCard
                    key={data[i].id}
                    product={data[i]}
                    navigate={navigate}
                  />
                )
            )}
          </ul>
        </>
      )}
    </article>
  );
}
