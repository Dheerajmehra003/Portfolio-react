import React from 'react'
import styles from './Skill.module.css'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.jpeg'
import react from './images/react.png'
import vscode from './images/vs code.png'
import git from './images/git.png'
import figma from './images/figma.jpg'
import bootstrap from './images/bootstrap.jpg'


function Skills(props) {
  return (
    <div id={props.id} className={styles.skillcontainer}>
        <div>
            <h2>Languages,Frameworks and Tools</h2>
            <div className={styles.skills}>
              <img className={styles.skill} src={html} />
              <img className={styles.skill} src={css} />
              <img className={styles.skill} src={js} />
              <img className={styles.skill} src={react} />
              <img className={styles.skill} src={vscode} />  
              <img className={styles.skill} src={git} />
              <img className={styles.skill} src={figma} />
              <img className={styles.skill} src={bootstrap} />
            </div>
        </div>

    </div>
  )
}

export default Skills