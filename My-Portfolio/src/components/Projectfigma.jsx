import React from "react";
import projectsix from "./images/Projectsix.png";

function Projectfigma() {
  return (
    <div className="Projectscontainer">
      <div className="projectcontainer">
        <div>
          <img className="imgcontainer " src={projectsix} />
        </div>
        <div className="projectsinfo">
          <h3>Project-06</h3>
          <p>
            This project is an animated design created using Figma, showcasing
            <br />
            my ability to blend design principles with interactive elements.
            <br />
            The goal was to show design a portfolio with animation.
            <br />
          </p>
          <a
            className="btn"
            href="https://www.figma.com/design/4xsQIo5V2vzaFB0BxDb1fh/Untitled?m=auto&t=hhLDCDFkXaTtXaxh-6"
            target="_blank"
          >
            view Design
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectfigma;
