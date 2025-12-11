
import Code from "@mui/icons-material/Code";
import Build from "@mui/icons-material/Build";
import Speed from "@mui/icons-material/Speed";
import BugReport from "@mui/icons-material/BugReport";
import VerifiedIcon from '@mui/icons-material/Verified';
import DesignServices from "@mui/icons-material/DesignServices";
  // import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
  // import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';



  const expertise = [
    {
      name: "Conception",
      icon: <DesignServices className="text-indigo-500" />,
      desc: "Analyse et modélisation de l'architecture du projet."
    },
    {
      name: "Développement Frontend",
      icon: <Code className="text-blue-500" />,
      desc: "Création d'interfaces modernes et réactives."
    },
    {
      name: "Développement Backend",
      icon: <Build className="text-amber-600" />,
      desc: "Mise en place de la logique serveur et des bases de données."
    },
    {
      name: "Test & Validation",
      icon: <BugReport className="text-rose-500" />,
      desc: "Tests unitaires, d'intégration et vérifications qualité."
    },
    {
      name: "Optimisation",
      icon: <Speed className="text-emerald-500" />,
      desc: "Optimisation des performances et du SEO."
    },
  ];
  
  export default function MonthlyTarget() {
    return (
      <div className="rounded-2xl md:w-1/2 border w-full -ml-40 md:ml-10 border-gray-100 bg-white dark:border-gray-300 white:bg-white/[0.03]">
        <div className="px-2 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-white sm:px-6 sm:pt-6">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-gray-800 flex items-center gap-1">
                Expertise <VerifiedIcon className="text-purple-700" />
              </div>
              <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                Développement Full-Stack, allant de la conception à la réalisation du projet
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 gap-6 pt-8">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-3 border border-gray-200 rounded-xl hover:shadow-md transition duration-300">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  