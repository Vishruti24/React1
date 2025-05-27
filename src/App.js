// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';



function App() {
  const[Mode,setMode]=useState("light");//wheather darkmode is enable or not

  const toggleMode = () => {
    if(Mode ==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#062a5e";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
{/* pass name as var is props and pass it in navbar props and in classname give its title*/}
 <Navbar title="Textutills"mode={Mode} toggleMode={toggleMode}/> 
  {/* <Navbar title="Textutills" aboutText="About us" mode={Mode} toggleMode={toggleMode}/> */}
{/* <Navbar/> */}

<div className="container my-3">
 <TextForms heading="Enter the text to analyze below" mode={Mode}/> 
 {/* <About/>  */}
</div>
    </>
  );
}
export default App;





// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
// function App() {
//   return (
//     <>
//       {/* pass name as var is props and pass it in navbar props and in classname give its title*/}
//       {/* <Navbar title="Textutills" aboutText="About us" /> */}
//       <Navbar/>

//       <div className="container my-3">
//         <TextForms heading="Enter the text to analyze below" />
//       </div>

//     </>
//   );
// }

// export default App;