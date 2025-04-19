// Import Libraries
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import  "./App.css";
import List from "./List.jsx";
import Top from "./Top.jsx";
// import Footer from "./Footer.jsx";
// membuat komponen dengan kelas

// create component
function App() {
  return (
    <div className="App">
      <Top />
      <h1>Hello React</h1>
      <p>Nama saya dhisti</p>
      <Header list="10 daftar makanan" />
      <List />
      <Footer/>                                     
    </div>
  );
}
// Export Default
export default App;