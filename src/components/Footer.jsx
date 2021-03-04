import React from "react";
import github from "../media/github-logo-silhouette-in-a-square.png";
import insta from "../media/instagram.png";
import linked from "../media/linkedin.png";

function Footer() {
  return (
    <footer>
      <p>Site created by emaun a hyde</p>
      <div className="social">
        <a href="https://www.linkedin.com/in/emaunhyde/">
          <img src={linked} alt="linked in link" />
        </a>
        <a href="https://github.com/emaunhyde">
          <img src={github} alt="github in link" />
        </a>
        <a href="https://www.instagram.com/maungrove/">
          <img src={insta} alt="insta in link" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
