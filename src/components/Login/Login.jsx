import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";
import "/src/index.css";

export default function Login({ setIsAuthenticated }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(form).unwrap();
      console.log(response.token);

      localStorage.setItem("token", response.token);
      localStorage.setItem("isAuthenticated", "true");

      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      alert("Invalid login credentials");
      console.error(error);
    }
  };

  return (
    <section className="login-section">
      <div>
        <form onSubmit={submit}>
          <strong>
            <h1>LOGIN</h1>
          </strong>
          <div>
            <strong>
              <label>Username: </label>
            </strong>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <strong>
              <label>Password: </label>
            </strong>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="login-buttons">
            <button type="submit">Login</button>
          </div>
          <br />
          <div className="login-buttons">
            <Link to="/Register">
              <button type="button">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};
