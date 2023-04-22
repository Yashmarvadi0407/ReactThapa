import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App1;






////////////////////////////////

import React, { useState, createContext, useContext } from "react"
import ReactDOM from "react-dom"

const languages = ["JavaScript", "Python"]
const LanguageContext = createContext({
    languages,
    language: languages[0],
    setLanguage: () => {},
})

function App() {
    const [language, setLanguage] = useState(languages[0])
    return (
        <LanguageContext.Provider value={{ languages, language, setLanguage }}>
            <MainSection />
        </LanguageContext.Provider>
    )
}

function MainSection() {
    const { languages, language, setLanguage } = useContext(LanguageContext)
    const currentIndex = languages.indexOf(language)
    const toggleLanguage = () => {
        if (currentIndex === languages.length - 1) {
            setLanguage(languages[0])
        } else {
            setLanguage(languages[currentIndex + 1])
        }
    }
    return (
        <div>
            <p id="favoriteLanguage">{`Favorite programing language: ${language}`}</p>
            <button id="changeFavorite" onClick={toggleLanguage}>
                Toggle language
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
