import { Outlet } from "react-router-dom";
import { useEffect } from "react";




const MainLayout = () => {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  
  return (
    <div className="text-sm text-secondary min-h-screen p-4 font-poppins mx-auto max-w-screen-2xl">
          <Outlet />
    </div>
  );
};

export default MainLayout;
