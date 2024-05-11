"use client";
import { useInView } from "react-intersection-observer";
const DevelopmentMap = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item1, inView: item1inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item2, inView: item2inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item3, inView: item3inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item4, inView: item4inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item5, inView: item5inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  return (
    <div className="px-4 py-10 mx-auto max-w-[90rem]" ref={ref}>
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
        data-aos="fade-up"
      >
        Development map
      </h1>
      <p
        className={`text-[#fc8618] text-center text-sm md:text-base transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        Building the Future of Fun and Utility with BODC{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 my-10 px-8">
        <div></div>
        <div
          ref={item1}
          className={`relative md:pl-8 transition-all duration-2000 ease-in-out ${
            item1inView
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {" "}
          <div className="mb-14">
            {/* Title */}
            <div className="text-[#ffffffde] font-bold text-xl mb-4 relative pl-11 md:pl-0">
              <div className="h-0.5 w-10 absolute left-0  top-1/2 bg-gradient-to-b from-black to-[rgb(251,134,24)] md:hidden"></div>
              <img
                src="https://cdn.xoxlabs.io/images/done_mobile.svg"
                alt="milestone"
                className="absolute top-1/2 -translate-y-1/2 -left-2 md:hidden z-30"
              ></img>
              Initial Launch and Presale
            </div>
            {/* Description */}
            <div className="space-y-3 ml-8 md:ml-0">
              {/* Individual entries */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Presale Launch: Kickstart your journey with us through an
                  exclusive presale, offering early access to BODC tokens at a
                  favorable rate. This initial phase is your gateway to early
                  investment opportunities.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Staking Pools Development: Roll out our initial staking pools
                  to allow token holders to earn rewards and contribute to
                  network security.
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-0.5 absolute left-0 translate-x-1/2 bottom-0 bg-gradient-to-b from-black to-[rgb(251,134,24)] opacity-25 hidden md:block"></div>
          <div className="md:h-[3px] h-full border-none w-[3px] md:w-full bg-repeat-y md:bg-repeat-x [length:3px_3px] md:bg-[length:30px_3px] absolute left-0 translate-y-1/2 bottom-0 bg-gradient-to-b md:bg-gradient-to-l from-[rgb(139,234,197)] from-50% to-50% to-black bg-top hidden md:block -z-50"></div>
          <img
            src="https://cdn.xoxlabs.io/images/line_dash.svg"
            alt="milestone"
            className="absolute -bottom-14 left-0 md:hidden"
          ></img>
          <img
            src="https://cdn.xoxlabs.io/images/mile_stone_done.svg"
            alt="milestone"
            className="-translate-x-1/2 translate-y-1/2 left-0 bottom-0 h-auto max-w-full absolute hidden md:block z-30"
          ></img>
        </div>
        <div></div>
        <div
          ref={item2}
          className={`relative md:pl-8 md:z-20 transition-all duration-2000 ease-in-out ${
            item2inView
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {" "}
          <div className="my-14">
            {/* Title */}
            <div className="text-[#ffffffde] font-bold text-xl mb-4 relative pl-11 md:pl-0">
              <div className="h-0.5 w-10 absolute left-0  top-1/2 bg-gradient-to-b from-black to-[rgb(251,134,24)] md:hidden"></div>
              <img
                src="https://cdn.xoxlabs.io/images/now_done_mobile.svg"
                className="absolute top-1/2 -translate-y-1/2 -left-4 z-30 md:hidden"
                alt="milestone"
              ></img>
              Infrastructure and Strategic Alliances
            </div>
            {/* Description */}
            <div className="space-y-3 ml-10">
              {/* Individual entries */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  {" "}
                  Quack Tracker Implementation: Launch the Quack Tracker bot to
                  provide users with insights and analytics on high-potential
                  coins, enhancing decision-making and investment strategies
                  within the ecosystem.
                </div>
              </div>
              {/* <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Development of Mining Features: Introduce a mining app that
                  allows users to mine BODC tokens, expanding earning
                  possibilities and engagement.
                </div>
              </div> */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  {" "}
                  Forming Strategic Partnerships: Establish collaborations with
                  key industry players to enhance platform capabilities and
                  extend market reach.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  {" "}
                  Initial CEX Listings: Secure listings on major cryptocurrency
                  exchanges to increase token liquidity and accessibility.
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-0.5 absolute left-0 translate-x-1/2 bottom-0 bg-gradient-to-b from-black to-[rgb(251,134,24)] opacity-25"></div>
          <div className="h-2 border-none w-full  absolute left-0 translate-y-1/2 bottom-0 bg-gradient-to-r from-[rgb(62,192,166)] to-[rgb(244,66,52)] -z-50"></div>
          <img
            src="https://cdn.xoxlabs.io/images/milestone.svg"
            alt="milestone"
            className="-translate-x-1/2 translate-y-1/2 left-0 bottom-0 h-auto max-w-full z-50 absolute"
          ></img>
        </div>{" "}
        <div></div>
        <div
          ref={item3}
          className={`relative md:pl-8 order-first md:order-none transition-all duration-2000 ease-in-out md:-z-10 ${
            item3inView
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 "
          }`}
        >
          <img
            src="https://cdn.xoxlabs.io/images/mile_stone_done.svg"
            alt="milestone"
            className="absolute left-0 top-0 h-auto max-w-full -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden"
          />{" "}
          <div className="my-14">
            {/* Title */}
            <div className="text-[#ffffffde] font-bold text-xl mb-4 relative pl-11 md:pl-0">
              <div className="h-0.5 w-10 absolute left-0  top-1/2 bg-gradient-to-b from-black to-[rgb(251,134,24)] md:hidden"></div>
              <img
                src="https://cdn.xoxlabs.io/images/done_mobile.svg"
                alt="milestone"
                className="absolute top-1/2 -translate-y-1/2 -left-2 z-10 md:hidden"
              ></img>{" "}
              Expansion and Ecosystem Enhancement
            </div>
            {/* Description */}
            <div className="space-y-3 ml-8">
              {/* Individual entries */}
              {/* <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3"
                  />
                </div>
                <div className="text-[#fff9]">
                  Mining App Launch: Officially release the mining app, enabling
                  users to participate in and benefit from the mining process
                  directly through their devices.
                </div>
              </div> */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3"
                  />
                </div>
                <div className="text-[#fff9]">
                  Enhanced Staking Features: Enhance existing staking protocols
                  to offer more robust options and better rewards.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3"
                  />
                </div>
                <div className="text-[#fff9]">
                  {" "}
                  Additional CEX Listings: Further expand our presence on
                  cryptocurrency exchanges to ensure broader market penetration
                  and stability.
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-0.5 absolute left-0 translate-x-1/2 bottom-0 bg-gradient-to-b from-[rgb(251,134,24)] to-[rgb(251,134,24)] opacity-25 md:block hidden"></div>
          <div className="h-[3px] border-none w-full bg-repeat-x bg-[length:30px_3px] absolute left-0 -translate-y-1/2 top-0 bg-gradient-to-l from-[rgb(139,234,197)] from-50% to-50% to-black bg-top -z-50 hidden md:block"></div>
        </div>
        <div></div>
        <div
          ref={item4}
          className={`relative pl-8 md:z-10 transition-all duration-2000 ease-in-out ${
            item4inView
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 "
          }`}
        >
          <img
            src="https://cdn.xoxlabs.io/images/mile_stone_now.svg"
            alt="milestone"
            className="absolute left-0 top-0 h-auto max-w-full -translate-x-1/2 -translate-y-1/2 z-10"
          />{" "}
          <div className="my-14">
            {/* Title */}
            <div className="text-[#ffffffde] font-bold text-xl mb-2">
              Introduction of Play & Earn Features
            </div>
            {/* Description */}
            <div className="space-y-3">
              {/* Individual entries */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3"
                  />
                </div>
                <div className="text-[#fff9]">
                  Development of Play-to-Earn Games: Begin the development of
                  the play-to-earn gaming platform to increase user engagement
                  and token utility through interactive gaming.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3"
                  />
                </div>
                <div className="text-[#fff9]">
                  Soft Launch of Games: Conduct a soft launch of the games to
                  gather user feedback and ensure optimal performance.
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-0.5 absolute left-0 translate-x-1/2 bottom-0 bg-gradient-to-b from-[rgb(251,134,24)] to-[rgb(251,134,24)] opacity-25"></div>
          <div className="h-2 border-none w-full  absolute left-0 -translate-y-1/2 top-0 bg-gradient-to-r from-[rgb(155,243,203)] to-[rgb(62,192,166)] -z-20"></div>
        </div>
        <div></div>
        <div
          ref={item5}
          className={`relative pl-8 md:z-30 transition-all duration-2000 ease-in-out ${
            item5inView
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 "
          }`}
        >
          <img
            src="https://cdn.xoxlabs.io/images/mile_stone_now.svg"
            alt="milestone"
            className="absolute left-0 top-0 h-auto max-w-full -translate-x-1/2 -translate-y-1/2 z-30"
          />{" "}
          <div className="my-14">
            {/* Title */}
            <div className="text-[#ffffffde] font-bold text-xl mb-2">
              Full Scale Operation and Market Penetration
            </div>
            {/* Description */}
            <div className="space-y-3">
              {/* Individual entries */}
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Full Launch of Play-to-Earn Platform: Officially release the
                  fully tested and community-approved play-to-earn games.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Continuous Improvements and Updates: Regularly update the
                  platform based on user feedback and technological
                  advancements.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Further Strategic Partnerships: Cultivate additional
                  partnerships to diversify and enhance service offerings and
                  ecosystem sustainability.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Community Governance Enhancements: Further develop community
                  governance features, allowing token holders more substantial
                  input into the ecosystem’s future directions.
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="mt-1.5 flex-shrink-0 me-3 z-30"
                  />
                </div>
                <div className="text-[#fff9]">
                  Regular Updates and Community Calls: Maintain transparent
                  communication with the community through regular updates and
                  open forums to discuss developments and strategies.
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-0.5 absolute left-0 translate-x-1/2 bottom-0 bg-gradient-to-b from-[rgb(251,134,24)] to-[rgb(251,134,24)] opacity-25"></div>
          <div className="h-2 border-none w-full  absolute left-0 -translate-y-1/2 top-0 bg-gradient-to-r from-[rgb(244,66,52)] to-[rgb(159,58,131)] -z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentMap;
