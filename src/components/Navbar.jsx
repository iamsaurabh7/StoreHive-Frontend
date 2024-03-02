import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <button>Login-Logout</button>
    </div>
  );
};

export default Navbar;
