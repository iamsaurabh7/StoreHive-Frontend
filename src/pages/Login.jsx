import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/auth.action";

function Login() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
