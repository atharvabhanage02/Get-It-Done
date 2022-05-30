import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { BiLabel } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <aside className="sidebar">
        <div className="pages">
          <Link
            className={`category-names ${
              pathname === "/notes" ? "cta-bg" : "white"
            } `}
            to="/notes"
          >
            <FaHome className="home-page-icons" /> Home
          </Link>
          <Link
            className={`category-names ${
              pathname === "/archive" ? "cta-bg" : "white"
            } `}
            to="/archive"
          >
            <MdArchive className="home-page-icons" /> Archive
          </Link>
          <Link
            className={`category-names ${
              pathname === "/label" ? "cta-bg" : "white"
            } `}
            to=""
          >
            <BiLabel className="home-page-icons" /> Labels
          </Link>
          <Link
            className={`category-names ${
              pathname === "/trash" ? "cta-bg" : "white"
            } `}
            to="/trash"
          >
            <AiOutlineDelete className="home-page-icons" /> Trash
          </Link>
        </div>
      </aside>
    </div>
  );
};
