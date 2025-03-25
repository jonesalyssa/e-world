import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SpringTicker from "/src/assets/Spring-Ticker.mp4";
import EWorldNav from "/src/assets/EWorldNav.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky-wrapper">
      <div className="video-banner">
        <video autoPlay loop muted playsInline>
          <source src={SpringTicker} type="video/mp4" />
        </video>
      </div>

      <div className="NavBar sticky-top">
        <div className="container">
          <header>
            <nav className="NavBar">
              <Link to="/">
                <img src={EWorldNav} alt="Logo" className="navimg" />
              </Link>

              {isHome && (
                <div
                  className="dropdown"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link to="/" className="NavLink">
                    Home ▽
                  </Link>
                  {productsDropdownOpen && (
                    <div className="dropdown-menu">
                      <span className="dropdown-title">Products</span>
                      <button
                        onClick={() => scrollToSection("shirts")}
                        className="dropdown-link"
                      >
                        Women's Shirts
                      </button>
                      <button
                        onClick={() => scrollToSection("menshirts")}
                        className="dropdown-link"
                      >
                        Men's Shirts
                      </button>
                      <button
                        onClick={() => scrollToSection("jewlery")}
                        className="dropdown-link"
                      >
                        Jewelry
                      </button>
                      <button
                        onClick={() => scrollToSection("tech")}
                        className="dropdown-link"
                      >
                        Tech Accessories
                      </button>
                    </div>
                  )}
                </div>
              )}

              <a className="NavLink" onClick={() => navigate("/cart")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </a>

              <a className="NavLink" onClick={() => navigate("/account")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </a>

              <a className="NavLink" onClick={() => navigate("/login")}>
                Login
              </a>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
