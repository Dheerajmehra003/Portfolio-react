import React from 'react'
import projectfour from "./images/Projectfour.png";
import projectfive from "./images/Projectfive.png";

function Projectreact() {
  return (
    <div className='Projectscontainer'>
          <div className="projectcontainer">
            <div>
              <img className="imgcontainer" src={projectfour} />
            </div>
            <div className="projectsinfo">
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
                className="btn"
                href="https://github.com/Dheerajmehra003/calculator"
                target="_blank"
              >
                view code
              </a>
              <a
                className="btn"
                href="https://silver-concha-c087c6.netlify.app/"
                target="_blank"
              >
                Play site
              </a>
            </div>
          </div>
                  <div className="projectcontainer">
            <div>
              <img className="imgcontainer" src={projectfive} />
            </div>
            <div className="projectsinfo">
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
                className="btn"
                href="https://github.com/Dheerajmehra003/todoapp"
                target="_blank"
              >
                view code
              </a>
              <a
                className="btn"
                href="https://incandescent-bunny-78107f.netlify.app/"
                target="_blank"
              >
                Play site
              </a>
            </div>
          </div>
    </div>
  )
}

export default Projectreact;