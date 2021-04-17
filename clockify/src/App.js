import './App.css';
import { Routes } from './Nilesh/Navbar/Routes';
import { Client } from './Rajat/Components/ClockifyClient/Client';
import {Project} from "./Rajat/Components/ClockifyProject/Project"
import {TimeTracker} from "./Rajat/Components/ClockifyTimeTracker/TimeTracker"
import {RoutesLogin} from "./LoginNavbar/Navbar2/RoutesLogin"



function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
