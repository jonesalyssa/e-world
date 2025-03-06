import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import NavBar from "./components/Nav";
import SwagDisplay from "./components/AllSwag/swagDisplay";
import logoImage from "./assets/logo.png";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Account from "./components/Account/Account";

import "./index.css";
import ProductList from "./components/ProductList";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="header">
            <img src={logoImage} alt="Logo" className="logo" />
          </div>
          <NavBar />
          <main>
            <ProductList />
            <Routes>
              <Route path="/Inventory" element={<SwagDisplay />} />
              <Route path="/Register" element={<Register />} />
              <Route
                path="/Login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route
                path="/account"
                element={
                  isAuthenticated ? (
                    <Account />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}
