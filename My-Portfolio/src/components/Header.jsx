import React, { useState } from "react";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


function Header() {
  const [icon,seticon]=useState(1);
  function updateicon(id){
  seticon(id);
  }

  return (
    <div className={styles.headercontainer}>
      <nav>Dheeraj Mehra</nav>
      <ul>
        <li>
          <a className={styles.active} href="/">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
        <li>
          <a href="#Skill">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className={styles.menubtn}>
       <i onClick={()=>updateicon(1)}>
        
         <FiMenu />
         </i>
       <i onClick={()=>updateicon(2)}>
        <IoMdClose />
        </i>
        </div>
     

    </div>
  );
}

export default Header;
