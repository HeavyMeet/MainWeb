import React, { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {

      const [theme, setTheme] = useState("dark");

      const toggleTheme = () => {
             if (theme === 'light') {
                    setTheme('dark');
                    localStorage.setItem('theme', theme)
                  } else {
                    setTheme('light');
                    localStorage.setItem('theme', theme)
                  }
          }

          useEffect(() => {
    
            // const theme2 = localStorage.getItem('theme')
            document.body.className = theme;
          });

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
          {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider