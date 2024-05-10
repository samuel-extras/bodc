"use client";
import { useInView } from "react-intersection-observer";
const blockchains = [
  {
    name: "etherum",
    img: "https://cdn.xoxlabs.io/images/home/coins/1_eth.svg",
  },
  {
    name: "bsc",
    img: "https://cdn.xoxlabs.io/images/home/coins/2_bsc.svg",
  },

  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
    w: 34,
    h: 34,
  },
];

const SupportedBlockchain = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-8 py-10" ref={ref}>
      <h1
        className={`text-[#fff9] font-normal text-lg text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Supported blockchains
      </h1>
      <div
        className={`grid grid-cols-5 sm:grid-cols-8 md:grid-cols-14 gap-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        {blockchains.map((blockchain, i) => (
          <div key={blockchain.name + i}>
            <div className="bg-[#121212] rounded-full w-12 h-12  flex justify-center items-center p-2 ">
              <img
                src={blockchain.img}
                alt={blockchain.name}
                className="w-auto"
              />
            </div>
          </div>
        ))}
        <div className="bg-[#121212] rounded-full w-12 h-12  flex justify-center items-center p-2 border-2 border-[#ffa502] border-dashed">
          <img
            src="https://cdn.xoxlabs.io/images/home/coins/plus.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportedBlockchain;
