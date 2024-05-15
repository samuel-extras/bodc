"use client";
import { useInView } from "react-intersection-observer";
const Tokenomics = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="text-white mx-auto max-w-[90rem] p-8" ref={ref}>
      <h1
        className={`text-[#fff9] mb-2 font-normal text-lg text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Tokenomics of Book of Duck (BODC){" "}
      </h1>
      <p
        className={`text-[#fff] mb-12 font-normal text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Total Supply: The initial total supply of BODC tokens is set at
        575,100,000 $BODC, with an inflationary mechanism designed to stimulate
        active participation within the ecosystem.
      </p>
      <div
        className={` grid md:grid-cols-3 gap-5 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Token Name
            </h1>
            <p>BODC</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Total Supply{" "}
            </h1>
            <p>575,100,000</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-3 px-5">
            <h1 className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
              Network{" "}
            </h1>
            <p>Sol</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
