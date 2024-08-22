import React, { useState } from "react";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isopen,setisopen]=useState(false);
  function updateicon(){
  setisopen(!isopen);
  }

  return (
    <div className={styles.headercontainer}>
      <nav>Dheeraj Mehra</nav>
      <ul className={isopen ? styles.list : styles.listactive} >
        <li>
          <a className={styles.active} href="/">Home</a>
        </li>
        <li>
          <a className={styles.active} href="#About">About</a>
        </li>
        <li>
          <a className={styles.active} href="#NewProject">Project</a>
        </li>
        <li>
          <a className={styles.active} href="#Skill">Skills</a>
        </li>
        <li>
          <a className={styles.active} href="#Contact">Contact</a>
        </li>
      </ul>
      <div className={styles.menubtn}>
       <i onClick={updateicon}>
        
         <FiMenu id={styles.icon} />
         </i>
              </div>
     

    </div>
  );
}

export default Header;
