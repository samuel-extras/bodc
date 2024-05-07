const Security = () => {
  return (
    <div className="pt-10 px-8">
      <h1
        className="text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Secured By{" "}
      </h1>
      <p
        className="text-[#fc8618] text-center text-sm md:text-base"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        XOX has Industry Leading Security. Protected By The Best.
      </p>
      <div className="flex justify-center items-center gap-16 my-10">
        <div className="group cursor-pointer" data-aos="fade-right">
          <a
            href="https://skynet.certik.com/projects/xox-labs?utm_source=SkyEmblem&amp;utm_campaign=xox-labs&amp;utm_medium=link"
            target="_blank"
          >
            <img
              src="https://cdn.xoxlabs.io/images/partners/Certik-short.svg"
              alt="airbnb"
              className="w-28 h-28 group-hover:hidden"
              data-aos="fade-right"
            />
            <img
              src="https://cdn.xoxlabs.io/images/partners/Certik-full.svg"
              alt="airbnb"
              className="w-28 h-28 hidden group-hover:block"
            />
          </a>
        </div>
        <div className="group cursor-pointer" data-aos="fade-right">
          <a href="https://www.zellic.io/" target="_blank">
            <img
              src="https://cdn.xoxlabs.io/images/partners/Zellic-short.svg"
              alt="zellic"
              className="w-28 h-28 group-hover:hidden"
              data-aos="fade-right"
            />
            <img
              src="https://cdn.xoxlabs.io/images/partners/Zellic-full.svg"
              alt="zellic"
              className="w-28 h-28 hidden group-hover:block"
            />
          </a>
        </div>
        <div className="group cursor-pointer" data-aos="fade-right">
          <a href="https://hacken.io/" target="_blank">
            <img
              src="https://cdn.xoxlabs.io/images/partners/Hacken-short.svg"
              alt="google"
              className="w-28 h-28 group-hover:hidden"
              data-aos="fade-right"
            />
            <img
              src="https://cdn.xoxlabs.io/images/partners/Hacken-full.svg"
              alt="google"
              className="w-28 h-28 hidden group-hover:block"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Security;
