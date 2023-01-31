import './index.css'
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
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={false} uncheckedIcon={false} onColor={"#e65339"}/>
            <label>
              <span className="material-symbols-outlined">
                dark_mode
              </span>
            </label>
          </div>
          
          {/* HEADER CONTENT */}

          <h1>Affirm <br/> 
          <span className='titleStyles'>Believe</span>
          <br/> Recieve</h1>

          <p className='headerTxt'>Affirmations are positive statements that can help you overcome negative thinking and self-sabotaging beliefs. Use them to manifest goals, dreams or anything your heart desires. Enter your favourite affirmations below, and repeat daily!</p>

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
