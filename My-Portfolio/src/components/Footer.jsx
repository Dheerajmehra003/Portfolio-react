import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            {" "}
            Developed by Dheeraj © 2024{" "}
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li>
            <FaFacebookSquare className="icon" />
          </li>
          <li>
            <FaInstagramSquare className="icon"  />
          </li>
          <li>
          <FaLinkedin  className="icon"/>
          </li>
          <li>
          <FaGithub className="icon" />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
