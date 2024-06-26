"use client";
import ReactECharts from "echarts-for-react";
import { useInView } from "react-intersection-observer";
const Allocation = () => {
  const options = {
    tooltip: {
      trigger: "item",
      show: false,
    },
    // legend: {
    //   top: "5%",
    //   left: "center",
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        itemStyle: {
          // borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          color: "#ffffff",
          // position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: "bold",
          },
          itemStyle: {
            opacity: 1,
          },
          focus: "self",
          blurScope: "coordinateSystem",
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 201285000, name: "35%" },
          { value: 143775000, name: "25%" },
          { value: 115020000, name: "20% " },
          { value: 57510000, name: "10%" },
          { value: 28755000, name: " 5%" },
          { value: 28755000, name: "5%" },
        ],
      },
    ],
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="text-white mx-auto max-w-[90rem] p-8" ref={ref}>
      <h1
        className={`text-[#fff9] mb-12 font-normal text-lg text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Allocation and Distribution
      </h1>
      <div className="grid lg:grid-cols-3 ">
        <div className="space-y-4">
          {/* <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85">
            <div className=" bg-black hover:bg-black rounded-lg w-full h-full p-2">
              <h1>Total Supply</h1>
              <p className="text-sm text-white/60">575,100,000 BODC,</p>
              <p className="text-xs text-white/65">
                The initial total supply of BODC tokens is set at 575,100,000
                $BODC, with an inflationary mechanism designed to stimulate
                active participation within the ecosystem.
              </p>
            </div>
          </div> */}
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#5470c6]">
            <h1>Presale</h1>
            <p className="text-sm text-white/60">201,285,000 BODC</p>
            <p className="text-xs text-white/65">
              Allocated for early investors and participants in the initial
              funding phase, providing capital for development and marketing.
            </p>
          </div>
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#91cc75]">
            <h1>Staking Rewards</h1>
            <p className="text-sm text-white/60">143,775,000 BODC</p>
            <p className="text-xs text-white/65">
              Reserved to reward users who participate in staking mechanisms,
              encouraging long-term holding and network security.
            </p>
          </div>
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#fac858] ">
            <h1>Game Incentives</h1>
            <p className="text-sm text-white/60">115,020,000 BODC</p>
            <p className="text-xs text-white/65">
              Used to reward players within the play-to-earn gaming platform,
              fostering active participation and enhancing the gaming ecosystem.
            </p>
          </div>
        </div>
        <ReactECharts
          option={options}
          className=""
          // ref={}
          // style={{ width: 420, height: 420 }}
        />
        <div className="space-y-4">
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#ee6667]">
            <h1>Team and Development</h1>
            <p className="text-sm text-white/60">57,510,000 BODC</p>
            <p className="text-xs text-white/65">
              Allocated to the project team to fund ongoing development,
              operations, and support of the BODC platform.
            </p>
          </div>
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#72c0de]">
            <h1>Marketing and Partnerships</h1>
            <p className="text-sm text-white/60">28,755,000 BODC</p>
            <p className="text-xs text-white/65">
              Set aside for marketing activities, community building, and
              forming strategic partnerships to expand the project’s reach and
              impact.
            </p>
          </div>
          <div className="bg-white p-2 bg-opacity-10 rounded-2xl backdrop-filter border-r-8 border-[#3aa372]">
            <h1>Reserves</h1>
            <p className="text-sm text-white/60">28,755,000 BODC</p>
            <p className="text-xs text-white/65">
              Held in reserve to provide flexibility for unforeseen expenses or
              new opportunities requiring additional funding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allocation;
