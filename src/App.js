import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Meme darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
    
  );
}

export default App;
