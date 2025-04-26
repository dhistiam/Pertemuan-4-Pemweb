// Import Libraries
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import  "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List.jsx";
import Top from "./Top.jsx";
import {Button} from "react-bootstrap";
// import Footer from "./Footer.jsx";
// membuat komponen dengan kelas

// create component
const App = () =>{
  const [state,setState] = useState(10)
  const increase =()=>{
    setState (count=>count+1)
  }
  const decrease =()=>{
    setState (count=>count-1)
  }
  return (
    <div className="App">
      <Button Varian="Primary" >Testing</button>
      <br/>
      <span>{state}</span>
      <br/>
      <button onClick={decrease} >kurang</button>

      <Header list="10 daftar makanan" />
      <Top />
      <h1>Hello React</h1>
      <p>Nama saya dhisti</p>
      
      <List />
      <Footer/>                                     
    </div>
  );
}
// Export Default
export default App;