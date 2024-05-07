const BODCInfo = () => {
  return (
    <div className="overflow-hidden px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex justify-center items-center fade-right aos-init aos-animate">
          <div className="flex flex-row">
            <img
              src="https://cdn.xoxlabs.io/images/home/meet-xoxs/x3.svg"
              alt="x3"
              className="x3"
            />
            <img
              src="https://cdn.xoxlabs.io/images/home/meet-xoxs/x2.svg"
              alt="x2"
              className="x2"
            />
            <img
              src="https://cdn.xoxlabs.io/images/home/meet-xoxs/x1.svg"
              alt="x1"
              className="x1"
            />
          </div>
        </div>
        <div className="flex justify-center items-center fade-left aos-init aos-animate">
          <div>
            <p className="text-2xl md:text-4xl font-bold text-[#ffffffde]">
              Meet BODC<span className="text-yellow-500">.</span> Our Hybrid
              Multichain Stable Coin<span className="text-yellow-500">.</span>
            </p>
            <p className="text-justify my-6 text-[#fff9] text-base md:text-lg">
              Our BODC token is specifically designed as a staking substitute
              for our governance token XOX. We have extensively studied staking
              behavior, chart patterns, and the impact of high APYs followed by
              high selling pressure from stakers. By implementing Stable Coins
              such as USDT and USDC, we have developed a passive income strategy
              that prevents supply inflation and selling pressure. Here are some
              facts about BODC:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src="https://cdn.xoxlabs.io/images/icon-stone.svg"
                    alt="icon-stone"
                    className="icon_stone"
                  />
                </div>
                <span className="text-[#fff9]">
                  BODC can only be obtained by purchasing our governance token
                  XOX, and is provided as a bonus with auto-staking
                  functionalities and flexible APY.
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
                  BODC can also be earned through community activities such as
                  giveaways and completing tasks.
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
                  BODC ensures long-term sustainability, providing a risk-free
                  and profitable experience for both token holders and the
                  project.
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
                  By implementing Stable Coins such as USDT and USDC, BODC
                  offers a stable and sustainable source of passive income for
                  users.
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
