import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00D1FF] text-[#00242C] py-20 flex flex-col items-center justify-center text-center">
      {/* Thank You Text */}
      <h2 className="text-3xl font-bold mb-8">Thank You..!</h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-10">
        {[
          { icon: <FaInstagram />, link: "#" },
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaFacebook />, link: "#" },
          { icon: <FaGithub />, link: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00242C] text-[#00D1FF] p-4 rounded-lg text-2xl hover:scale-110 transition-transform duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-sm opacity-90 font-medium">
        ©Muhisya. All Rights Reserved
      </p>
    </footer>
  );
}
