import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-700 to-gray-900 text-white py-6">
      {/* Effet d'arrière-plan subtile */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_10%,_transparent_10%)] bg-[size:2rem_2rem] opacity-10"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Nom & Droits */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold tracking-wide text-slate-300">Michel Lalaina Ramanantenasoa</h1>
          <p className="text-gray-400 text-sm mt-1">© 2025 Tous droits réservés. Imaginé & développé par Michel Ramanantenasoa.</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6 mt-4 md:mt-0 ">
          {[
            { href: "https://github.com/Michel-Lalaina", icon: <GitHub fontSize="large" />, color: "hover:text-gray-300" },
            { href: "https://linkedin.com/Michel-Ramanantenasoa", icon: <LinkedIn fontSize="large" />, color: "hover:text-blue-500" },
            { href: "https://twitter.com/", icon: <Twitter fontSize="large" />, color: "hover:text-blue-400" },
            { href: "https://mail.google.com/michelramanantenasoa@mgmail.com", icon: <Email fontSize="large" />, color: "hover:text-red-400" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-transform transform hover:scale-125 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
