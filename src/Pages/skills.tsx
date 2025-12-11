import  Card   from "@mui/material/Card";
import Code from "@mui/icons-material/Code";
import GitHub from "@mui/icons-material/GitHub";
import Storage from "@mui/icons-material/Storage";
import Settings from "@mui/icons-material/Settings";
import CardContent from "@mui/material/CardContent";
import Psychology from "@mui/icons-material/Psychology";
import DisplaySettings from "@mui/icons-material/DisplaySettings";
import IntegrationInstructions from "@mui/icons-material/IntegrationInstructions";

const skills = [
  {
    title: "Intelligence Artificielle",
    icon: <Psychology className="text-blue-500" />,
    items: [  "Intégration d’API IA", "Développement d’applications avec IA" ],
  },

  {
    title: "Base de données",
    icon: <Storage className="text-blue-500" />,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "O.R.M",
    icon: <IntegrationInstructions className="text-blue-500" />,
    items: ["Sequilize", "Prisma", "sqlalchemy", "Hibernate"],
  },
  {
    title: "Langages de programmation",
    icon: <Code className="text-blue-500" />,
    items: ["Java", "Javascript", "Python"],
  },
  {
    title: "Méthodologies de Travail",
    icon: <Settings className="text-blue-500" />,
    items: ["2TUP", "Merise", "UML"],
  },
  {
    title: "Gestionnaire de version",
    icon: <GitHub className="text-blue-500" />,
    items: ["Git", "GitLab"],
  },
];

const Competences: React.FC = () => {
  return (
    <div className="relative md:flex-row items-center md:items-start gap-12 p-20 bg-white rounded-2xl overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8">Outils et langages <DisplaySettings className="text-purple-900" /></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="shadow-lg rounded-lg hover:scale-105 ease-in-out transition">
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Competences;
