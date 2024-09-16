import React from "react";
import styles from "./Projects.module.css";
import forever from "./images/forever.png";
import Shinecake from "./images/Shine cake.png";
import Taskmanger from './images/Taskmanager.png'

const EcommerceProject = () => {
  return (
   <>
    <div className={styles.projectscontainer}>
        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={Shinecake} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-01</h3>
            <p>CakeDelight is a modern and visually delightful online cake shop <br/>
             designed to provide a seamless and enjoyable user experience for <br/>
              cake lovers. This project combines my passion for front-end development <br/>
               and design, bringing together the essential features needed for a <br/>
                successful e-commerce platform.</p>
            <a
              className={styles.btn}
              href="https://github.com/Dheerajmehra003/Shine-cake-house"
              target="_blank"
            >
              view code
            </a>
            <a
              className={styles.btn}
              href="https://shinecake-ecommerceapp.netlify.app/"
              target="_blank"
            >
              view site
            </a>
          </div>
        </div>

        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={forever} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-02</h3>
            <p>Forever is a modern e-commerce platform designed to provide a seamless <br/>
                 shopping experience for fashion enthusiasts. The platform offers a wide <br/>
                  range of stylish clothing and accessories with features that make browsing, <br/>
                   purchasing, and managing orders easy and enjoyable. </p>
            <a
              className={styles.btn}
              href="https://github.com/Dheerajmehra003/Ecommerce-app"
              target="_blank"
            >
              view code
            </a>
            <a
              className={styles.btn}
              href="https://forever-ecommerceapp.netlify.app/"
              target="_blank"
            >
              View site
            </a>
          </div>
        </div>

        <div className={styles.projectcontainer}>
          <div>
            <img className={styles.imgcontainer} src={Taskmanger} />
          </div>
          <div className={styles.projectsinfo}>
            <h3>Project-03</h3>
           <p>The Task Manager application is a powerful, easy-to-use tool designed<br/>
             to help users efficiently organize, track, and manage their daily tasks<br/>
              and projects. Whether it’s for personal use or team collaboration, this<br/>
               app provides a clean, intuitive interface that makes task management<br/>
                a breeze.</p>
            <a
              className={styles.btn}
              href="https://github.com/Dheerajmehra003/Assesment01"
              target="_blank"
            >
              view code
            </a>
            <a
              className={styles.btn}
              href="https://crud-application-dheerajmehra.netlify.app/"
              target="_blank"
            >
              View site
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default EcommerceProject