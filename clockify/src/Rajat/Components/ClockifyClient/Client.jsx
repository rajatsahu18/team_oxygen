import React, {useState, useEffect} from 'react'
import styles from "./Client.module.css"
import {ClientWrapper } from './ClientStyles'
import {GrFormEdit} from "react-icons/gr"
import {BsThreeDotsVertical} from "react-icons/bs"
import axios from "axios"

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
    )
}
