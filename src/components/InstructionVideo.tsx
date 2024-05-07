const InstructionVideo = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-8">
      <h1
        className="text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Earn & Trade like a Pro
      </h1>
      <p
        data-aos="fade-up"
        className="text-[#ffffffab] text-base md:text-xl text-center mb-8"
      >
        Unlocking DeFi for millions of users.
      </p>
      <div>
        <video
          autoPlay
          loop
          playsInline
          id="laptopVideo"
          preload="auto"
          className="pointer-events-none"
        >
          <source
            src="https://cdn.xoxlabs.io/videos/home/DappPromo.mov"
            type='video/mp4; codecs="hvc1"'
          />
          <source
            src="https://cdn.xoxlabs.io/videos/home/DappPromo.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default InstructionVideo;
