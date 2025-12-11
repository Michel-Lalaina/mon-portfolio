import { useState } from "react";
import logo from "../assets/image/Ml.png";
import Info from "@mui/icons-material/Info";
import Work from "@mui/icons-material/Work";
import Build from "@mui/icons-material/Build";
import MenuBook from "@mui/icons-material/MenuBook";
import ContactMail from "@mui/icons-material/ContactMail";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "accueil", icon: <MenuBook fontSize="small" /> },
    { name: "apropos", icon: <Info fontSize="small" /> },
    { name: "competance", icon: <Build fontSize="small" /> },
    { name: "projet", icon: <Work fontSize="small" /> },
    { name: "contact", icon: <ContactMail fontSize="small" /> },
  ];

  return (
    <header className="
      fixed top-0 w-full z-50
      bg-[#0c0c26]/40 backdrop-blur-xl 
      border-b border-white/10 
      shadow-[0_0_25px_rgba(255,0,0,0.15)]
    ">
      <div className="container mx-auto h-16 flex justify-between items-center px-6">

        {/* Logo moderne */}
        <div className="w-20 md:w-24 opacity-90 hover:opacity-100 transition">
          <img src={logo} className="animate-fadeIn"/>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-12 text-gray-200 text-sm tracking-wide">
          {menuItems.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.name}
              smooth={true}
              duration={500}
              className="
                relative cursor-pointer 
                transition-all hover:text-red-500
                before:absolute before:bottom-[-4px] before:left-0 
                before:w-0 before:h-[2px] before:bg-red-500
                before:transition-all before:duration-300 hover:before:w-full
              "
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </ScrollLink>
          ))}
        </nav>

        {/* Bouton mobile */}
        <button 
          className="md:hidden text-white text-3xl transition-transform active:scale-90" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`
        md:hidden fixed top-0 left-0 h-screen w-64
        bg-[#0c0c26]/80 backdrop-blur-xl
        border-r border-white/10 shadow-xl
        transition-transform duration-500 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <ul className="flex flex-col mt-20 space-y-8 pl-8">
          {menuItems.map((item, i) => (
            <li key={i} className="flex items-center space-x-4 text-gray-200">
              <span className="text-red-400">{item.icon}</span>
              <ScrollLink
                to={item.name}
                smooth={true}
                duration={500}
                className="hover:text-red-500 cursor-pointer text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
