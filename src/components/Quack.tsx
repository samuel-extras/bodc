"use client";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import CircleCaretSVGComponent from "./icon/CircleCaret";
import { Input } from "./ui/input";
import { useState } from "react";
const Quack = () => {
  const [quack, setQuack] = useState(0);
  const [quackF, setQuackF] = useState(false);
  const [unQuack, setUnQuack] = useState(0);
  const [unQuackF, setUnQuackF] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="text-white mx-auto max-w-7xl sm:px-8 py-8 px-2" ref={ref}>
      <div
        className={`grid md:grid-cols-2 gap-8 transition-all duration-2000 ease-in-out ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="w-full col-span-full bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-5 px-4 sm:px-8 flex gap-10 justify-between">
            <div className="flex-1 flex flex-col w-full max-w-2xl gap-6">
              <div>
                <h1 className="text-xl md:text-3xl mb-6">
                  Quack Futures with Your BODC Tokens...{" "}
                </h1>
                <div
                  className={` relative transition-all duration-2000 ease-in-out py-4 px-10 md:hidden w-full`}
                >
                  <div className="flex justify-center gap-28 mb-2 ">
                    <img src="/coin2.png" className="w-16 h-16 " />
                    <img src="/coin3.png" alt="x1" className="w-16 h-16 " />
                  </div>
                  <img
                    src="/coin.png"
                    alt="x3"
                    className=" w-36 h-36 md:w-40 md:h-40 mx-auto -mt-10"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center md:text-start justify-between">
                  <dl>
                    <dt className="text-white text-sm text-center md:text-start">
                      Total Quacks
                    </dt>
                    <dd className="text-white font-extrabold text-center md:text-start">
                      102898767 BODC
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-white text-sm text-center md:text-start">
                      Daily Futures Revenue
                    </dt>
                    <dd className="text-white font-extrabold text-center md:text-start">
                      0.5%
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-white text-sm text-center md:text-start">
                      Estimted APYs
                    </dt>
                    <dd className="text-white font-extrabold text-center md:text-start">
                      183.5%
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
                <dl className="flex flex-col md:flex-row items-center">
                  <dt className="text-white text-sm">Pending Rewards: </dt>
                  <dd className="text-white font-extrabold">&nbsp; 0</dd>
                </dl>
                <Button className="uppercase bg-[#FFD700] hover:bg-white text-black h-6 rounded px-5 w-fit">
                  Claim
                  <CircleCaretSVGComponent className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className={`flex flex-row relative transition-all duration-2000 ease-in-out py-4 px-10 `}
              >
                <img
                  src="/coin.png"
                  alt="x3"
                  className=" w-36 h-36 md:w-40 md:h-40"
                />
                <img
                  src="/coin2.png"
                  className="w-16 h-16 absolute  left-0 top-0 "
                />
                <img
                  src="/coin3.png"
                  alt="x1"
                  className="w-16 h-16 absolute right-0 top-2 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-8 px-4 sm:px-8 flex gap-10 justify-between">
            <form action="" className="w-full">
              <h2 className="text-sm mb-10">Available in Wallet</h2>
              <div className="flex justify-between w-full items-center mb-6">
                <p className="font-bold">128987S67 BODC</p>
                <Button
                  type="button"
                  className="uppercase bg-[#FFD700] hover:bg-white text-black h-6 font-bold rounded px-8"
                >
                  max
                </Button>
              </div>
              <div className="flex justify-between gap-2 sm:gap-4 mb-6">
                <Button
                  className="bg-transparent border-2 border-[#FFD700] px-5"
                  variant="outline"
                  type="button"
                  onClick={() => setQuack((prev) => prev - 1)}
                  disabled={quack === 0}
                >
                  {" "}
                  -
                </Button>
                <label className="w-full h-fit relative">
                  {!quack && !quackF ? (
                    <p className="font-bold absolute text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      {quack}
                    </p>
                  ) : null}
                  <Input
                    type="number"
                    value={quack > 0 ? quack : ""}
                    onChange={(e) => setQuack(Number(e.target.value))}
                    className="bg-transparent text-white border-[#FFD700] ring-offset-[#FFD700]"
                    min={0}
                    onFocus={() => setQuackF(true)}
                    onBlur={() => setQuackF(false)}
                  />
                </label>
                <Button
                  className="bg-transparent border-2 border-[#FFD700] px-5"
                  variant="outline"
                  type="button"
                  onClick={() => setQuack((prev) => prev + 1)}
                >
                  {" "}
                  +
                </Button>
              </div>
              <Button className="uppercase bg-[#FFD700] hover:bg-white text-black font-bold rounded-md px-8 w-full">
                QUACK
              </Button>
            </form>
          </div>
        </div>
        <div className="w-full  bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85 min-h-20">
          <div className=" bg-black hover:bg-black rounded-lg w-full h-full py-8 px-4 sm:px-8 flex gap-10 justify-between">
            <form action="" className="w-full">
              <h2 className="text-sm mb-10">Your Quacked Tokens</h2>
              <div className="flex justify-between w-full items-center mb-6">
                <p className="font-bold">128987S67 BODC</p>
                <Button
                  type="button"
                  className="uppercase bg-[#FFD700] hover:bg-white text-black h-6 font-bold rounded px-8"
                >
                  max
                </Button>
              </div>
              <div className="flex justify-between gap-2 sm:gap-4 mb-6">
                <Button
                  className="bg-transparent border-2 border-[#FFD700] px-5"
                  variant="outline"
                  type="button"
                  onClick={() => setUnQuack((prev) => prev - 1)}
                  disabled={unQuack === 0}
                >
                  {" "}
                  -
                </Button>
                <label className="w-full h-fit relative">
                  {!unQuack && !unQuackF ? (
                    <p className="font-bold absolute text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      {unQuack}
                    </p>
                  ) : null}
                  <Input
                    type="number"
                    value={unQuack > 0 ? unQuack : ""}
                    onChange={(e) => setUnQuack(Number(e.target.value))}
                    className="bg-transparent text-white border-[#FFD700] ring-offset-[#FFD700]"
                    min={0}
                    onFocus={() => setUnQuackF(true)}
                    onBlur={() => setUnQuackF(false)}
                  />
                </label>
                <Button
                  className="bg-transparent border-2 border-[#FFD700] px-5"
                  variant="outline"
                  type="button"
                  onClick={() => setUnQuack((prev) => prev + 1)}
                >
                  {" "}
                  +
                </Button>
              </div>
              <Button className="uppercase bg-[#FFD700] hover:bg-white text-black font-bold rounded-md px-8 w-full">
                UNQUACK
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quack;
