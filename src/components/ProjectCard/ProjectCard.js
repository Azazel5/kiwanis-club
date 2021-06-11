import './ProjectCard.scss'

const ProjectCard = props => {
    const { image, projectTitle, projectDate } = props

    return (
        <div className="project-card">
            <img src={image} alt="project" className="project-card__img" />
            <div className="project-card__textcontainer">
                <h3 className="project-card__textcontainer--heading">{projectTitle}</h3>
                <span className="project-card__textcontainer--date">{projectDate}</span>
            </div>
        </div>
    )
}

export default ProjectCard