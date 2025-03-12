// import { useDispatch, useSelector } from "react-redux";
// import { setToken } from "./Account/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  // const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  // const [menDropdownOpen, setMenDropdownOpen] = useState(false);
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.userSlice);

  return (
    <div className="NavBar">
      <div className="container">
        <header>
          <nav>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            {/* Women Dropdown
            <div className="dropdown">
              <a
                className="NavLink"
                onClick={() => setWomenDropdownOpen(!womenDropdownOpen)}
              >
                Women
              </a>
              {womenDropdownOpen && (
                <div className="dropdown-menu">
                  <a
                    className="dropdown"
                    onClick={() => navigate("/women/shirts")}
                  >
                    Shirts
                  </a>
                  <a
                    className="dropdown"
                    onClick={() => navigate("/women/jackets")}
                  >
                    Shoes
                  </a>
                  <a
                    className="dropdown"
                    onClick={() => navigate("/women/accessories")}
                  >
                    Accessories
                  </a>
                </div>
              )}
            </div>
            {/* Men Dropdown 
            <div className="dropdown">
              <a
                className="NavLink"
                onClick={() => setMenDropdownOpen(!menDropdownOpen)}
              >
                Men
              </a>
              {menDropdownOpen && (
                <div className="dropdown-menu">
                  <a
                    className="dropdown"
                    onClick={() => navigate("/men/shirts")}
                  >
                    Shirts
                  </a>
                  <a
                    className="dropdown"
                    onClick={() => navigate("/men/jackets")}
                  >
                    Jackets
                  </a>
                  <a
                    className="dropdown"
                    onClick={() => navigate("/men/accessories")}
                  >
                    Accessories
                  </a>
                </div>
              )}
            </div>
            <a className="NavLink" onClick={() => navigate("/home&kitchen")}>
              Home & Kitchen
            </a>
            <a
              className="NavLink"
              onClick={() => navigate("/sale")}
              style={{
                color: "gold",
                textDecoration: "none",
              }}
            >
              Sale
            </a>{" "}
            */}

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
            {/* 
            // This section is commented out until userSlice is implemented.
            // Once ready, uncomment it to enable login/logout logic.

            {!token ? (
              <>
                <a className="NavLink" onClick={() => navigate("/login")}>
                  Login
                </a>
                <a className="NavLink" onClick={() => navigate("/register")}>
                  Register
                </a>
              </>
            ) : (
              <>
                <a className="NavLink" onClick={() => navigate("/account")}>
                  Account
                </a>
                <a className="NavLink" onClick={() => dispatch(setToken(null))}>
                  Logout
                </a>
              </>
            )}
            */}
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
