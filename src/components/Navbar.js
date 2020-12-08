import React from "react";
import { Link } from "react-router-dom"
// import "./style.css";


function Navbar() {
  return (
    <ul class="nav justify-content-center">
      <li className="nav-item">
        <Link
          to="/AboutMe"
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >Home</Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
        >Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
        >Contact</Link>
      </li>
    </ul>
  )
}
export default Navbar;