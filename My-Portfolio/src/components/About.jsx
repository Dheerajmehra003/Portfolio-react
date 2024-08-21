import React from "react";
import styles from "./About.module.css";
import mycomputer from "./images/computers.jpeg";

function About(props) {
  return (
    <div id={props.id} className={styles.aboutcontainer}>
      <div className={styles.imagecontainer}>
        <img className={styles.aboutimage} src={mycomputer} />
      </div>
      <div className={styles.aboutinfo}>
        <h3>ABOUT ME</h3>
        <p>
          Recently graduated with a bachelor's degree in computer application.
          <br />
          I am eager to start my career as a React Developer.I have a solid
          foundation <br />
          in front-end development, particularly with React where I’ve honed my
          skills <br />
          through various projects and coursework.In addition to my technical
          skills,
          <br />
          I am a strong communicator and acollaborative team player. I thrive in{" "}
          <br />
          environments where I can continuously learn and contributeto
          innovative solutions.
          <br />
          I am particularly excited about opportunities to work on challenging
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
