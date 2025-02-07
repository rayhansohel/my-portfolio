import { Helmet } from "react-helmet-async";
import ProfilePhoto from "../../assets/others/my-photo-squire.jpg";
import Navbar from "../../components/Navbar";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "./../../components/ThemeToggle";
import { motion } from "framer-motion";

const Home = () => {
  const zoomIn = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>Rayhan Sohel</title>
      </Helmet>
      <div className="p-4 rounded-[40px] bg-base-100 border border-base-300 min-h-[calc(100vh-32px)] flex gap-4">
        {/* Left Section  */}
        <div className="flex-1 min-h-[calc(100vh-66px)] flex flex-col gap-4">
          {/* Navbar  */}
          <motion.div
            className="w-full flex gap-4"
            initial="hidden"
            animate="visible"
            variants={zoomIn}
          >
            <Navbar />
          </motion.div>

          {/* Photo and About */}
          <div className="w-full flex gap-4">
            {/* Photo  */}
            <motion.div
              className="bg-base-200 w-60 h-60 rounded-[40px] p-4 border border-base-300"
              initial="hidden"
              animate="visible"
              variants={zoomIn}
            >
              <img
                className="rounded-3xl object-cover overflow-hidden w-full"
                src={ProfilePhoto}
                alt="My Photo"
              />
            </motion.div>

            {/* About  */}
            <motion.div
              className="bg-base-200 h-full flex-1 rounded-[40px] border border-base-300 px-12 py-8 flex flex-col gap-2 justify-center"
              initial="hidden"
              animate="visible"
              variants={zoomIn}
            >
              <h3 className="uppercase tracking-[6px] pb-2">Hello!</h3>
              <h1>
                <span className="text-3xl">I'm </span>{" "}
                <span className="text-3xl text-accent">Rayhan Sohel</span>
              </h1>
              <p className="pb-2 tracking-[2px]">
                Web Developer and Designer.
              </p>
            </motion.div>
          </div>

          {/* Skills  */}
          <motion.div
            className="bg-base-200 w-full rounded-[40px] flex flex-1 border border-base-300"
            initial="hidden"
            animate="visible"
            variants={zoomIn}
          ></motion.div>

          <div className="w-full rounded-[40px] flex gap-4">
            <motion.div
              className="bg-base-200 h-full flex-1 rounded-[40px] border border-base-300"
              initial="hidden"
              animate="visible"
              variants={zoomIn}
            ></motion.div>
            <motion.div
              className="bg-base-200 w-64 h-64 rounded-[40px] border border-base-300 p-4"
              initial="hidden"
              animate="visible"
              variants={zoomIn}
            >
              <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/edifica.png')]"></div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-h-[calc(100vh-66px)] rounded-[40px]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <motion.div
                className="bg-base-200 w-72 h-72 rounded-[40px] border border-base-300 p-4"
                initial="hidden"
                animate="visible"
                variants={zoomIn}
              >
                <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/carvex.png')]"></div>
              </motion.div>
              <motion.div
                className="bg-base-200 w-72 h-72 rounded-[40px] border border-base-300 p-4"
                initial="hidden"
                animate="visible"
                variants={zoomIn}
              >
                <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/phingee.png')]"></div>
              </motion.div>
            </div>
            <div className="min-w-[368px] rounded-3xl flex flex-col gap-4">
              <div className="flex gap-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={zoomIn}
                >
                  <SocialLinks />
                </motion.div>
                <motion.div
                  className="w-[176px] h-[176px] rounded-3xl grid"
                  initial="hidden"
                  animate="visible"
                  variants={zoomIn}
                >
                  <div className="bg-base-200 w-full h-full rounded-3xl border border-base-300 flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="w-full flex-1 bg-base-200 rounded-[40px] border border-base-300"
                initial="hidden"
                animate="visible"
                variants={zoomIn}
              ></motion.div>
            </div>
          </div>
          <motion.div
            className="w-full flex-1 bg-base-200 rounded-[40px] border border-base-300"
            initial="hidden"
            animate="visible"
            variants={zoomIn}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
