import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home </a>{" "}
        </li>
        <li>
          <a href="#">About Us</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#FAQ">FAQ </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/saurabh-singh-82287a201/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/saurabhh-svg">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/kyayrrsaurabh">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/saurabhh.__/">
          <InstagramIcon />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saurabh Singh All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
