import { FC } from "react";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import BoltIcon from "@mui/icons-material/Bolt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

interface Skill {
  label: string;
  value: number;
}

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: Skill[];
}

const SkillCategory: FC<CategoryProps> = ({ icon, title, color, skills }) => {
  return (
    <Card
      className="
        bg-[#1e1f29] 
        text-white 
        rounded-xl 
        shadow-xl shadow-black/50 
        border border-[#2a2d39]
      "
    >
      <CardContent className="p-6 space-y-6">
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className={`text-${color}-400`}>{icon}</span>
          <Typography className="text-lg font-semibold text-gray-100">
            {title}
          </Typography>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {skills.map((s, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>{s.label}</span>
                <span>{s.value}%</span>
              </div>

              <LinearProgress
                variant="determinate"
                value={s.value}
                sx={{
                  height: 6,
                  borderRadius: 6,
                  backgroundColor: "#2c2d36",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `var(--${color}-bar)`,
                  },
                }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const TechnicalExpertise: FC = () => {
  return (
    <section className="w-full py-24 bg-[#0f1117] text-center">
      <h2 className="text-3xl font-bold text-white mb-16">
        Technical Expertise
      </h2>

      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-3 
        gap-10 px-6
      ">
        <SkillCategory
          icon={<PaletteIcon />}
          title="Frontend Development"
          color="blue"
          skills={[
            { label: "React & Next.js", value: 95 },
            { label: "TypeScript", value: 90 },
            { label: "Modern CSS", value: 95 },
            { label: "Web Animation", value: 85 },
          ]}
        />

        <SkillCategory
          icon={<BoltIcon />}
          title="Backend & APIs"
          color="green"
          skills={[
            { label: "Node.js", value: 90 },
            { label: "RESTful APIs", value: 95 },
            { label: "GraphQL", value: 85 },
            { label: "Database Design", value: 88 },
          ]}
        />

        <SkillCategory
          icon={<RocketLaunchIcon />}
          title="Performance & DevOps"
          color="purple"
          skills={[
            { label: "Web Performance", value: 92 },
            { label: "CI/CD", value: 88 },
            { label: "Docker", value: 85 },
            { label: "AWS", value: 82 },
          ]}
        />
      </div>
    </section>
  );
};

export default TechnicalExpertise;
