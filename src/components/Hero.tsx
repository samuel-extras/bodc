import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 px-8 max-w-[90rem] mx-auto ">
      <div className="max-w-2xl space-y-8 py-14 ">
        <h1 className="text-[#ffffffde] text-3xl md:text-[40px] font-bold font-geomGraphic">
          Welcome to the Book of Duck Ecosystem.{" "}
        </h1>
        <h2 className="font-bold text-lg md:text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-[#95f0c8] via-[#f14537] to-[#9e3a83]">
          Quack, Play, and earn!{" "}
        </h2>
        <p className="text-[#9d9d9d] text-base md:text-lg max-w-[50ch]">
          Ecosystem with high potential for returns as we expand our
          play-to-earn games and staking opportunities. Benefit from our
          innovative staking programs where your investments work for you,
          generating earnings through extensive network participation.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://bookodc.gitbook.io/book-of-duck-whitepaper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-white text-black hover:bg-transparent hover:text-white md:text-lg font-bold"
              variant="outline"
              size="lg"
            >
              Read Docs
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-transparent hover:text-white md:text-lg font-bold"
          >
            Airdrop
          </Button>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 md:ms-4"
          >
            {" "}
            Get BODC
          </Button>
        </div>
        <div className="flex flex-wrap items-center my-4 gap-y-4">
          <a
            href="https://twitter.com/Bookodc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent hover:bg-transparent">
              <img
                src="https://cdn.xoxlabs.io/images/home/hero/twitter.svg"
                alt="social_media"
              />
            </Button>
          </a>
          <a
            href="https://t.me/BookOfDuck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent hover:bg-transparent">
              <img
                src="https://cdn.xoxlabs.io/images/home/hero/telegram_2.svg"
                alt="social_media"
              />
            </Button>
          </a>
          <a
            href="https://t.me/BookODC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent hover:bg-transparent">
              <img
                src="https://cdn.xoxlabs.io/images/home/hero/telegram_channel.svg"
                alt="social_media"
              />
            </Button>
          </a>
          <a
            href="https://www.tiktok.com/@bookodc?_t=8mEerM7RGi7&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent hover:bg-transparent">
              <img
                src="https://cdn.xoxlabs.io/images/pc_tiktok.svg"
                alt="social_media"
                className="w-9 h-9"
              />
            </Button>
          </a>
          {/* <Button className="bg-transparent hover:bg-transparent">
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
          </Button> */}
          <div className="w-fit bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] rounded-lg p-px hover:opacity-85">
            <Button size="lg" className=" bg-black hover:bg-black rounded-lg">
              <p className="bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] md:text-lg font-bold hover:opacity-85 text-transparent bg-clip-text">
                Get BODC
              </p>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap p-3 rounded-lg border w-fit items-center border-[#222222] gap-px -z-10">
          <img
            src="https://www.aver.exchange/static/new_images/solana_s_white.png"
            alt="email"
            className="w-4 h-4"
          />
          <span className="text-white">Solana:</span>
          <input
            type="text"
            id="email"
            name="email"
            placeholder=""
            required
            value="3fLptZj...xPLmD8"
            disabled
            className="bg-none bg-transparent outline-none text-white max-w-fit border-b border-b-white w-40 p-0 "
          />
          <div
            className="cursor-pointer ms-1"
            onClick={() => {
              navigator.clipboard.writeText(
                "3fLptZjMgKhPufQN2v1v6xR93mwtYPTwjRq6Q9xPLmD8"
              );
            }}
          >
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
      <div className="content-center relative align-middle  ">
        <div className="lg:absolute mx-auto lg:top-1/2  lg:-translate-y-1/2">
          {/* <div className=" absolute inset-0 "></div> */}
          <video
            autoPlay={true}
            loop
            playsInline
            className="w-full"
            id="laptopVideo"
            muted={true}
            controls={false}
          >
            <source
              // src="https://cdn.xoxlabs.io/videos/home/laptop.mov"
              src="/bodc.mp4"
              type='video/mp4; codecs="hvc1"'
            />
            <source
              // src="https://cdn.xoxlabs.io/videos/home/laptop.webm"
              src="/bodc.mp4"
              type="video/webm"
            />
          </video>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
