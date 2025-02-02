import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";
import BrandLogoLight from "../assets/logo/rs-logo-light.png";
import BrandLogoDark from "../assets/logo/rs-logo-dark.png";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/Loading.json";
import Menu from "./Menu";
import { Download } from "lucide-react";

const Navbar = () => {
  const { loading } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  if (loading) {
    return (
      <div className="navbar">
        <Lottie animationData={loadingAnimation} className="w-32" />
      </div>
    );
  }

  return (
    <div className="flex gap-4 w-full">
      {/* Brand Logo */}
      <div className="bg-base-200 w-20 h-20 rounded-3xl border border-base-300">
        <Link to="/">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={theme === "dark" ? BrandLogoLight : BrandLogoDark}
              alt="Logo"
              className="w-9"
            />
          </div>
        </Link>
      </div>
      {/* Menu Items */}
      <div className="bg-base-200 h-20 flex-grow rounded-3xl border border-base-300 flex gap-4 items-center">
        <Menu />

      </div>
    </div>
  );
};

export default Navbar;
