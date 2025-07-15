import React, {createContext, useState, useEffect, useContext} from 'react'


export const ThemeContext = createContext();

const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(
    localStorage.getItem('theme') == 'dark' ? 'dark' : 'light'
    );

    useEffect(()=>{
      localStorage.setItem('theme', theme)
      document.querySelector("html").setAttribute("data-theme", theme);


    }, [theme]);

    const toggleTheme = ()=>{
    if(theme == 'dark'){
        setTheme('light')
    
    }else{
        setTheme('dark')
    }
  
  }

  const values = {
     theme, toggleTheme
  }

  return(
    <ThemeContext.Provider value={values}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
