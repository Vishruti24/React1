// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';



function App() {
  return (
    <>
{/* pass name as var is props and pass it in navbar props and in classname give its title*/}
<Navbar title="Textutills" aboutText="About us"/>
{/* <Navbar/> */}

<div className="container my-3">
<TextForms heading="Enter the text to analyze below"/>
</div>

    </>
  );
}

export default App;
