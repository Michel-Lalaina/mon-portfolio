import Slider from "react-slick";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import "slick-carousel/slick/slick.css";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick-theme.css";

import car from "../assets/image/car.png";
import caisse from "../assets/image/Home.png"
import assistImg from "../assets/image/qcm.png";
import exempleImg from "../assets/image/L3.png";
import maisonImg from "../assets/image/maison.jpg";
import quizPerso from "../assets/image/quiz-Lm.png";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import WorkHistory from "@mui/icons-material/WorkHistory";


const projects = [
  {
    name: "Evaluation",
    description: "L'application qui vous aide à vos test et à évaluer votre capacité à raisonner!",
    tags: ["ReactJS", "FastAPI", "SQLAlchemy"],
    image: quizPerso,
    link: "#",
    date: "Mars 2025",
  },
  {
    name: "TAM",
    description: "Plateforme web pour le suivi des vols et gestion de maintenance des avions",
    tags: ["React", "Node", "Tailwind CSS", "Sequelize"],
    image: exempleImg,
    link: "#",
    date: "Novembre-Decembre 2025 ",
  },
  {
    name: "Qcm_CAP",
    description: "Qcm_CAP est une application mobile de quiz pour évaluer et recruter  un candidat en ligne.",
    tags: ["NodeJS", "NextJS", "Prisma"],
    image: assistImg,
    link: "#",
    date: "Janvier-Mars 2025",
  },
  {
    name: "HouseApp",
    description: "Application mobile de résérvation, de vente ou locaion des maison à Madagascar.",
    tags: ["React Native", "Node", "Mysql"],
    image: maisonImg,
    link: "#",
    date: "Juillet 2024",
  },

  {
    name: "Cars",
    description: "Application de gestion de location des vehicules.",
    tags: ["React ", "Node", "Mysql"],
    image: car,
    link: "#",
    date: "Mey 2024",
  },

  {
    name: "Recette",
    description: "Application windows de burreau(desktop) de gestion d'encaissement des recettes .",
    tags: ["Java ", "Mysql"],
    image: caisse,
    link: "#",
    date: "Juin 2023",
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="shadow-slate-100 relative bg-gradient-to-br from-gray-950 via-slate-50 to-gray-200 p-10 rounded-2xl overflow-hidden ">
      <h1 className="text-4xl font-extrabold mb-4"> Mes Projets <WorkHistory className="text-purple-900" /></h1>
      <p className="text-gray-600 mb-6">
        Des échantillons de projets personnels, projets de clients et aussi des projets sur lesquels j'ai contribué.
      </p>

      <Slider {...settings} className="mx-auto w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="px-2 p-4">
            <Card className="h-full min-h-[450px] shadow-white rounded-2xl hover:shadow-xl transition-shadow duration-200 hover:scale-105 flex flex-col">
              <CardMedia component="img" className="h-48 object-contain w-full p-2 rounded-lg"
                image={project.image} alt={project.name}
              />
              <CardContent className="flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Typography variant="body2" className="text-blue-500">APK</Typography>
                </div>
                <h2 className="font-bold text-lg">{project.name}</h2>
                <Typography variant="body2" color="textSecondary" className="mt-2 flex-grow">
                  {project.description}
                </Typography>
                <div className="text-sm">{project.date}</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Chip key={i} label={tag} color="primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>


      <div className="text-center mt-10">
        <Button variant="contained" color="inherit" className="bg-gray-800 text-gray-50 px-6 py-2 rounded">
          Voir plus
        </Button>
      </div>
      <div className="absolute rounded-lg top-0 left-0 px-2 py-2 text-white font-bold mt-4 hover:underline">
        Mis à jour 2025
      </div>
    </div>
  );
};

export default Projects;
