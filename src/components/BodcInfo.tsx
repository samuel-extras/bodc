"use client";
import { useInView } from "react-intersection-observer";

const BODCInfo = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 500,
    trackVisibility: true,
  });
  return (
    <div
      ref={ref}
      className={` px-8 py-10 ease-in-out max-w-[90rem] mx-auto  ${
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
            <img
              src="/coin.png"
              alt="x3"
              className="animate-moveup w-72 h-72 md:w-96 md:h-96"
            />
            <img
              src="/coin2.png"
              className="w-32 h-32 absolute md:-top-32 -left-10 -top-20 animate-moveup"
            />
            <img
              src="/coin3.png"
              alt="x1"
              className="w-28 h-28 absolute right-10 -top-28 animate-moveup"
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
              Benefits of Joining the Book of Duck Ecosystem{" "}
            </p>
            <p className="text-justify my-6 text-[#fff9] text-base md:text-lg">
              Unlock a world of opportunities with BODC. Here's what you can
              expect when you dive into our ecosystem:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="">
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="icon_stone"
                  />
                </div>
                <span className="text-[#fff9]">
                  Seamless Transactions: Experience lightning-fast and
                  cost-effective transactions on the Solana blockchain, ensuring
                  smooth and efficient gameplay and financial exchanges.
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
                <span className="text-[#fff9]">
                  Exclusive Access: Participate in special events, early game
                  releases, and unique promotional offers available only to BODC
                  holders.
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="">
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="flex-shrink-0"
                  />
                </div>
                <span className="text-[#fff9]">
                  Community Driven: Have a voice in the development and future
                  of the ecosystem through active participation in our
                  governance model.
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
                <span className="text-[#fff9]">
                  Rewarding Experience: Enjoy competitive staking rewards that
                  not only provide financial benefits but also help secure the
                  network.
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
                <span className="text-[#fff9]">
                  Global Network: Connect with a diverse community of gamers and
                  crypto enthusiasts from around the world, all engaged and
                  contributing to the growth of the ecosystem.
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
                <span className="text-[#fff9]">
                  Educational Resources: Gain access to extensive learning
                  materials designed to enhance your understanding of blockchain
                  technology and decentralized finance.
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
                <span className="text-[#fff9]">
                  Sustainable Investment: Be part of a project with a clear
                  roadmap and committed to long-term growth and sustainability,
                  ensuring your involvement is impactful.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BODCInfo;
