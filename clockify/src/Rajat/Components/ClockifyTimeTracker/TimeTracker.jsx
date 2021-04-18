import React, {useState} from 'react'
import { TimeTrackerData, TimeTrackerWrapper } from './TimeTrackerStyles'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {BsTag, BsClock} from "react-icons/bs"
import Modal from "react-modal"
import styles from "./TimeTracker.module.css"
import axios from "axios"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { Redirect, useParams } from "react-router-dom";
import {RiDeleteBinLine} from "react-icons/ri"
import {BiRightArrow} from "react-icons/bi"
import {FaRegCalendarAlt} from "react-icons/fa"


import {addprojectuser,
    descriptionaddfunction,
    getdatauser,
    projectaddfunction,
    updatedescriptionfunction} from "../../../Pooran/Redux/Getdata/action"
import styled from 'styled-components'

const updatedetail = {
    projecttitle: "",
    clientname: "",
    clientsoption: "",
    projectsdata: "",
    projectsdescription: "",
    billbable: false
  };

export const TimeTracker = () => {
// Rajat State here
    const [openProject, setOpenProject] = useState(false)

// Pooran State here
    var current = new Date();
    const [firsttime, setfirstime] = React.useState(false);
    const [descripstatus, setdescripstatus] = React.useState(false);
    const [min, setmin] = React.useState(0);
    const [sec, setsec] = React.useState(0);
    const [hour, sethour] = React.useState(0);
    const [query, setquery] = React.useState(updatedetail);
    const {loginAuth} = useSelector(state => state.login, shallowEqual)
    const handlechangedetail = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setquery({
        ...query,
        [name]: val
    });
    };
    const dispatch = useDispatch();
    const { projects, clients } = useSelector((state) => state.getdata);
    const {id,username} = useParams();
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
      const handledescriptiontimer = () => {
        if (
          query.projectsdata !== "" &&
          query.projectsdescription !== "" &&
          descripstatus === false
        ) {
          setdescripstatus(!descripstatus);
        } else {
          if (descripstatus === true) {
            let descripdata = {
              descriptiontitle: split(query.projectsdescription),
              min: min,
              sec: sec,
              hour: hour,
              endhour: current.getHours(),
              endmin: current.getMinutes(),
              startmin: current.getMinutes() - min,
              starthour: current.getHours() - hour,
              billable: query.billbable,
              id: id,
              username: username,
              projectsdata: query.projectsdata,
              projectsdescription: split(query.projectsdescription),
              count: 1
            };
            dispatch(descriptionaddfunction(descripdata));
           
            setdescripstatus(!descripstatus);
            setsec(0);
            setmin(0);
            sethour(0);
            setquery(updatedetail);
          } else {
            alert("Please Input Proper data");
          }
        }
      };

      const handlestartdescriptionagain = (e) => {
        const { projecttitle, descriptiontitle } = JSON.parse(e.target.value);
        setdescripstatus(!descripstatus);
        if (descripstatus) {
          let again = {
            id: id,
            username: username,
            projecttitle: projecttitle,
            descriptiontitle: descriptiontitle,
            min: min,
            hour: hour,
            sec: sec,
            endhour: current.getHours(),
            endmin: current.getMinutes()
          };
          dispatch(updatedescriptionfunction(again));
          setdescripstatus(!descripstatus);
            setsec(0);
            setmin(0);
            sethour(0);
            setquery(updatedetail);
            }
        };

        const handledeletedescription = (e) => {
            const { projecttitle, descriptiontitle } = JSON.parse(e.target.value);
            axios
              .get(`https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`)
              .then((res) => {
                var obj = res.data.projects.filter((el) => el.title === projecttitle);
                obj = obj[0].description.filter(
                  (el) => el.descriptiontitle !== descriptiontitle
                );
                var secobj = res.data.projects.filter(
                  (el) => el.title === projecttitle
                );
                secobj[0].description = obj;
                var thirdobj = res.data.projects.filter(
                  (el) => el.title !== projecttitle
                );
                let updateddes = [...thirdobj, secobj[0]];
                axios
                  .patch(
                    `https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`,
                    {
                      projects: updateddes
                    }
                  )
                  .then((res) => {
                    let pay = {
                      id: id,
                      username: username
                    };
                    dispatch(getdatauser(pay));
                  });
              });
          };
          React.useEffect(() => {
            if (!firsttime) {
              let payload = {
                id: id,
                username: username
              };
              dispatch(getdatauser(payload));
              setfirstime(true);
            }
            if (descripstatus) {
              var tim = setInterval(() => {
                setsec((prev) => {
                  if (prev === 59) {
                    setmin(min + 1);
                    return (prev = 0);
                  }
                  if (min === 59) {
                    setmin(0);
                    sethour(hour + 1);
                  }
                  if (hour === 24) {
                    sethour(0);
                  }
                  return prev + 1;
                });
              }, 1000);
              return () => {
                clearInterval(tim);
              };
            }
          });



    return loginAuth ? (
        <>
            <TimeTrackerWrapper>
                <input type="text" placeholder = " What are you working on?" name="projectsdescription" value={query.projectsdescription} onChange={handlechangedetail}/>
                <div>
                <button onClick = {() => setOpenProject(true)}  ><AiOutlinePlusCircle size = "20px"/> Project </button>
                    <Modal isOpen = {openProject} onRequestClose = {() => setOpenProject(false)} className = {styles.projectModal} >
                                <h2 className = {styles.heading}>Create new project</h2>
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
                    <select name="projectsdata" value={query.projectsdata} onChange={handlechangedetail}>
                    <option value="">Select Project</option>
                    {projects && projects.map((el) => {
                        return (
                            <option value={el.title} key={el.title}>
                            {el.title}
                            </option>
                        );
                    })}
                    </select>
                </div>
                

                <h2><BsTag/></h2>
                <div>
                <label className = {styles.switch}>
                    <input type="checkbox" name="billbable" value={query.billbable} onChange={handlechangedetail} />
                </label>
                </div>
                
                <h3>{`${hour}:${min}:${sec}`}</h3>
                <button onClick={handledescriptiontimer} >{!descripstatus ? "START" : "STOP"}</button>
                <h4 style = {{ marginLeft: "15px", marginTop: "25px"}} ><BsClock/></h4>
                
            </TimeTrackerWrapper>

            <div>
                <div className = {styles.dayData}>
                    <h4>All Projects</h4>
                </div>
                {projects && projects.map((le) => {
                    return le.description.map((el) => {
                    const dataobjex = {
                        projecttitle: le.title,
                        descriptiontitle: el.descriptiontitle
                    };
                    return (
                        <div className = {styles.projectDataDetails}>
                            <h4>{el.count}</h4>
                            <h3 className = {styles.description}>{el.descriptiontitle}</h3>
                            <h3 className = {styles.projectName}>{`${dataobjex.projecttitle}`}</h3>
                            <h3 className = {styles.clientsName}>{le.clients[0]}</h3>
                            <h2 className = {styles.bsTag}><BsTag/></h2>
                            <div className = {styles.checkBoxInput}>
                                <label className = {styles.switch}>
                                    <input type="checkbox" name="billbable" onChange={handlechangedetail} />
                                </label>
                            </div>
                            <h3 className = {styles.startTime}>{`${el.starthour}:${el.startmin}`}</h3>
                            <h3 className = {styles.dash}>-</h3>
                            <h3 className = {styles.endTime}>{`${el.endhour}:${el.endmin}`}</h3>
                            <h2 className = {styles.calender}><FaRegCalendarAlt/></h2>
                            <h2 className = {styles.totalTime} >{`${el.hour}:${el.min}:${el.sec}`}</h2>
                            <button className = {styles.timerButton} value={JSON.stringify(dataobjex)} onClick={handlestartdescriptionagain} ><img src= {`https://www.vippng.com/png/detail/173-1730359_right-side-triangle-arrow-grey-color-composite-material.png`} alt="Image"/></button>
                            <button className = {styles.deleteButton} value={JSON.stringify(dataobjex)} onClick={handledeletedescription}> <img src= {`https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg`} alt="Image"/> </button>
                        </div>
                    );
                    });
                })}
                
            </div>
        </>
    ) : <Redirect to = "/login" />
}
