import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
import "/src/index.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser(form).unwrap();
      console.log("Registration successful:", response);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Try again.");
    }
  };

  return (
    <section className="login-section">
      <div>
        <form onSubmit={submit}>
          <h1>
            <strong>REGISTER</strong>
          </h1>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div>
            <label>
              <strong>Username:</strong>
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              <strong>Retype Password:</strong>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-buttons">
            <button type="submit">Create an Account</button>
          </div>
        </form>
      </div>
    </section>
  );
}
