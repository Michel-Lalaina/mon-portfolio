
import Home from "../Pages/accueil";
import About from "../Apropos/Abouts";
import Footer from "../Layouts/footer";
import Header from "../Layouts/Header";
import Contact from "../Pages/contact";
import Projects from "../Pages/projet";
import Competences from "../Pages/skills";
import { useNavigate } from "react-router-dom";


const Profile: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <div className="fixed mb-50">
        <Header />
      </div>
      <div className="flex flex-col items-center h-full">

        {/* Accueil */}
        <div id="accueil" className="mb-40 top-4  w-full">
          <Home />
        </div>

        <div id="apropos" className=" mb-40 top-2  w-full">
          <About />
        </div>
        <div id="competance" className="mb-40 w-full top-2">
          <Competences />
        </div>

        <div id="projet" className="mb-40 w-full">
          <Projects />
        </div>

        <div id="contact" className="mb-40 w-full">
          <Contact />
        </div>

        <div  className="right-0 text-white" onClick={() => navigate("/Admin")}
        >
          +
        </div>

        <div id="footer" className=" w-full">
          <Footer />
        </div>


      </div>
    </div>
  );
};

export default Profile;
