// Everything commented out below is bc we don't have userSlice finished yet.
// It can be brought back in when it's time. - Alyssa

// import { useDispatch, useSelector } from "react-redux";
// import { setToken } from "./Account/userSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.userSlice);

  return (
    <div className="NavBar">
      <div className="container">
        <header>
          <nav>
            <a className="NavLink" onClick={() => navigate("/Inventory")}>
              Inventory
            </a>
            <a className="NavLink" onClick={() => navigate("/cart")}>
              Cart
            </a>
            <a className="NavLink" onClick={() => navigate("/login")}>
              Login
            </a>
            {/*
            {!token ? (
              <>
                <a
                  className="nav-item nav-link"
                  onClick={() => navigate("/Inventory")}
                >
                  Login
                </a>
                <a
                  className="nav-item nav-link"
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <a
                  className="nav-item nav-link"
                  onClick={() => navigate("/account")}
                >
                  Account
                </a>
                <a
                  className="nav-item nav-link"
                  onClick={() => dispatch(setToken(null))}
                >
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
