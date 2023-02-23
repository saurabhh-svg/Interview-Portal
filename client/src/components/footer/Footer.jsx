import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/saurabh-singh-82287a201/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/saurabhh-svg">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://twitter.com/kyayrrsaurabh">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/saurabhh.__/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <div>&copy; Saurabh Singh All rights reserved.</div>
    </footer>
  );
};

export default Footer;
