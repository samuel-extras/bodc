import { Button } from "./ui/button";

const FeatureSection = () => {
  return (
    <div className="px-8 py-10">
      <div className="flex w-full flex-col lg:flex-row justify-between flex-wrap items-center mx-auto">
        <p
          className="text-[#ffffffde] mb-4 text-center text-2xl md:text-4xl font-bold"
          data-aos="fade-right"
        >
          Book of Duck Ecosystem <span className="text-[#fb8618]">.</span>
        </p>
        <p
          className="text-[#fb8618] text-center text-sm md:text-base lg:max-w-sm mb-8"
          data-aos="fade-left"
        >
          A Thriving Blockchain Ecosystem
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full" data-aos="fade-up">
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] p-3 mb-6">
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
                <div className="w-fit bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c]  font-bold hover:opacity-85 text-transparent bg-clip-text">
                      Discover More{" "}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full" data-aos="fade-up">
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] p-3 mb-6">
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
                <div className="w-fit bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c]  font-bold hover:opacity-85 text-transparent bg-clip-text">
                      Discover More{" "}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="" data-aos="fade-up">
            <div className=" border border-[#393939] rounded-xl px-4 py-5">
              <div className="main_container">
                <div>
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] p-3 mb-6">
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
                <div className="w-fit bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] rounded-lg p-px hover:opacity-85 overflow-hidden">
                  <Button
                    size="sm"
                    className=" bg-black hover:bg-black rounded-lg px-6 h-8"
                  >
                    <p className="bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c]  font-bold hover:opacity-85 text-transparent bg-clip-text">
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
