import axios from "axios";
import { GETDATA_FAILED, GETDATA_REQUEST, GETDATA_SUCCESS } from "./actiontype";

export const getdatasuccess = (payload) => ({
  type: GETDATA_SUCCESS,
  payload
});

export const getdatarequest = (payload) => ({
  type: GETDATA_REQUEST
});

export const getdatafailed = (payload) => ({
  type: GETDATA_FAILED
});

export const getdatauser = (payload) => (dispatch) => {
  dispatch(getdatarequest());
  axios
    .get(
      `https://json-server-projects.herokuapp.com/userdata/${payload.id}`
    )
    .then((res) => {
      dispatch(getdatasuccess(res.data));
    });
};

export const addprojectuser = (payload) => (dispatch) => {
  if (payload.clients !== undefined) {
    axios
      .patch(
        `https://json-server-projects.herokuapp.com/userdata/${payload.id}`,
        {
          projects: payload.projects,
          clients: payload.clients
        }
      )
      .then((res) => {
        dispatch(getdatasuccess(res.data));
      });
  } else {
    axios
      .patch(
        `https://json-server-projects.herokuapp.com/userdata/${payload.id}`,
        {
          projects: payload.projects
        }
      )
      .then((res) => {
        dispatch(getdatasuccess(res.data));
      });
  }
};

export const projectaddfunction = (payload) => (dispatch) => {
  var check = false;
  axios
    .get(
      `https://json-server-projects.herokuapp.com/userdata/${payload.id}`
    )
    .then((res) => {
      var obj = res.data;
      var nextin = obj.projects.map((el) =>
        el.title === payload.projecttitle ? (check = true) : null
      );
      if (check === true) {
        alert("A project with Same Name Exists");
      } else {
        if (payload.clientname === "" && payload.clientsoption !== "") {
          let newproject = {
            title: payload.projecttitle,
            task: [],
            description: [],
            clients: [payload.clientsoption]
          };
          let data = {
            id: payload.id,
            projects: [...payload.projects, newproject]
          };
          dispatch(addprojectuser(data));
        } else if (payload.clientname !== "" && payload.clientsoption === "") {
          let newproject = {
            title: payload.projecttitle,
            task: [],
            description: [],
            clients: [payload.clientname]
          };
          let data = {
            id: payload.id,
            projects: [...payload.projects, newproject],
            clients: [...payload.clients, payload.clientname]
          };

          dispatch(addprojectuser(data));
        } else if (payload.clientname !== "" && payload.clientsoption !== "") {
          let newproject = {
            title: payload.projecttitle,
            task: [],
            description: [],
            clients: [
              payload.clientname,
              payload.clientsoption
            ]
          };
          let data = {
            id: payload.id,
            projects: [...payload.projects, newproject],
            clients: [...payload.clients, payload.clientname]
          };

          dispatch(addprojectuser(data));
        }
      }
    });
};

export const descriptionaddfunction = (query) => (dispatch) => {
  axios
    .get(`https://json-server-projects.herokuapp.com/userdata/${query.id}`)
    .then((res) => {
      var obj = res.data.projects;
      obj = obj.filter((el) => el.title === query.projectsdata);
      var secobj = res.data.projects;
      secobj = secobj.filter((el) => el.title !== query.projectsdata);
      var thirdobj = obj[0].description.filter(
        (el) => el.descriptiontitle !== query.projectsdescription
      );
      if (thirdobj.length === obj[0].description.length) {
        let descripdata = {
          descriptiontitle: query.projectsdescription,
          min: query.min,
          sec: query.sec,
          hour: query.hour,
          endhour: query.endhour,
          endmin: query.endmin,
          startmin: query.startmin,
          starthour: query.starthour,
          billable: query.billbable,
          id: query.id,
          username: query.username,
          projectsdata: query.projectsdata,
          projectsdescription: query.projectsdescription,
          count:1
        };
        let des = res.data.projects.map((el) =>
          el.title === query.projectsdata
            ? { ...el, description: [...el.description, descripdata] }
            : el
        );
        axios
          .patch(
            `https://json-server-projects.herokuapp.com/userdata/${query.id}`,
            {
              projects: des
            }
          )
          .then((res) => {
            console.log(res.data);
            let payload = {
              id: query.id,
              username: query.username
            };
            dispatch(getdatauser(payload));
          });
      } else {
        alert("The Description is Already Defined in this Project");
      }
    });
};



export const updatedescriptionfunction = (payload)=>(dispatch)=>{
  axios.get(`https://json-server-projects.herokuapp.com/userdata/${payload.id}`)
  .then((res) => {
    var obj = res.data.projects.filter((el) => el.title === payload.projecttitle);
    obj = obj[0].description.map((el) =>
      el.descriptiontitle === payload.descriptiontitle
        ? {
            ...el,
            min: el.min + payload.min,
            sec: el.sec + payload.sec,
            hour:el.hour + payload.hour,
            count: el.count + 1,
            endmin: payload.endmin,
            endhour: payload.endhour,
          }
        : el
    );
    var updateddes = res.data.projects.map((el) =>
      el.title === payload.projecttitle ? { ...el, description: obj } : el
    );
    axios.patch(
      `https://json-server-projects.herokuapp.com/userdata/${payload.id}`,
      {
        projects: updateddes
      }
    ).then(res=>{
      let pay = {
        id:payload.id,
        username:payload.username,
      }
        dispatch(getdatauser(pay));
    })
  });
}
