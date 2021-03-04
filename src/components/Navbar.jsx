import React from "react";
import Banner from "../media/DR_landing.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="banner">
        <Link to="/">
          <img src={Banner} alt="Dandelion Root Banner" />
        </Link>
        <nav>
          <Link to="/addroot">Add</Link>
          <Link to="/blogs">Blogs</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
