import React from "react";
import styles from "./Projects.module.css";
import projectone from "./images/Projectone.png";
import projecttwo from "./images/Projecttwo.png";
import projectthree from "./images/Projectthree.png";

function Projecthtml() {
  return (
    <>
          <div className={styles.projectscontainer}>
        <div className={styles.projectcontainer}>
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
              concepts and user interface design. This project features a clean,
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

        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={projecttwo} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-02</h3>
            <p>
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
    </>
  );
}

export default Projecthtml;
