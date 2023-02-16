import './index.css'
import Header from './components/Header';
import AffirmationWall from './components/AffirmationWall';
// npmjs.com/package/react-switch
import ReactSwitch from 'react-switch';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className="app" id={theme}>

        <header className='wrapper'>

          {/* LIGHT/DARK SWITCH */}

          <div className='themeSwitch'>
            
            <label>
              <span className="material-symbols-outlined">
                sunny 
              </span>
            </label>

            <label>
              <span className="sr-only">
                switch to {theme === "dark" ? "light theme" : "dark theme"}
              </span>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={false} uncheckedIcon={false} onColor={"#e65339"}/>
            </label>
            
            <label>
              <span className="material-symbols-outlined">
                dark_mode
              </span>
            </label>
          </div>
          
          {/* HEADER CONTENT */}

          <Header />

        </header>

        {/* MAIN COMPONENTS */}

        <main>

            <AffirmationWall />

        </main>
        
        </div>

        
        <footer id='dark light'>
          made with 🖤 by Morgan Lloyd at Juno College 
        </footer>

    </ThemeContext.Provider>
  );
}

export default App;
