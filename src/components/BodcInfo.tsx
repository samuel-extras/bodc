"use client";
import { useInView } from "react-intersection-observer";

const BODCInfo = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div
      ref={ref}
      className={`overflow-hidden px-8 py-10 ease-in-out max-w-[90rem] mx-auto  ${
        inView ? "" : " "
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex justify-center items-center fade-right aos-init aos-animate">
          <div
            className={`flex flex-row relative transition-all duration-2000 ease-in-out ${
              inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <img src="/logo.png" alt="x3" className="animate-moveup" />
            <img
              src="/coin1.png"
              className="w-20 h-20 absolute top-0 left-4 animate-moveup"
            />
            <img
              src="/coin2.png"
              alt="x1"
              className="w-16 h-16 absolute right-10 -top-11 animate-moveup"
            />
          </div>
        </div>
        <div
          className={`flex justify-center items-center transition-all duration-2000 ease-in-out ${
            inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div>
            <p className="text-2xl md:text-4xl font-bold text-[#ffffffde]">
              {/* Meet BODC<span className="text-yellow-500">.</span> Our Hybrid
              Multichain Stable Coin<span className="text-yellow-500">.</span> */}
              Quack Your BODC Tokens{" "}
            </p>
            <p className="text-justify my-6 text-[#fff9] text-base md:text-lg">
              Maximize Your Earnings and utilize your BODC tokens to the fullest
              by participating in our unique staking programs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="icon_stone"
                  />
                </div>
                <span className="text-[#fff9]">
                  Lock your tokens to help secure the network and earn rewards
                  distributed directly to your wallet. Quack your tokens through
                  our platform to gain access to exclusive events, features, and
                  more.
                  <br />
                  It’s simple: more participation, more rewards!
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="icon_stone"
                  />
                </div>
                <span className="text-[#fff9]">Staking Pools</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="flex-shrink-0"
                  />
                </div>
                <span className="text-[#fff9]">
                  Maximize your BODC holdings by participating in one of our
                  three staking pools. Choose your pool, stake your coins, and
                  earn rewards based on your commitment and pool performance.
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="icon_stone"
                  />
                </div>
                <span className="text-[#fff9]">Play-to-Earn Game</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BODCInfo;
