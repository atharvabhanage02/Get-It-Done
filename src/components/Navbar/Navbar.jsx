import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css";
import { useAuth } from "../../Context/Auth/auth-context";
export const Navbar = () => {
  const {
    auth: { isLogIn },
    logOutUser,
  } = useAuth();

  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <div class="ecom-name">📝GetItDone</div>
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
          <FiFilter className="filter-icon" />
          {isLogIn ? (
            <FiLogOut className="filter-icon" onClick={() => logOutUser()} />
          ) : null}
        </div>
      </div>
    </nav>
  );
};
