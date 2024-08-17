import React from "react";
import styles from "./Projects.module.css";
import projectone from "./images/Projectone.png";
import projecttwo from "./images/Projecttwo.png";
import projectthree from "./images/Projectthree.png";
import projectfour from "./images/Projectfour.png";
import projectfive from "./images/Projectfive.png";

function Projects() {
  return (
    <>
      <div className={styles.projectinfo}>
        <h3>PROJECTS</h3>
        Each project is a unique Piece of development
      </div>
      <div className={styles.projectscontainer}>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projectone} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-01</h3>
            <p>
              {" "}
              The Tic Tac Toe game is a classic implementation of the beloved
              <br />
              pencil-and-paper game, designed to showcase fundamental
              programming <br />
              concepts and user interface design. This project features a clean,
              <br />
              intuitive interface and demonstrates core principles of game
              development,
              <br />
              including game logic, state management, and player interaction.
            </p>
            <button className={styles.btn}>View code</button>
            <button className={styles.btn}>Play</button>
          </div>
        </div>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projecttwo} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-02</h3>
            <p>
              {" "}
              The Rock Paper Scissors game is a digital rendition of the classic
              <br />
              hand game, showcasing fundamental programming and design
              principles.
              <br />
              This project illustrates how simple mechanics can be transformed
              into
              <br />
              an engaging interactive experience, offering both a gameplay
              element
              <br />
              and a practical example of coding proficiency
            </p>
            <button className={styles.btn}>View code</button>
            <button className={styles.btn}>Play</button>
          </div>
        </div>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projectthree} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-03</h3>
            <p>
              {" "}
              The Currency Converter is a practical and user-friendly
              application designed
              <br />
              to provide real-time exchange rate calculations for various
              currencies. <br />
              This project demonstrates key programming and design skills,
              focusing on
              <br />
              integrating APIs, handling user input, and delivering accurate,
              up-to-date financial data.
            </p>
            <button className={styles.btn}>View code</button>
            <button className={styles.btn}>Play</button>
          </div>
        </div>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projectfour} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-04</h3>
            <p>
              The Calculator project is a versatile tool designed to perform
              <br />
              basic and advanced mathematical operations. This application
              <br />
              demonstrates proficiency in programming, user interface design,
              <br />
              and algorithm development. It offers a straightforward yet
              powerful
              <br />
              solution for performing calculations with a user-friendly
              experience.
            </p>
            <button className={styles.btn}>View code</button>
            <button className={styles.btn}>Play</button>
          </div>
        </div>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projectfive} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-05</h3>
            <p>
              The To-Do App is a practical and dynamic application designed to
              help
              <br />
              users efficiently manage their tasks and organize their daily
              activities.
              <br />
              This project demonstrates key skills in web or mobile development,
              user
              <br />
              experience design, and task management.
            </p>
            <button className={styles.btn}>View code</button>
            <button className={styles.btn}>Play</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
