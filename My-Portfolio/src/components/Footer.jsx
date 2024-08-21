import React from "react";
import styles from './Footer.module.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footercontainer}>
        <div >
          <span>
            Developed by Dheeraj © 2024
          </span>
        </div>

        <ul>
          <li>
           <a style={{backgroundColor:"white"}} href="https://www.facebook.com/dheeraj.mehra.77398143/" target="_blank" >
           <FaFacebookSquare className="icon" /></a>
          </li>
          <li>
           <a style={{backgroundColor:"white"}} href="https://www.instagram.com/dheerajmehra003/" target="_blank">
           <FaInstagramSquare className="icon"  /></a>
          </li>
          <li> <a style={{backgroundColor:"white"}} href="https://www.linkedin.com/in/dheeraj-mehra-350429284/"  target="_blank">
          <FaLinkedin  className="icon"/>
          </a>
          </li>
          <li><a  style={{backgroundColor:"white"}} href="https://github.com/Dheerajmehra003"  target="_blank">
          <FaGithub className="icon" /></a>
          </li>
        </ul>
    </div>
  );
}

export default Footer;
