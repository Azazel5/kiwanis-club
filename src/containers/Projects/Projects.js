import './Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Project1 from '../../assets/Images/project1.jpg'
import Project2 from '../../assets/Images/project2.jpg'
import Project3 from '../../assets/Images/project3.jpg'

const Projects = props => {
    return (
        <div className="projects">
            <ProjectCard 
                image={Project1} projectTitle="Stationary and food distribution" 
                projectDate="01/01/2020" /> 
            <ProjectCard 
                image={Project2} projectTitle="Bara Relief and Blood Donation" 
                projectDate="01/01/2020" /> 
            <ProjectCard 
                image={Project3} projectTitle="First Aid Box Distribution" 
                projectDate="01/01/2020" /> 
        </div>
    )
}

export default Projects