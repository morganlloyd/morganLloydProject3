import './index.css'
import AffirmationWall from './components/AffirmationWall';
import ReactSwitch from 'react-switch';
import { createContext, useState} from 'react';

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

          <div className='themeSwitch'>
            <label>
              <span class="material-symbols-outlined">
                sunny 
              </span>
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={false} uncheckedIcon={false} onColor={"#1111"}/>
            <label>
              <span class="material-symbols-outlined">
                dark_mode
              </span>
            </label>
          </div>

          <h1>Affirm <br/> 
          <span className='titleStyles'>Believe</span>
          <br/> Recieve</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ducimus? Quasi facilis veritatis doloribus impedit vero expedita est earum rem facere sequi accusamus!</p>

        </header>

        <AffirmationWall />

      </div>

    </ThemeContext.Provider>
  );
}

export default App;
