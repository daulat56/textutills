import React , { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textforms from './components/Textforms';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() { 
  const [mode,setMode]=useState('light'); //whethder darkmode is enabled or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(()=>{
    setAlert(null);

  },3000);

  // const removebodyClasses=()=>{
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')

  const toggleMode=()=>{

    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#0a093e";
      showAlert("dark mode is enabled","success");
      document.title=" TextUtills-Dark mode is enabled";

      // to highlight any statement in the title

      // setInterval(()=>{
      //   document.title="TextUtills is an amazing platform";
      // },2000);
      // setInterval(()=>{
      //   document.title="Download TextUtills";
      // },1500);
      
    }

    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode is enabled","success");
      document.title="TextUtills-light mode is enabled";
      
    }

  }

     return (  
    <>
      
        <Navbar aboutText="About us" home="Home"  mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
            
          <Route exact path="/" element={<Textforms showAlert={showAlert} heading="Enter the text to analayse below" mode={mode}/>}/>  
        </Routes>
        {/* <Textforms showAlert={showAlert} heading="Enter the text to analayse below" mode={mode}/> */}
        
        </div>
      
      
    </>
  );
}

export default App;
