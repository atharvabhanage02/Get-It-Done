import { FiFilter } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css";
import { useAuth } from "../../Context/Auth/auth-context";
import { useState } from "react";
import { Filter } from "../Filters/Filters";
export const Navbar = () => {
  const {
    auth: { isLogIn },
    logOutUser,
  } = useAuth();
  const [filterOption, showFilterOption] = useState(false);
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <div class="ecom-name">📝GetItDone</div>
        </div>
        {isLogIn && (
          <div class="search-container">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="search-bar"
              aria-hidden="true"
              placeholder="Search"
            />
          </div>
        )}
        <div class="user-activity-details">
          {isLogIn && (
            <span data-tooltip="Filter">
              <FiFilter
                className="filter-icon"
                onClick={() => showFilterOption((prev) => !prev)}
              />
            </span>
          )}
          {filterOption && <Filter showFilters={showFilterOption} />}
          {isLogIn && (
            <span data-tooltip="Logout">
              <FiLogOut className="filter-icon" onClick={() => logOutUser()} />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};
