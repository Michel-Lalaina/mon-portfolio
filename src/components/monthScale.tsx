import { useRef, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import IntegrationInstructions from "@mui/icons-material/IntegrationInstructions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function MonthlySalesChart() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 220,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Boostrap",
        "Tailwind ",
        "Type Script",
        "React",
        "Next.JS",
        "Node.JS",
        "FastAPI",
        "Java",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: { title: { text: undefined } },
    grid: { yaxis: { lines: { show: true } } },
    fill: { opacity: 1 },
    tooltip: {
      x: { show: false },
      y: { formatter: (val: number) => `${val}` },
    },
  };

  const series = [
    {
      name: "Niveau",
      data: [300, 385, 386, 398, 380, 395, 300, 250],
    },
  ];

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      return () => el.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1000px] overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 pt-5 dark:border-gray-300 white:bg-white/[0.03] sm:px-6 sm:pt-6">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-gray-900 p-2 bg-gray-50 w-full rounded-lg">
            <IntegrationInstructions className="text-purple-700" fontSize="medium" />
            Frameworks & Tech
          </div>
        </div>

        <div
          ref={scrollRef}
          className="relative max-w-full overflow-x-auto custom-scrollbar sm:overflow-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        >
          <div className="-ml-5 min-w-[650px] xl:min-w-full w-full pl-2 h-60">
            <Chart options={options} series={series} type="bar" height={220} />
          </div>

          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByAmount(-100)}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 block sm:hidden bg-white shadow-md p-1 rounded-full z-10"
              aria-label="scroll left"
            >
              <ArrowBackIosNewIcon fontSize="small" className="text-gray-500 animate-pulse" />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={() => scrollByAmount(100)}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 block sm:hidden bg-white shadow-md p-1 rounded-full z-10"
              aria-label="scroll right"
            >
              <ArrowForwardIosIcon fontSize="small" className="text-gray-500 animate-pulse" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
