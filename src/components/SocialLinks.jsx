
import { FaXTwitter } from "react-icons/fa6";
import { Facebook, Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <>
      {/* social icons */}
      <div className="w-[176px] h-[176px] rounded-3xl grid grid-cols-2 gap-4">
        <a
          href="https://github.com/RayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-200 w-full h-full rounded-3xl border border-base-300 hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/arayhansohel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-200 w-full h-full rounded-3xl border border-base-300 hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.facebook.com/RayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-200 w-full h-full rounded-3xl border border-base-300 hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center"
        >
          <Facebook />
        </a>
        <a
          href="https://x.com/rrayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-200 w-full h-full rounded-3xl border border-base-300 hover:text-accent hover:bg-base-300 transition-colors flex items-center justify-center"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
