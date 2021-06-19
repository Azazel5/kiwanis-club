import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import './Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ImageModal from '../../components/Modals/ImageModal/ImageModal'

const Projects = props => {
    /** Hooks */
    const [projectJson, setProjectJson] = useState(null)
    const [modalOpen, setModalOpen] = useState({ 'status': false, 'selectedProject': null })
    const modalBoxRef = useRef()

    /** Effects */
    useEffect(() => {
        axios.get('http://localhost:8000/projects/')
            .then(response => setProjectJson(response.data))
            .catch(error => console.log("[-] Events could not be loaded"))
    }, [])

    /** Event handlers **/
    const openModalHandler = (project) => {
        setModalOpen({ 'status': true, 'selectedProject': project })
    }

    const closeModalHandler = () => {
        setModalOpen({ 'status': false, 'selectedProject': null })
    }

    /** Mapped/filtered variables  */

    // Pass the openModalHandler and project to ProjectCard component, so it 
    // can call it in its own event handler and connect it to the project-card div 
    let projects = null

    if (projectJson) {
        projects = projectJson.map(project => (
            <React.Fragment key={project.id}>
                <ProjectCard project={project} openModalHandler={openModalHandler} />
            </React.Fragment>
        ))
    }

    // If the modal's status is open, render the ImageModal component; else, just 
    // render the mapped projects 
    return (
        <div className="projects">

            {modalOpen.status &&
                <ImageModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}
                    selectedProject={modalOpen.selectedProject} />}

            {projects && projects}
        </div>
    )
}

export default Projects