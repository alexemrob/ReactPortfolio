import React from "react";
// import "./style.css";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom">
        <span class="navbar-brand h1">Alexandria</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
              <a class="nav-link" href="./AboutMe">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;