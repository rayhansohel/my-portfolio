import { ThemeContext } from "@react-pdf-viewer/core";
import { Download, House, Pickaxe, User } from "lucide-react";
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
              `w-14 h-14 btn btn-primary border-none shadow-none hover:text-accent ${
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
              `w-14 h-14 btn btn-primary border-none shadow-none hover:text-accent ${
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
              `w-14 h-14 btn btn-primary border-none shadow-none hover:text-accent ${
                isActive ? "text-accent" : "transition"
              }`
            }
          >
            <Pickaxe />
          </NavLink>
        </div>
      </div>

      <div>
        <a
          href="/src/assets/Resume_of_Md_Abdur_Rayhan_Fontend_Developer.pdf"
          download
          data-tooltip-id="tooltip"
          data-tooltip-content="Download Resume"
          rel="noopener noreferrer"
          className="h-14 px-6 btn btn-primary border-none shadow-none text-xl font-normal border border-base-300 dounded-3xl hover:text-accent transition-colors flex items-center justify-center"
        >
          Resume <Download />
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
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default Menu;
