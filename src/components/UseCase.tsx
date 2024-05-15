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
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
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
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Utility and Use Cases
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Governance: Token holders have the right to vote on key project
                decisions, playing a critical role in shaping the future
                direction of the ecosystem.
              </li>
              <li>
                Staking: By staking BODC, users contribute to network security
                and receive staking rewards, promoting long-term holding and
                community stability.
              </li>
              <li>
                Payments: BODC tokens are used for transactions within the
                ecosystem, including fees for services, access to applications,
                and participation in network activities.
              </li>
              <li>
                Rewards and Incentives: Community engagement and contributions
                are incentivized with BODC tokens, enhancing user interaction
                and satisfaction.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Release Schedule{" "}
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Advisors’ Tokens: Released over a four-year period with a
                one-year cliff to ensure prolonged engagement.
              </li>
              <li>
                Seed Round Tokens: Structured release over two years to
                integrate seed investors into the market without disrupting
                token economics.
              </li>
              <li>
                Public Sale Tokens: Immediately available to foster broad
                participation and support from the wider community.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Security Measures{" "}
            </h1>
            <ul className="text-white text-sm list-outside list-disc marker:text-[#FFD700] space-y-3">
              <li>
                Smart Contract Audits: Conducted by leading security firms to
                ensure the integrity and safety of the blockchain and its
                operations.
              </li>
              <li>
                Liquidity Locks: A portion of the funds raised from public sales
                will be locked in liquidity pools to stabilize and secure market
                activity.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;
