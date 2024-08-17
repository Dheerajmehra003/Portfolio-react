import React from "react";
import styles from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  return (
    <div className={styles.ContactContainer}>
      <div className={styles.contactinfo}>
        Get-In-Touch
        <h1>CONTACT</h1>
      </div>
      <div className={styles.contactlayout}>
        <div className={styles.layoutsideone}>
          <div className={styles.number}>
            <IoCall />
            9911820415
          </div>
          <div className={styles.number}>
            <IoIosMail />
            dheerajsinghmehra0405@gmail.com
          </div>
          <div className={styles.number}>
            <IoLocationSharp />
            Panchkula,Chandigarh
          </div>
        </div>
        <div className={styles.layoutsidetwo}>
          <form>
          <label>First Name</label><br/>
          <input
            className={styles.inputstyle}
            type="text"
            placeholder="Your name.."
            name="name"
          /><br/>
          <label>Mail</label><br/>
          <input type="text"
           className={styles.inputstyle}
           placeholder="Your gmail.."
            name="email" /><br/>

          <label>Message</label><br/>
          <textarea 
          className={styles.messagestyle} name="message"/><br/>     
         <button type="submit" className={styles.btn}> send</button>
         </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
