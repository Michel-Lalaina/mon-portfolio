import { useState } from "react";
import photoP from "../assets/image/pdpef.jpg";
import GitHub from "@mui/icons-material/GitHub";
import Animation from "../components/Particles";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Animation />
      <div
        className={`flex flex-col md:flex-row justify-between items-center md:p-12 min-h-screen transition-all duration-100 ${darkMode
          ? "bg-gradient-to-br from-[#222229] to-[#00000a] text-white"
          : "bg-gray-100 text-black"
          }`}
      >

        {/* Bouton Mode moderne */}
        {/* Switch Mode Premium */}
        <div className="absolute md:top-20 md:right-14 flex justify-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
      flex items-center gap-2 px-6 py-2 rounded-full
      backdrop-blur-xl transition-all duration-500
      hover:scale-105 active:scale-95 select-none
      
      ${darkMode
                ? "bg-black/50 text-white"
                : "bg-gray-200 text-gray-900 shadow-[0_0_12px_rgba(0,0,0,0.15)]"
              }
    `}
            style={{ border: "none", outline: "none" }}
          >
            {/* Icône cercle premium */}
            <span
              className={`
        flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500
        ${darkMode
                  ? "bg-black/40 text-gray-50"
                  : "bg-gray-800 text-white"
                }
      `}
              style={{ border: "none", outline: "none" }}
            >
              {darkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
            </span>

            <span className="font-medium text-sm tracking-wide">
              Mode
            </span>
          </button>
        </div>




        {/* <div className=" absolute md:top-10 md:ml-96 flex justify-center md:w-full">
          <button
            className="bg-gray-800 text-slate-200 p-3 rounded-full shadow-lg 
               hover:bg-gray-600 transition-all duration-500 transform 
               animate-pulse flex items-center justify-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LightModeRounded fontSize="small" /> : <DarkModeRounded fontSize="small" />}
          </button>
        </div> */}


        {/* Partie gauche */}
        <div className="space-y-4 flex flex-col text-center md:text-left">
          <div className={`p-3 rounded-2xl inline-block font-bold text-sm md:text-base ${darkMode ? "bg-[#1a1a3b] text-red-500" : "bg-gray-300 text-red-700"}`}>
            <span className="text-lg md:text-2xl font-bold">. </span>Ingénieur <br />
            <span className="text-gray-400"> Dev full-stack</span>
          </div>
          <div className={`p-3 rounded-2xl inline-block text-sm md:text-base ${darkMode ? "bg-[#1a1a3b] text-gray-300" : "bg-gray-200 text-gray-700"}`}>
            <a href="https://mail.google.com/michelramanantenasoa@mgmail.com" target="_blank">
              <span className="text-lg md:text-2xl font-bold">. </span>Dis bonjour à <br />
              <span className={`${darkMode ? "text-white" : "text-black"}`}>Michel Lalaina</span>
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="https://github.com/Michel-Lalaina" target="_blank" className="hover:text-white transition-transform transform hover:scale-125"><GitHub /></a>
            <a href="https://linkedin.com/Michel Ramanantenasoa" target="_blank" className="hover:text-blue-500 transition-transform transform hover:scale-125"><LinkedIn /></a>
            <a href="tel:+261340309755" className="hover:text-green-500 transition-transform transform hover:scale-125"><WhatsApp /></a>
            <a href="https://mail.google.com/michelramanantenasoa@mgmail.com" target="_blank" className="hover:text-red-400 transition-transform transform hover:scale-125"><EmailOutlined /></a>
          </div>
        </div>

        {/* Partie centrale */}
        <div className="text-center flex flex-col items-center mt-6 md:mt-10">
          <img src={photoP} alt="Michel Lalaina" className="p-1 w-40  h-40 md:w-3/4 md:h-64 rounded-full shadow-lg object-cover mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold">Michel <span className=" text-slate-500">Ram</span></h1>
          <span className="text-slate-500 font-semibold ">Lalaina</span>
          <p className="mt-2 text-sm md:text-base">
            "Do you have a project? <span className="text-red-500 font-bold underline">Let’s Talk</span>!"
          </p>
        </div>

        {/* Partie droite */}
        <div className="text-center flex  text-sm md:text-right space-x-4 md:space-y-4 md:flex-col font-bold mt-6 md:mt-0">
          <div><span className="text-lg md:text-xl">100%</span><br /> Satisfaction client</div>
          <div><span className="text-lg md:text-xl">20+</span><br /> Projets</div>
          <div><span className="text-lg md:text-xl">3+</span><br /> Années d'experience.</div>
        </div>
      </div>
    </>
  );
};

export default Home;
