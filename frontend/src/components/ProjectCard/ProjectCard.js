import './ProjectCard.scss'
import RenderSmoothImage from '../../hooks/RenderSmoothImage/RenderSmoothImage'

const ProjectCard = props => {
    const { project, openModalHandler } = props

    // This is a good way of calling your parent's event handlers i.e. simply pass it 
    // down as props and call it in the child component's event handler 
    const onProjectClickHandler = () => {
        openModalHandler(project)
    }

    return (
        <div className="project-card" onClick={onProjectClickHandler}>
            <RenderSmoothImage src={project.project_image} alt="project" className="project-card__img" />
            <div className="project-card__textcontainer">
                <h3 className="project-card__textcontainer--heading">{project.project_title}</h3>
                <span className="project-card__textcontainer--date">{project.project_date}</span>
            </div>
        </div>
    )
}

export default ProjectCard