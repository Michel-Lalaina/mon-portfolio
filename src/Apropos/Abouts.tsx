
import Info from "@mui/icons-material/Info";
import FormationInfoCard from "../components/Order";
import SoftSkillsCard from "../components/softSkill";
import MonthlyTarget from "../components/monthlyTarget";
 import MonthlySalesChart from "../components/monthScale";


export default function About() {

  return (
    <div className="relative max-w-7xl mx-auto bg-gray-100 w-full  p-4 rounded-2xl shadow-xl">
      <h2 className="py-4 text-4xl font-extrabold text-gray-800 tracking-tight">À propos de moi <Info className="text-purple-900" /></h2>

      <div className="items-center md:ml-20 justify-between w-full flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Section principale - Monthly Sales Chart et Recent Orders */}
        <div className="w-full md:w-5/6 flex flex-col gap-4 md:gap-6">
          {/* Monthly Sales Chart */}
          <div className="w-full">
             <MonthlySalesChart /> 
          </div>

          {/* Recent Orders */}
          <div className="w-full">
            <FormationInfoCard />
          </div>
          <div className="w-full">
            <SoftSkillsCard />
          </div>
        </div>

        {/* Monthly Target - En colonne sur mobile, à droite sur écran large */}
        <div className="w-full md:w-full flex-col -mr-40 gap-4 md:gap-6 mx-auto">
          <div className="w-full md:w-full py-1">
            <MonthlyTarget />
          </div>
        </div>

      </div>

    </div>
  );
}
