import styles from './ProjectsStyles.module.css'
import suit from '../../assets/Desain tanpa judul.png'
import ProjectsCard from '../../common/ProjectsCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='styles.projectsContainer'>
            <ProjectsCard src={suit} link='https://panjinurcahyo1.github.io/Game-suit-8-/' h3="Suit Lokal" p="Game"/> 
        </div>
    </section>
  )
}

export default Projects
