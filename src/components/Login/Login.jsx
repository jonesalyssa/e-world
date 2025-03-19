import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "/src/index.css";

import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();

  const handleSubmit = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(form);
      console.log(response.token);
      localStorage.setItem("token", response.token);
           navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  //   const storedEmail = localStorage.getItem("userEmail");
  //   const storedPassword = localStorage.getItem("userPassword");

  //   if (email === storedEmail && password === storedPassword) {
  //     localStorage.setItem("isAuthenticated", "true");
  //     setIsAuthenticated(true);
  //     navigate("/");
  //   } else {
  //     alert("Invalid login credentials");
  //   }
  // };

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
              id="exampleInputUsername1"
              value={form.username}
              onChange={handleSubmit}
              name="username"
              required
            />
          </div>
          <div>
            <strong>
              <label>Password: </label>
            </strong>
            <input
              type="password"
              id="exampleInputPassword1"
              value={form.password}
              name="password"
              onChange={handleSubmit}
              required
            />
          </div>
          <div className="login-buttons">
            <button type="submit">Login</button>
          </div>
          <div className="register-buttons">
            <Link to="/Register">
              <button type="button" className="btn btn-primary">
                Register
              </button>
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
