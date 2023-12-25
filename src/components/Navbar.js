import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../images/bin.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <div className="logo">
            <img
              src={require("../images/bin.png")}
              style={{ height: "6rem", width: "9rem" }}
            />
            <span>inaya</span>
          </div>

          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i class="fa-solid fa-list"></i> My Projects{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa-solid fa-blog"></i> Blogs{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa-solid fa-user"></i>Resume{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa-regular fa-address-book"></i>Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
