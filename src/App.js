import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Meme darkMode={darkMode}/>
    </div>
  );
}

export default App;
