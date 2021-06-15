import './ProjectCard.scss'

const ProjectCard = props => {
    const { project, openModalHandler } = props

    // This is a good way of calling your parent's event handlers i.e. simply pass it 
    // down as props and call it in the child component's event handler 
    const onProjectClickHandler = () => {
        openModalHandler(project)
    }

    return (
        <div className="project-card" onClick={onProjectClickHandler}>
            <img src={project.projectImage} alt="project" className="project-card__img" />
            <div className="project-card__textcontainer">
                <h3 className="project-card__textcontainer--heading">{project.projectTitle}</h3>
                <span className="project-card__textcontainer--date">{project.projectDate}</span>
            </div>
        </div>
    )
}

export default ProjectCard