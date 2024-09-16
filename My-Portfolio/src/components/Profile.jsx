import React from "react";
import styles from "./Profile.module.css";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import profile from "./profile.json"
import About from "./About";
import Contact from "./Contact";
import Newproject from "./Newproject";
import Skills from "./Skills";

import Lottie from "lottie-react"

function Profile() {
  return (
    <>
      <div className={styles.profilecontainer}>
        <div className={styles.profilefont}>
          <h1 className={styles.heading}>
          <p> React </p>
          <p> Developer</p>
          </h1>
          <p className={styles.profileinfo}>
            Hi I am Dheeraj Mehra. A passionate Front-end react <br />
            Developer based in Panchkula Chandigarh
          </p>
          <div className={styles.iconscontainer}>
            <p id={styles.iconinfo}>Tech Stack</p>
            <FaHtml5 className={styles.icon}  />
            <SiJavascript className={styles.icon} />
            <IoLogoCss3 className={styles.icon} />
            <FaReact className={styles.icon} />
            <IoLogoFigma className={styles.icon} />
          </div>
        </div>
        <div> 
          <Lottie className={styles.imagecontainer} animationData={profile}/>
        </div>
      </div>
      <About id="About" />
      <Newproject id="NewProject"/>
      <Skills id="Skill" />
      <Contact id="Contact" />


    </>
  );
}

export default Profile;
