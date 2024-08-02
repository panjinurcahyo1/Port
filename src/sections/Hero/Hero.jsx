import styles from './HeroStyles.module.css'
import fotouy from '../../assets/1.png'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import cv from '../../assets/MUHAMMAD PANJI NURCAHYO.pdf'

function Hero() {
    return <section id ="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={fotouy} className={styles.hero} alt="Profile picture of Panji"/>
        </div>

        
        
        <div className={styles.info}>
        <h1>
          Muhammad 
          <br />
          Panji 
        </h1>
        <h2>Data Analyst</h2>

        <span>
          <a href="https://www.instagram.com/panjinurcahyo._/" target="_blank">
            <img src={instagram} alt="Instagram icon" />
          </a>
          <a href="https://github.com/panjinurcahyo1" target="_blank">
            <img src={github} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/panji-nurcahyo-84504724b/" target="_blank">
            <img src={linkedin} alt="Linkedin icon" />
          </a>
        </span>

        {/* <p className={styles.description}>
          Bersama saya, kita bisa membangun negeri yang lebih baik.
        </p> */}

        <a href={cv} >
          <button className="hover">Resume</button>
        </a>

      </div>
        </section>
}
export default Hero;