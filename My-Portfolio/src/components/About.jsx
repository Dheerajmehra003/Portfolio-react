import React from "react";
import styles from "./About.module.css";
import about from "./about.json"

import Lottie from "lottie-react"

function About(props) {
  return (
    <div id={props.id} className={styles.aboutcontainer}>
      <div className={styles.imagecontainer}>
      <Lottie className={styles.aboutimage} animationData={about}/>
      </div>
      <div className={styles.aboutinfo}>
        <h3 className={styles.aboutheading}>ABOUT ME</h3>
        <p>
          Graduated with a bachelor's degree in computer application. 
          <br />
           I am eager to start my career as a React Developer. I have a solid
          foundation <br />
          in front-end development, particularly with react where I’ve honed my
          skills <br />
          through various projects and coursework. In addition to my technical
          skills,
          <br />
          I am a strong communicator and acollaborative team player. I thrive in
          <br />
          environments where I can continuously learn and contributeto
          innovative
          <br />
          solutions. I am particularly excited about opportunities to work on challenging
          <br />
          projects and to grow within a dynamic team.
        </p>
        <a className={styles.btn} href="/resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;
