
import './App.css';
import { Page } from './Nilesh/Pages/Pages';
import { Loader } from './Pooran/Pages/Loader/Loader';
import { LoginPage } from './Pooran/Pages/Login/Login';
import { SignupPage } from './Pooran/Pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      {/* <Page/> */}
      <LoginPage/>
      {/* <SignupPage/> */}
    </div>
  );
}

export default App;
