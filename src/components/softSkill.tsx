import Chart from "react-apexcharts";
import Card from "@mui/material/Card";
import { ApexOptions } from "apexcharts";
import CardContent from "@mui/material/CardContent";
import SettingsAccessibility from "@mui/icons-material/SettingsAccessibility";

const softSkills = [
  { name: "Créativité", value: 85 },
  { name: "Collaboration", value: 90 },
  { name: "Adaptabilité", value: 80 },
  { name: "Résolution ", value: 95 },
];

export default function SoftSkillsCard() {
  const getOptions = (value: number): ApexOptions => {
    return {
      chart: {
        type: "radialBar",
        fontFamily: "Outfit, sans-serif",
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: { size: "50%" },
          track: { background: "#E0E0E0" },
          dataLabels: {
            name: { show: false },
            value: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1D2939",
            },
          },
        },
      },
      fill: { colors: ["#007BFF"] },
      stroke: { lineCap: "round" },
      // Utilisation explicite de `value` dans le graphique
      series: [value],
    };
  };

  return (
    <Card className=" w-full md:w-full max-w-5xl rounded-xl shadow-lg bg-white p-4">
      <div className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        Soft Skills <SettingsAccessibility className="text-purple-700" />
      </div>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-700 font-medium mb-2 text-sm text-center">
                {skill.name}
              </span>
              <div className="w-20 h-20" id="chartDarkStyle">
                <Chart
                  options={getOptions(skill.value)} // L'option `value` est utilisée ici
                  series={[skill.value]}  // La valeur utilisée dans les séries
                  type="radialBar"
                  height={80}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
