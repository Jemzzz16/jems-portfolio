import React from "react";
import styles from "./About.module.scss";
import Pinkdimond from '../../images/pinkdimondmobileabout.png';
import Profiledimond from '../../images/Profilemobile.png';
import greendimondabout from '../../images/greendimondabout.png';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <p className={styles.jem}><Link to='/'>.Jem</Link></p>
      
      <div className={styles.aboutmain}>
        <img className={styles.pinkdimond} src={Pinkdimond} alt='#'></img>
        <img className={styles.greendimond} src={greendimondabout} alt='#'></img>
        <img className={styles.profiledimond} src={Profiledimond} alt='#'></img>
        <p className={styles.about}>.About</p>
        <p className={styles.paraone}>
          Hi I’m Jem, full stack 
          Web developer, photographer 
          and enthusiastic professional.
        </p>
        <p className={styles.paratwo}>
          Let me capture and develop 
          your ideas 
          into something amazing!
        </p>
        <ul className={styles.parathree}>
          <li>HTML, CSS, SASS</li>
          <li>JavaScript, React</li>
          <li>Jest, Cypress, Enzyme</li>
          <li>Github, OOP, TDD</li>
          <li>Java</li>
          <li>Spring, SQL, API</li>
        </ul>
      </div>
    </>
  );
};


export default About;