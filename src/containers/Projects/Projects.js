import React from 'react'
import { useState, useRef } from 'react'

import './Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Project1 from '../../assets/Images/project1.jpg'
import Project2 from '../../assets/Images/project2.jpg'
import Project3 from '../../assets/Images/project3.jpg'
import ImageModal from '../../components/Modals/ImageModal/ImageModal'

const Projects = props => {
    /** Hooks */
    const [modalOpen, setModalOpen] = useState({ 'status': false, 'selectedProject': null })
    const modalBoxRef = useRef()

    /** Event handlers **/
    const openModalHandler = (project) => {
        setModalOpen({ 'status': true, 'selectedProject': project })
    }

    const closeModalHandler = () => {
        setModalOpen({ 'status': false, 'selectedProject': null })
    }

    /** Sample JSON structure  */
    const projectInfo = [
        {
            'key': 1,
            'projectTitle': 'Stationary and food distribution',
            'projectDate': '01/01/2020',
            'projectImage': Project1,
            'description': 'Project Description'
        },

        {
            'key': 2,
            'projectTitle': '66th Annual Circle K International Convention',
            'projectDate': '01/01/2020',
            'projectImage': Project2,
            'description': 'Project Description'
        },

        {
            'key': 3,
            'projectTitle': '66th Annual Circle K International Convention',
            'projectDate': '01/01/2020',
            'projectImage': Project3,
            'description': 'Project Description'
        },
    ]

    /** Mapped/filtered variables  */

    // Pass the openModalHandler and project to ProjectCard component, so it 
    // can call it in its own event handler and connect it to the project-card div 
    const projects = projectInfo.map(project => (
        <React.Fragment key={project.key}>
            <ProjectCard project={project} openModalHandler={openModalHandler} />
        </React.Fragment>
    ))
    
    // If the modal's status is open, render the ImageModal component; else, just 
    // render the mapped projects 
    return (
        <div className="projects">

            {modalOpen.status &&
                <ImageModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}
                    selectedProject={modalOpen.selectedProject} />}

            {projects}
        </div>
    )
}

export default Projects