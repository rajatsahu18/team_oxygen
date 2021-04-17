import { GETDATA_FAILED, GETDATA_SUCCESS } from "./actiontype";

const Gettrackerdata = {
  id: "",
  username: "",
  projects: [],
  clients: []
};

export const timetrackReducer = (state = Gettrackerdata, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETDATA_SUCCESS:
      return {
       ...state,
       id:payload.id,
       username:payload.username,
       projects:payload.projects,
       clients:payload.clients
      };
    case GETDATA_FAILED:
      return state;
    default:
      return state;
  }
};
