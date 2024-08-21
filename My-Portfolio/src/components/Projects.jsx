import React, { useState } from "react";
import styles from "./Projects.module.css";
import projectone from "./images/Projectone.png";
import projecttwo from "./images/Projecttwo.png";
import projectthree from "./images/Projectthree.png";
import projectfour from "./images/Projectfour.png";
import projectfive from "./images/Projectfive.png";
import projectsix from "./images/Projectsix.png";


function Projects(props) {
  const [tabval, settabval] = useState(1);
  function updatetoggle(id) {
    settabval(id);
  }
  return (
    <>
      <div id={props.id} className={styles.projectinfo}>
        <h3>PROJECTS</h3>
        Each project is a unique Piece of development
      </div>
      <div className={styles.tabcontainer}>
        <div className={styles.tab} onClick={() => updatetoggle(1)}>
          <p className={styles.tabname}>Basic Projects</p>
          <p>html/css/javascript</p>
        </div>
        <div className={styles.tab} onClick={() => updatetoggle(2)}>
          <p className={styles.tabname}> Projects</p>
          <p>Reactjs</p>
        </div>
        <div className={styles.tab} onClick={() => updatetoggle(3)}>
          <p className={styles.tabname}>Design Projects</p>
          <p>Figma</p>
        </div>
      </div>
      <div className={styles.projectscontainer}>
        <div className={tabval === 1 ? styles.showcontent : styles.content}>
          <div className={styles.projectcontainer }>
            <div>
              <img className={styles.imgcontainer} src={projectone} />
            </div>
            <div className={styles.projectsinfo}>
              <h3>Project-01</h3>
              <p>
                The Tic Tac Toe game is a classic implementation of the beloved
                <br />
                pencil-and-paper game, designed to showcase fundamental
                programming <br />
                concepts and user interface design. This project features a
                clean,
                <br />
                intuitive interface and demonstrates core principles of game
                development,
                <br />
                including game logic, state management, and player interaction.
              </p>
              <a
                className={styles.btn}
                href="https://github.com/Dheerajmehra003/tiktactoe-game"
                target="_blank"
              >
                view code
              </a>
              <a
                className={styles.btn}
                href="https://wondrous-bublanina-98c568.netlify.app/"
                target="_blank"
              >
                Play Game
              </a>
            </div>
          </div>
        </div>
        <div className={tabval === 1 ? styles.showcontent : styles.content}>
          <div className={styles.projectcontainer}>
            <div>
              <img className={styles.imgcontainer} src={projecttwo} />
            </div>
            <div className={styles.projectsinfo}>
              <h3>Project-02</h3>
              <p>
                The Rock Paper Scissors game is a digital rendition of the
                classic
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
              <a
                className={styles.btn}
                href="https://github.com/Dheerajmehra003/rockpaper-game"
                target="_blank"
              >
                view code
              </a>
              <a
                className={styles.btn}
                href="https://effulgent-cassata-4c0220.netlify.app/"
                target="_blank"
              >
                Play Game
              </a>
            </div>
          </div>
        </div>
        <div className={tabval === 1 ? styles.showcontent : styles.content}>
          <div className={styles.projectcontainer}>
            <div>
              <img className={styles.imgcontainer} src={projectthree} />
            </div>
            <div className={styles.projectsinfo}>
              <h3>Project-03</h3>
              <p>
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
              <a
                className={styles.btn}
                href="https://github.com/Dheerajmehra003/Currency-converter"
                target="_blank"
              >
                view code
              </a>
              <a
                className={styles.btn}
                href="https://mellifluous-squirrel-f65517.netlify.app/"
                target="_blank"
              >
                Play site
              </a>
            </div>
          </div>
        </div>
        <div className={tabval === 2 ? styles.showcontent : styles.content}>
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
              <a
                className={styles.btn}
                href="https://github.com/Dheerajmehra003/calculator"
                target="_blank"
              >
                view code
              </a>
              <a
                className={styles.btn}
                href="https://silver-concha-c087c6.netlify.app/"
                target="_blank"
              >
                Play site
              </a>
            </div>
          </div>
        </div>
        <div className={tabval === 2 ? styles.showcontent : styles.content}>
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
                This project demonstrates key skills in web or mobile
                development, user
                <br />
                experience design, and task management.
              </p>
              <a
                className={styles.btn}
                href="https://github.com/Dheerajmehra003/todoapp"
                target="_blank"
              >
                view code
              </a>
              <a
                className={styles.btn}
                href="https://incandescent-bunny-78107f.netlify.app/"
                target="_blank"
              >
                Play site
              </a>
            </div>
          </div>
        </div>
        <div className={tabval === 3 ? styles.showcontent : styles.content}>
          <div className={styles.projectcontainer}>
            <div>
              <img className={styles.imgcontainer} src={projectsix} />
            </div>
            <div className={styles.projectsinfo}>
              <h3>Project-06</h3>
              <p>
                This project is an animated design created using Figma, showcasing <br />
                my ability to blend design principles with interactive elements.<br />
                 The goal was to show design a  portfolio with animation.<br />
              </p>
              <a
                className={styles.btn}
                href="https://www.figma.com/design/4xsQIo5V2vzaFB0BxDb1fh/Untitled?m=auto&t=hhLDCDFkXaTtXaxh-6"
                target="_blank"
              >
                view Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
