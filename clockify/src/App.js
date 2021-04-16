
import './App.css';
import { RoutesNavbar } from './LoginNavbar/Pages/RoutesL';
import { Clients } from './Nilesh/ClientsPage/Clients';
import {  RoutesF} from './Nilesh/Footer/RoutesF';
import { Routes } from './Nilesh/Navbar/Routes';
import { Client } from './Rajat/Components/ClockifyClient/Client';
import {Project} from "./Rajat/Components/ClockifyProject/Project"
import {TimeTracker} from "./Rajat/Components/ClockifyTimeTracker/TimeTracker"
import {RoutesLogin} from "./LoginNavbar/Navbar2/RoutesLogin"



function App() {
  return (
    <div className="App">
         {/* <Routes/> */}
         {/* <RoutesNavbar /> */}
         <RoutesLogin/>
         {/* <TimeTracker/> */}
         {/* <Client/> */}
         {/* <Project/> */}
    </div>
  );
}

export default App;
