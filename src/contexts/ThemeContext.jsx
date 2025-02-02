import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default theme is "dark"
  const [theme, setTheme] = useState("dark");

  // Apply the theme to the document's root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Provide the theme and setTheme function to the rest of the app
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define the prop types for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Default export for ThemeContext
export default ThemeContext;
