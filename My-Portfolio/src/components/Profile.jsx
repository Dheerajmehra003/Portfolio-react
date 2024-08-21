import React from "react";
import myImage from "./images/mehra.jpg";
import styles from "./Profile.module.css";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";


function Profile() {
  return (
    <>
      <div className={styles.profilecontainer}>
        <div>
          <h1>
            Front-End React <br />
            Developer
          </h1>
          <p>
            Hi I am Dheeraj Mehra. A passionate Front-end react <br />
            Developer based in Panchkula Chandigarh
          </p>
          <div className={styles.iconscontainer}>
            <p>Tech Stack</p>
            <FaHtml5 />
            <SiJavascript />
            <IoLogoCss3 />
            <FaReact />
            <IoLogoFigma />
          </div>
        </div>
        <div>
          <img className={styles.imgcontainer} src={myImage} />
        </div>
      </div>
    </>
  );
}

export default Profile;
