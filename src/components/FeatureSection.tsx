"use client";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";

const FeatureSection = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  const { ref: item1, inView: item1inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  const { ref: item2, inView: item2inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  const { ref: item3, inView: item3inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });

  return (
    <div className="px-8 py-10">
      <div className="flex w-full flex-col lg:flex-row justify-between flex-wrap items-center mx-auto">
        <p
          className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } `}
          data-aos="fade-up"
          ref={ref}
        >
          Book of Duck Ecosystem <span className="text-[#fb8618]">.</span>
        </p>
        <p
          className={`text-[#fc8618] text-center text-sm md:text-base mb-10 transition-all duration-2000 ease-in-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
          data-aos="fade-up"
          data-aos-duration="2300"
          ref={ref}
        >
          A Thriving Blockchain Ecosystem
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`w-full transition-all duration-2000 ease-in-out ${
              item1inView
                ? " opacity-100 translate-y-0"
                : " opacity-0 translate-y-full"
            }`}
            data-aos="fade-up"
            ref={item1}
          >
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] p-3 mb-6">
                    <img
                      src="https://cdn.xoxlabs.io/images/exchange.svg"
                      alt="icon"
                    />
                  </div>
                  <p className="text-[#ffffffde] text-xl font-bold mb-3">
                    Revolutionary Multi-chain DEX with Dual Cash Back Rewards
                  </p>
                  <p className="text-sm text-[#fff9] mb-10">
                    The Book of Duck is more than just a game. It’s a
                    comprehensive ecosystem designed to support a robust digital
                    economy.
                    {/* Our Multi-chain DEX platform offers a unique opportunity for
                    users to earn dual cash back rewards for every transaction
                    performed. Through our multi-token ecosystem and
                    revolutionary referral program, users receive XOXS Stable
                    Coins and USDT or USDC not only from their own transactions
                    but also from every user transaction using ...{" "} */}
                    {/* <span className="cursor-pointer text-[#fb8618]">
                      <span className="expand">Read more</span>
                    </span> */}
                  </p>
                </div>
                <div className="w-fit bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]  font-bold hover:opacity-85 text-transparent bg-clip-text">
                      Discover More{" "}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full transition-all duration-2000 ease-in-out ${
              item2inView
                ? " opacity-100 translate-y-0"
                : " opacity-0 translate-y-full"
            }`}
            data-aos="fade-up"
            ref={item2}
          >
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] p-3 mb-6">
                    <img
                      src="https://cdn.xoxlabs.io/images/wallet.svg"
                      alt="icon"
                    />
                  </div>
                  <p className="text-[#ffffffde] text-xl font-bold mb-3">
                    Liquidity Provision and Reward System
                  </p>
                  <p className="text-sm text-[#fff9] mb-10 line-clamp-[7]">
                    Staking pools to community governance, every aspect of our
                    platform is designed with user engagement and sustainability
                    in mind, designed to be passive income for all holders.
                    <span className="cursor-pointer text-[#fb8618]">
                      {/* <span className="expand">Read more</span> */}
                    </span>
                  </p>
                </div>
                <div className="w-fit bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]  font-bold hover:opacity-85 text-transparent bg-clip-text">
                      Discover More{" "}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full transition-all duration-2000 ease-in-out ${
              item3inView
                ? " opacity-100 translate-y-0"
                : " opacity-0 translate-y-full"
            }`}
            data-aos="fade-up"
            ref={item3}
          >
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="main_container">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] p-3 mb-6">
                    <img
                      src="https://cdn.xoxlabs.io/images/refferal.svg"
                      alt="icon"
                    />
                  </div>
                  <p className="text-[#ffffffde] text-xl font-bold mb-3">
                    Gamified Referral Program with Dual USDT/USDC Rewards
                  </p>
                  <p className="text-sm text-[#fff9] mb-10">
                    Our BODC Gamified Referral Program is the first of its kind
                    and designed to give users cash-back rewards in USDT/USDC
                    for every transaction performed using their referral code.
                    {/* The program is designed to be fun and interactive with a
                    level system based on points. */}
                    {/* Users can earn points, level
                    up, reach milestones, and claim their ...{" "} */}
                    {/* <span className="cursor-pointer text-[#fb8618]">
                      <span className="expand">Read more</span>
                    </span> */}
                  </p>
                </div>
                <div className="w-fit bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]  font-bold hover:opacity-85 text-transparent bg-clip-text">
                      Discover More{" "}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
