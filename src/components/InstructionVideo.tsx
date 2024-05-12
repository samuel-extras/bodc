"use client";
import { useInView } from "react-intersection-observer";
const InstructionVideo = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="max-w-6xl mx-auto my-14 px-8" ref={ref}>
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
        data-aos="fade-up"
      >
        Many useful Tools{" "}
      </h1>
      <p
        data-aos="fade-up"
        className={`text-[#ffffffab] text-base md:text-xl text-center mb-8 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Maximize your rewards{" "}
      </p>
      <div
        className={`transition-all duration-2000 ease-in-out ${
          inView ? " translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        <video
          autoPlay
          loop
          playsInline
          id="laptopVideo"
          preload="auto"
          className="pointer-events-none"
          muted={true}
          controls={false}
        >
          <source
            // src="https://cdn.xoxlabs.io/videos/home/DappPromo.mov"
            src="/duck.mp4"
            type='video/mp4; codecs="hvc1"'
          />
          <source
            // src="https://cdn.xoxlabs.io/videos/home/DappPromo.webm"
            src="/duck.mp4"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default InstructionVideo;
