import { ThemeContext } from "@react-pdf-viewer/core";
import { Briefcase, Download, House, Pickaxe, User } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex gap-4 h-full w-full items-center justify-between px-4">
      <div className="flex gap-4">
        {/* Common Menu Items */}
        <div>
          <NavLink
            to="/"
            data-tooltip-id="tooltip"
            data-tooltip-content="Home"
            className={({ isActive }) =>
              `w-14 h-14 border border-base-300 rounded-box hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center gap-2 ${
                isActive ? "text-accent" : "transition"
              }`
            }
          >
            <House />
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/about"
            data-tooltip-id="tooltip"
            data-tooltip-content="About"
            className={({ isActive }) =>
              `w-14 h-14 border border-base-300 rounded-box hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center gap-2 ${
                isActive ? "text-accent" : "transition"
              }`
            }
          >
            <User />
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/projects"
            data-tooltip-id="tooltip"
            data-tooltip-content="Work"
            className={({ isActive }) =>
              `w-14 h-14 border border-base-300 rounded-box hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center gap-2 ${
                isActive ? "text-accent" : "transition"
              }`
            }
          >
            <Briefcase />
          </NavLink>
        </div>
      </div>

      <div>
        <a
          href="https://drive.google.com/file/d/1nX8GiXPEzsIQD-TnUjrCUpHq_2nOqdp3/view?usp=sharing"
          target="_blank"
          data-tooltip-id="tooltip"
          data-tooltip-content="Download Resume"
          rel="noopener noreferrer"
          className="h-14 px-6 border border-base-300 rounded-box hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center gap-2"
        >
          Resume <Download size={20} />
        </a>
      </div>
      {/* Tooltip Component */}
      <Tooltip
        id="tooltip"
        place="bottom"
        style={{
          backgroundColor: theme === "light" ? "#18181b" : "#f4f4f5",
          color: theme === "light" ? "#ffffff" : "#000000",
          padding: "6px 20px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Menu;
