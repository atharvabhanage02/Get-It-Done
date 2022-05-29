import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <Link to="/" class="ecom-name">
            📝GetItDone
          </Link>
        </div>
        <div class="search-container">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="search-bar"
            aria-hidden="true"
            placeholder="Search"
          />
        </div>
        <div class="user-activity-details">
          {/* <FiFilter
            className="filter-icon"
            onClick={() => showFilterOption((prev) => !prev)}
          /> */}
        </div>
      </div>
    </nav>
  );
};
