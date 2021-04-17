import React, {useState, useEffect} from 'react'
import styles from "./Client.module.css"
import {ClientWrapper } from './ClientStyles'
import {GrFormEdit} from "react-icons/gr"
import {BsThreeDotsVertical} from "react-icons/bs"
import axios from "axios"
import Modal from "react-modal"
import { shallowEqual, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

Modal.setAppElement('#root')

export const Client = () => {

    
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
    const [addClient, setAddClient] = useState("")

    const {id, loginAuth} = useSelector(state => state.login, shallowEqual)


export const Client = () => {
    const id = "dc014ad9-8452-44f0-9c47-5a2b07a8c681"
    const [query, setQuery] = useState("");


    const [data, setData] = useState([]);
    const handlesearch = () => {
     axios.get(`https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`)
     .then((res)=>{
        setData(res.data.clients);
     })
    }
  
    useEffect(() => {
      handlesearch();
    }, []);

    console.log(data)


    const handleChange = (e) => {
        const value = e.target.value
        setAddClient(value)
    }
 
    const handleAdd = () => {
        axios.get(`https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`)
        .then((res) => {
            var obj = res.data.clients
            obj = [...obj, addClient]
            axios.patch(`https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`,{
                clients: obj
            }).then((res) => {
                handlesearch()
                setAddClient("")
            })
        })
    }

    return loginAuth ? (

    return (
        <>
            <ClientWrapper>
                <div>
                    <h2>Clients</h2>
                </div>
                <div>
                    <div>
                        <select>
                            <option value="active">Show active</option>
                            <option value="archived">Show archived</option>
                            <option value="all">Show all</option>
                        </select>
                        <input style = {{width: "180px", marginLeft: "1%"}} type="text" placeholder = "Search by name"/>

                        <input style = {{width: "200px", marginLeft: "48%"}} 
                                type="text" 
                                placeholder = "Add new client" 
                                value = {addClient} 
                                onChange= {handleChange}
                            />
                        <button onClick = {handleAdd} >ADD</button>

                        <input style = {{width: "200px", marginLeft: "48%"}} type="text" placeholder = "Add new client"/>
                        <button>ADD</button>

                    </div>
                </div>
            </ClientWrapper>
            <div className = {styles.heading}>
                <h5>Name</h5>
            </div>
            <div className = {styles.clientDetails}>
                {data && data.map((item) => (
                    <div className = {styles.clientsName}>
                        <div><h4>{item}</h4></div>
                        <div>

                            {/* Edit Modal */}
                            <button onClick = {() => setEditModalIsOpen(true)}  ><GrFormEdit size = "25px"/> </button>
                           
                            <Modal isOpen = {editModalIsOpen} onRequestClose = {() => setEditModalIsOpen(false)} className = {styles.editModal}>
                                <h2>Edit Client</h2>
                                <hr/>
                                <div className = {styles.inputBox} >
                                    <h4>Change name</h4>
                                    <input type="text"/>
                                </div>
                                <hr/>
                                <div className = {styles.editModalButtons} >
                                    <button  onClick = {() => setEditModalIsOpen(false)} >Cancel</button>
                                    <button >SAVE</button>
                                </div>
                            </Modal>

                            {/* Delete Modal */}
                            <button onClick = {() => setDeleteModalIsOpen(true)}  ><BsThreeDotsVertical size = "25px"/></button>
                            <Modal isOpen = {deleteModalIsOpen} onRequestClose = {() => setDeleteModalIsOpen(false)} className = {styles.deleteModal} >
                                <h2>Delete</h2>
                                <hr/>
                                <p>Are you sure you want to delete {item} </p>
                                <h4>The {item} client will also be removed from projects it is assigned to. This action cannot be removed. </h4>
                                <hr/>
                                <div className = {styles.deleteModalButtons} >
                                    <button  onClick = {() => setDeleteModalIsOpen(false)} >Cancel</button>
                                    <button >DELETE</button>
                                </div>
                            </Modal>

                            
                    <div style = {{display: "flex",border: "1px solid lightgrey"}}>
                        <div style = {{ marginLeft: "5px"}} ><h4 style = {{width: "205px"}} >{item}</h4></div>
                        <div style = {{marginLeft: "72%"}}>
                            <button><GrFormEdit size = "25px"/> </button>
                            <button><BsThreeDotsVertical size = "25px"/></button>
                        </div>   
                    </div>                  
                ))}              
            </div>          
        </>

    ) : <Redirect to = "/login" />
    )

}
