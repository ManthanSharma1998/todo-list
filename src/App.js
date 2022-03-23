import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textarea from './components/Textarea';
function App() {
  const [LightMode, setDarkMode] = useState(`light`);
  function ClickRadio() {
    if(LightMode==`light`){
      setDarkMode(`dark`);
      // document.getElementsByClassName(`form-check-label`);
      document.body.style.backgroundColor="black"
    }else{
      setDarkMode(`light`);
      document.body.style.backgroundColor="white"
  
    }
    console.log("ghghg");
  }
  return (
    <div>
      <Navbar radio={ClickRadio} LightMode={LightMode} setDarkMode={setDarkMode}/>
      <Textarea LightMode={LightMode}/>
    </div>
  );
}

export default App;
