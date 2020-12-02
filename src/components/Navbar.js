import React from "react";
import { Link } from "react-router-dom"
// import "./style.css";


function Navbar() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link class="nav-link" href="./AboutMe">Home</ Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="./Portfolio">Portfolio</ Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="./Contact">Contact</ Link>
      </li>
    </ul>
  )
}
export default Navbar;