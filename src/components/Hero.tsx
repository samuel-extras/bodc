import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 px-8 max-w-[92rem] mx-auto ">
      <div className="max-w-2xl space-y-8 py-14 z-20">
        <h1 className="text-[#ffffffde] text-3xl md:text-[40px] font-bold font-geomGraphic">
          XOX: The Next Gen Multichain DeFi Dapps & Web3 Solutions Provider
        </h1>
        <h2 className="font-bold text-lg md:text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-[#95f0c8] via-[#f14537] to-[#9e3a83]">
          Revolutionary - Scalable - Sustainable
        </h2>
        <p className="text-[#9d9d9d] text-base md:text-lg max-w-[50ch]">
          Swap, stake, store, bridge, refer, invest and earn with ease on the
          leading Decentralized Blockchain Ecosystem.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-white text-black hover:bg-transparent hover:text-white md:text-lg font-bold"
            variant="outline"
            size="lg"
          >
            Read Docs
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-transparent hover:text-white md:text-lg font-bold"
          >
            Airdrop
          </Button>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] md:text-lg font-bold hover:opacity-85 md:ms-4"
          >
            {" "}
            Get XOX
          </Button>
        </div>
        <div className="flex flex-wrap items-center my-4 gap-y-4">
          <Button className="bg-transparent hover:bg-transparent">
            <img
              src="https://cdn.xoxlabs.io/images/home/hero/twitter.svg"
              alt="social_media"
            />
          </Button>
          <Button className="bg-transparent hover:bg-transparent">
            <img
              src="https://cdn.xoxlabs.io/images/home/hero/telegram_2.svg"
              alt="social_media"
            />
          </Button>
          <Button className="bg-transparent hover:bg-transparent">
            <img
              src="https://cdn.xoxlabs.io/images/home/hero/telegram_channel.svg"
              alt="social_media"
            />
          </Button>
          <Button className="bg-transparent hover:bg-transparent">
            <img
              src="https://cdn.xoxlabs.io/images/home/hero/discord.svg"
              alt="social_media"
            />{" "}
          </Button>
          <Button className="bg-transparent hover:bg-transparent">
            <img
              src="https://cdn.xoxlabs.io/images/home/hero/youtube.svg"
              alt="social_media"
            />
          </Button>
          <div className="w-fit bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] rounded-lg p-px hover:opacity-85">
            <Button size="lg" className=" bg-black hover:bg-black rounded-lg">
              <p className="bg-gradient-to-r from-[#c20fa1] to-[#fb8b2c] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
                Get XOXS
              </p>
            </Button>
          </div>
        </div>

        <div className="flex p-3 rounded-lg border w-fit items-center border-[#222222] gap-px">
          <img
            src="https://cdn.xoxlabs.io/images/home/hero/eth.svg"
            alt="email"
            className="email-icon"
          />
          <span className="text-white">ETH:</span>
          <input
            type="text"
            id="email"
            name="email"
            placeholder=""
            required
            value="0x0f5C78...0748"
            className="bg-none bg-transparent outline-none text-white max-w-fit border-b border-b-white w-32 p-0 "
          />
          <div className="cursor-pointer ms-1">
            <span>
              <img
                src="https://cdn.xoxlabs.io/images/home/hero/copy.svg"
                alt="copy"
                className="mt-1"
              />
            </span>
          </div>
          <button className="">
            <img src="https://cdn.xoxlabs.io/images/shield.svg" alt="shield" />
          </button>
          <button className="">
            <img
              src="https://cdn.xoxlabs.io/images/metamask-no-bg.svg"
              alt="wolf"
            />
          </button>
        </div>
      </div>
      <div className="content-center relative   ">
        <div className="lg:absolute lg:w-[160%] lg:top-0  xl:-top-20 lg:-left-32 xl:-left-64 mx-auto ">
          {/* <div className=" absolute inset-0 "></div> */}
          <video
            autoPlay={true}
            loop
            playsInline
            className="w-full "
            id="laptopVideo"
            muted
          >
            <source
              src="https://cdn.xoxlabs.io/videos/home/laptop.mov"
              type='video/mp4; codecs="hvc1"'
            />
            <source
              src="https://cdn.xoxlabs.io/videos/home/laptop.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
