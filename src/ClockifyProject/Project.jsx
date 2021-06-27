import React, {useState} from 'react'
import { ProjectWrapper} from './ProjectStyles'
import {FiSearch} from "react-icons/fi"
import styles from "./Project.module.css"
import Modal from "react-modal"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { addprojectuser, projectaddfunction } from "../Redux/Getdata/action"
import {BsThreeDotsVertical, BsStar} from "react-icons/bs"
import { Redirect, useParams } from 'react-router'

const updatedetail = {
    projecttitle: "",
    clientname: "",
    clientsoption: "",
  };

const Project = () => {

    const {id}  = useParams() 

    // Modal state
    const [openProject, setOpenProject] = useState(false)

    // Add new project state
    const [query, setquery] = React.useState(updatedetail);
    const { projects, clients } = useSelector((state) => state.getdata);
    const {loginAuth} = useSelector((state) => state.login, shallowEqual)
    const handlechangedetail = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        setquery({
            ...query,
            [name]: val
        });
        };

    const dispatch = useDispatch();

    const split = (value) => {
        var str = "";
        for (var i = 0; i < value.length; i++) {
        if (value[i] !== " ") {
            str += value[i];
        }
        }
        return str;
    };

    const handleaddproject = () => {
        let payload = {
            id: id,
            projecttitle: split(query.projecttitle),
            clientname: query.clientname,
            clientsoption: query.clientsoption,
            projects: projects,
            clients: clients
        };
        dispatch(projectaddfunction(payload));
        setquery(updatedetail);
        };

    return loginAuth ? (
        <>
        <ProjectWrapper>
            <div>
                <h2>Projects</h2>
                <button  onClick = {() => setOpenProject(true)} >CREATE NEW PROJECT</button>
                <Modal isOpen = {openProject} onRequestClose = {() => setOpenProject(false)} className = {styles.projectModal} >
                                <h2 className = {styles.modalHeading}>Create new project</h2>
                                <hr/>
                                <div className = {styles.inputBox}>
                                    <input type="text" placeholder = "Enter Project Name" name="projecttitle" value={query.projecttitle} onChange={handlechangedetail}/>
                                    <input type="text" placeholder = "Add Client" name="clientname" value={query.clientname} onChange={handlechangedetail} />
                                </div>
                                <div className = {styles.selectBox}>
                                    <select name="clientsoption" value={query.clientsoption} onChange={handlechangedetail}>
                                    <option value="">None</option>
                                        {clients && clients.map((el) => {
                                            return (
                                            <option value={el} key={el}>
                                                {el}
                                            </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <hr/>
                                <div className = {styles.projectModalButtons} >
                                    <button  onClick = {() => setOpenProject(false)} >Cancel</button>
                                    <button onClick={handleaddproject} >CREATE</button>
                                </div>
                    </Modal>
            </div>
            <div>
                <h4>FILTER</h4>
                <select>
                    <option value="active">Active</option>
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
            <div className = {styles.heading}>
                <h5>Projects</h5>
            </div>
            <table className = {styles.projectDetails}>
                <input type="checkbox"/>
                <label >NAME</label>
                <label className = {styles.clientsLabel}>CLIENT</label>
                <label className = {styles.amountLabel}>AMOUNT</label>
                <label className = {styles.progressLabel}>PROGRESS</label>
                <label className = {styles.accessLabel}>ACCESS</label>
            </table>
            
            
            {projects && projects.map((item) => {
                return <div className = {styles.projectDataDetails} key = {item.title}>
                            <h4  className = {styles.projectsDetails}>{item.title}</h4>
                            <h4  className = {styles.clientsDetails}> {item.clients} </h4>
                            <h4 >0.00 USD</h4>
                            <h4 >-</h4>
                            <h4 >Public</h4>
                        <button  className = {styles.favouriteButton} ><BsStar size = "20px"/></button>
                        <button><BsThreeDotsVertical size = "25px"/></button>
                    </div>
                })}
        </ProjectWrapper>
        </>
    ) : <Redirect to = "/login" />
}

export { Project }
