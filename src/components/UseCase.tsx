"use client";
import { useInView } from "react-intersection-observer";
const Usecase = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="text-white mx-auto max-w-[90rem] p-8" ref={ref}>
      {/* <h1
        className={`text-[#fff9] mb-2 font-normal text-lg text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Tokenomics of Book of Duck (BODC){" "}
      </h1> */}
      <p
        className={`text-[#fff] mb-12 font-normal text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        This revised tokenomics ensures a strategic allocation that balances the
        need for early funding, community engagement, network security, and
        sustainable long-term growth.
      </p>
      <div
        className={`grid md:grid-cols-2 gap-5 transition-all duration-2000 ease-in-out ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Inflation Schedule{" "}
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Initial Inflation Rate: Set at 2% per annum, compounding
                annually, to gradually increase the supply in alignment with
                ecosystem growth.
              </li>
              <li>
                Adjustment Mechanism: The inflation rate is subject to
                adjustment through community governance, allowing token holders
                to vote on changes based on the network’s evolving needs and
                economic conditions.
              </li>
            </ul>{" "}
          </div>
        </div> */}
        <div className="w-full col-span-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Utility and Use Cases
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Staking: Tokens can be staked in various pools to earn rewards,
                enhancing token stability and providing holders with passive
                income.
              </li>
              <li>
                Gaming: Tokens are used within the play-to-earn game for
                transactions, purchasing in-game items, and as rewards for
                gameplay achievements.
              </li>
              <li>
                Governance: Token holders can participate in governance
                decisions, influencing the direction and policies of the BODC
                project.
              </li>
              <li>
                Trading: Beyond utility within the ecosystem, BODC tokens can be
                traded on exchanges, providing liquidity and price discovery.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Emission Schedule{" "}
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                The emission of BODC tokens will be controlled and phased over
                several years to manage inflation and encourage sustainable
                growth of the ecosystem. Details of the emission schedule should
                be transparent and aligned with project milestones.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Security and Compliance
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Ensuring compliance with regulatory standards and implementing
                robust security measures are crucial to protect token holders
                and sustain the integrity of the BODC ecosystem.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;
