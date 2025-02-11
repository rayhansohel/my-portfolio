import { Helmet } from "react-helmet-async";
import ProfilePhoto from "../../assets/others/my-photo-squire.jpg";
import Navbar from "../../components/Navbar";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "./../../components/ThemeToggle";
import ZoomInMotion from "../../components/ZoomInMotion";
import ContactForm from "../../components/ContactForm";
import LoginForm from "../../components/LoginForm";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rayhan Sohel</title>
      </Helmet>
      <div className="p-4 rounded-[40px] bg-base-100 border border-base-300 min-h-[calc(100vh-32px)] flex gap-4">
        {/* Left Section */}
        <div className="flex-1 min-h-[calc(100vh-66px)] flex flex-col gap-4">
          {/* Navbar */}
          <ZoomInMotion className="w-full flex gap-4">
            <Navbar />
          </ZoomInMotion>

          {/* Photo and About */}
          <div className="w-full flex gap-4">
            {/* Photo */}
            <ZoomInMotion className="bg-base-200 w-60 h-60 rounded-[40px] p-4 border border-base-300">
              <img className="rounded-3xl object-cover overflow-hidden w-full" src={ProfilePhoto} alt="My Photo" />
            </ZoomInMotion>

            {/* About */}
            <ZoomInMotion className="bg-base-200 h-full flex-1 rounded-[40px] border border-base-300 px-12 py-8 flex flex-col gap-2 justify-center">
              <h3 className="uppercase tracking-[6px] pb-2">Hello!</h3>
              <h1>
                <span className="text-3xl">I'm </span>
                <span className="text-3xl text-accent">Rayhan Sohel</span>
              </h1>
              <p className="pb-2 tracking-[2px]">Web Developer and Designer.</p>
            </ZoomInMotion>
          </div>

          {/* Skills */}
          <ZoomInMotion className="bg-base-200 w-full rounded-[40px] flex flex-1 border border-base-300"></ZoomInMotion>

          <div className="w-full rounded-[40px] flex gap-4">
            <ZoomInMotion className="bg-base-200 h-full flex-1 rounded-[40px] border border-base-300"></ZoomInMotion>
            <ZoomInMotion className="bg-base-200 w-64 h-64 rounded-[40px] border border-base-300 p-4">
              <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/edifica.png')]"></div>
            </ZoomInMotion>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-h-[calc(100vh-66px)] rounded-[40px]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <ZoomInMotion className="bg-base-200 w-72 h-72 rounded-[40px] border border-base-300 p-4">
                <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/carvex.png')]"></div>
              </ZoomInMotion>
              <ZoomInMotion className="bg-base-200 w-72 h-72 rounded-[40px] border border-base-300 p-4">
                <div className="bg-base-200 w-full h-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/phingee.png')]"></div>
              </ZoomInMotion>
            </div>
            <div className="min-w-[368px] rounded-3xl flex flex-col gap-4">
              <div className="flex gap-4">
                <ZoomInMotion>
                  <SocialLinks />
                </ZoomInMotion>
                <ZoomInMotion className="w-[176px] h-[176px] rounded-3xl grid">
                  <div className="bg-base-200 w-full h-full rounded-3xl border border-base-300 flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                </ZoomInMotion>
              </div>
              <ZoomInMotion className="w-full flex-1 bg-base-200 rounded-[40px] border border-base-300 p-4 flex items-center justify-center">
                <LoginForm />
              </ZoomInMotion>
            </div>
          </div>
          <ZoomInMotion className="w-full flex-1 bg-base-200 rounded-[40px] border border-base-300"></ZoomInMotion>
        </div>
      </div>
    </>
  );
};

export default Home;

