import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import NavBar from "./components/Nav";
import SwagDisplay from "./components/AllSwag/swagDisplay";
// import logoImage from "./assets/logo.png";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Account from "./components/Account/Account";
import SingleSwag from "./components/SingleSwag/SingleSwag";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart/cart";
import "./index.css";

// import ProductList from "./components/ProductList";

export default function App() {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />

        <div>
          {/* <div className="header">
            <img src={logoImage} alt="Logo" className="logo" />
          </div> */}

          <main className="main-content">
            {/* <ProductList /> */}
            <Routes>
              <Route path="/" element={<SwagDisplay />} />
              <Route path="/Register" element={<Register />} />
              <Route
                path="/products/:id"
                element={
                  <SingleSwag
                    selectedProductId={selectedProductId}
                    setSelectedProductId={setSelectedProductId}
                  />
                }
              />
              <Route
                path="/Login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route path="/About" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
