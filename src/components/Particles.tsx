import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Animation: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-gray-300 to-slate-400 animate-gradient" />
      <div className="h-[500px] absolute top-0 left-0 w-full overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 100, density: { enable: true, area: 700 } },
              color: { value: "#5A5A5A" },
              shape: { type: "circle" },
              opacity: { value: 0.4 },
              size: { value: 2.5, random: true },
              move: { enable: true, speed: 1 },
              line_linked: { enable: true, distance: 90, color: "#5A5A5A", opacity: 0.4, width: 1 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 70, duration: 0.4 } },
            },
          }}
          className="absolute w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default Animation;
