"use client";
import { useInView } from "react-intersection-observer";
const Community = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item1, inView: item1inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item2, inView: item2inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item3, inView: item3inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item4, inView: item4inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  const { ref: item5, inView: item5inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  return (
    <div className="px-8 py-10">
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
        data-aos="fade-up"
        ref={ref}
      >
        Meet the worldwide community <span className="text-[#fc8618]">.</span>
      </h1>
      <p
        className={`text-[#fc8618] mb-10 text-center text-sm md:text-base transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        data-aos="fade-up"
        data-aos-duration="2300"
        ref={ref}
      >
        We are supported by many people. Why don’t you join them?
      </p>
      <div className="grid grid-cols-2 text-white gap-y-10 gap-8 md:gap-x-12">
        <a
          ref={item1}
          className={`transition-all duration-2000 ease-in-out ${
            item1inView
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
          href="https://bookodc.gitbook.io/book-of-duck-whitepaper/"
          target="_blank"
        >
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6 ">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="/logo.png"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Whitepaper
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Read BODC whitepaper
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          ref={item2}
          className={`transition-all duration-2000 ease-in-out ${
            item2inView
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
          href="https://twitter.com/Bookodc"
          target="_blank"
        >
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6 ">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/pc_twitter.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Twitter
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Follow @bookodc on Twitter for ecosystem news & updates. Stay
                  informed.
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          ref={item3}
          className={`transition-all duration-2000 ease-in-out ${
            item3inView
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
          href="https://t.me/BookOfDuck"
          target="_blank"
        >
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/group_telegram.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Telegram Group
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Ask general questions and chat with the worldwide community on
                  Telegram.
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          ref={item4}
          className={`transition-all duration-2000 ease-in-out ${
            item4inView
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
          href="https://www.tiktok.com/@bookodc?_t=8mEerM7RGi7&_r=1"
          target="_blank"
        >
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/pc_tiktok.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Tiktok
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Follow @bookodc on TikTok for the latest ecosystem news. Stay
                  connected!
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          ref={item5}
          className={`transition-all duration-2000 ease-in-out ${
            item5inView
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
          href="https://t.me/BookODC"
          target="_blank"
        >
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/telegram_channel.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Telegram Announcement{" "}
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Join our channel to stay up-to-date with every news and
                  updates.
                </li>
              </ul>
            </div>
          </div>
        </a>
        {/* <a href="#" target="_blank">
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/pc_youtube.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Youtube
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Subscribe to @XoxLabs to stay in the loop and updated.
                </li>
              </ul>
            </div>
          </div>
        </a> */}
        {/* <a href="#" target="_blank">
          <div className=" flex flex-col md:flex-row items-center py-6 px-8 rounded-[20px] backdrop-filter bg-[rgb(16,16,16)] bg-opacity-30 border border-[#232323] gap-6">
            <div className="">
              <div className="bg-[rgb(10,10,10)]">
                <div className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full p-px bg-gradient-to-br from-[#FFD700] to-[#DD3B3C] via-yellow-600 from-[-7.25%] via-[54.2%] to-[113.13%] cursor-pointer">
                  <div className="w-full h-full rounded-full flex justify-center items-center flex-shrink-0 bg-[rgb(16,16,16)]">
                    <img
                      src="https://cdn.xoxlabs.io/images/pc_discord.svg"
                      alt="icon"
                      className="w-8 md:w-11 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-white md:text-xl font-bold text-center md:text-start">
                Discord
              </p>
              <ul className="list-inside list-disc marker:text-[rgba(255,255,255,0.6)]">
                <li className="text-[rgba(255,255,255,0.6)] hidden md:block">
                  Ask general questions and chat with the worldwide community on
                  Discord.
                </li>
              </ul>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Community;
