import React from "react";
import {Link} from "react-router-dom";
import styles from "./Newproject.module.css";
import reactjs from "./images/neweleven.jpg";
import html from "./html.json"
import figma from "./figma.json"
import Lottie from "lottie-react"
import ecommerce from './images/e-commerce.jpg'

function Newproject(props) {
  return (
    <div id={props.id} className={styles.projectcontainer}>
      <p className={styles.projectheading}>PROJECTS</p>
      <div className={styles.projectscontainer}>
        <div className={styles.project}>
          <Link to="/projecthtml">
        <Lottie className={styles.imgcontainer}  animationData={html}/>
        <p className={styles.imageinfo}>Html Projects</p>
        </Link>
        </div>
        <div className={styles.project}>
        <Link to="/projectreact">
      <img className={styles.imgcontainer} src={reactjs} />
        <p className={styles.imageinfo}>Reactjs Projects</p>
        </Link>
        </div>
        <div className={styles.project}>
        <Link to="/projectfigma">
        <Lottie className={styles.imgcontainer}  animationData={figma}/>
        <p className={styles.imageinfo}>Design Projects</p>
        </Link>
        </div>
        <div className={styles.project}>
        <Link to="/projectecommerce">
        <img className={styles.imgcontainer} src={ecommerce} />
        <p className={styles.imageinfo}>Ecommerce Projects</p>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Newproject;
