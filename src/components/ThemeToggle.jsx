import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Handle theme toggle
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center">
      <button
        className="hover:text-accent w-16 h-16 border border-base-300 rounded-full flex items-center justify-center hover:bg-base-300 transition-colors"
        data-tooltip-id="tooltip"
        data-tooltip-content={`${theme === "dark" ? "To Light" : "To Dark"}`}
        onClick={handleThemeChange}
      >
        {theme === "dark" ? (
          <Sun  />
        ) : (
          <Moon  />
        )}
      </button>
      {/* Tooltip Component */}
      <Tooltip
        id="tooltip"
        place="bottom"
        style={{
          backgroundColor: theme === "light" ? "#18181b" : "#f4f4f5",
          color: theme === "light" ? "#ffffff" : "#000000",
          padding: "6px 20px",
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default ThemeToggle;
