import React from 'react'
import { ProjectWrapper, ProjectDataWrapper } from './ProjectStyles'
import {FiSearch} from "react-icons/fi"
import styles from "./Project.module.css"

const Project = () => {
    return (
        <>
        <ProjectWrapper>
            <div>
                <h2>Projects</h2>
                <button>CREATE NEW PROJECT</button>
            </div>
            <div>
                <h4>FILTER</h4>
                <select>
                    <option value="active">Active</option>
                    <option value="archieved">Archieved</option>
                    <option value="all">All</option>
                </select>
                <select >
                    <option value="clients">Clients</option>
                    <option value="all">All</option>
                    <option value="pooran">Pooran</option>
                </select>
                <select>
                    <option value="">Access</option>
                    <option value="">Public</option>
                    <option value="">Private</option>
                </select>
                <select>
                    <option value="">Billable</option>
                    <option value="">Non billable</option>
                </select>
                <h1><FiSearch/></h1>
                <input type="text" placeholder = "Project name" />
                <button>APPLY FILTER</button>
            </div>
        </ProjectWrapper>
        
            <div className = {styles.heading}>
                <h5>Projects</h5>
            </div>
            <div className = {styles.projectDetails}>
                <input type="checkbox"/>
                <label >NAME</label>
                <label className = {styles.projectLabel} >CLIENT</label>
                <label className = {styles.projectLabel}>TRACKED</label>
                <label className = {styles.projectLabel}>AMOUNT</label>
                <label className = {styles.projectLabel}>PROGRESS</label>
                <label className = {styles.projectLabel}>ACCESS</label>
            </div>

        </>
    )
}

export { Project }
