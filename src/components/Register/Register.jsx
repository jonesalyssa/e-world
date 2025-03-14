import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();

  const handleRegister = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form).unwrap();
      console.log("Registration successful:", response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // if (form.password !== form.confirmPassword) {
  //   alert("Passwords do not match");
  //   return;
  // }

  // navigate("/register");

  return (
    <section className="login-section">
      <div>
        <form onSubmit={submit}>
          <div>
            <h1>
              <strong>REGISTER</strong>
            </h1>
            <label>
              {" "}
              <strong>Username:</strong>
            </label>
            <input
              type="text"
              value={form.username}
              name="username"
              onChange={handleRegister}
              required
            />
          </div>
          <div>
            <label>
              {" "}
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={handleRegister}
              required
            />
          </div>
          <div>
            <label>
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={handleRegister}
              required
            />
          </div>
          <div>
            <label>
              {" "}
              <strong>Retype Password:</strong>
            </label>
            <input
              type="password"
              value={form.confirmPassword}
              name="confirmPassword"
              onChange={handleRegister}
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
