// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import { BrowserRouter as Router, 
  Routes, 
  Route
  } from 'react-router-dom';


function App() {
  const[Mode,setMode]=useState("light");//wheather darkmode is enable or not
  const [alert, setalert] = useState(null); // alert is an object

const showalert = (message, type) => {
  setalert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setalert(null); 
  }, 3000);
};



  const toggleMode = () => {
    if(Mode ==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#062a5e";
    showalert("Dark mode has been enabled!","success");
    //document.title='Textutills-DarkMode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled!","success");
      //document.title='Textutills-LightMode';
    }
  }
  return (
    <>
{/* pass name as var is props and pass it in navbar props and in classname give its title*/}
 {/* <Navbar title="Textutills"mode={Mode} toggleMode={toggleMode}/>  */}
 <Router>
  <Navbar title="Textutills" mode={Mode} toggleMode={toggleMode} aboutText="About us"/>
 <Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route exact path="/About" element={<About mode={Mode}/>}/>
    <Route exact path="/" element={<TextForms showalert={showalert} heading="Textutills" mode={Mode}/> }/>
 {/* <About/>  */}
 </Routes>
</div>
</Router>
    </>
  );
}
export default App;
