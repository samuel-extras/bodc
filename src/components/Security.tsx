"use client";
import { useInView } from "react-intersection-observer";
const Security = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  const { ref: items, inView: itemsinView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });

  return (
    <div className="pt-10 px-8 mx-auto max-w-[90rem]" id="audits">
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
        data-aos="fade-up"
        ref={ref}
      >
        Secured By{" "}
      </h1>
      <p
        className={`text-[#fc8618] text-center text-sm md:text-base transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        data-aos="fade-up"
        data-aos-duration="2300"
        ref={ref}
      >
        BODC has Industry Leading Security. Protected By The Best.
      </p>
      <div className="flex justify-center items-center gap-16 my-10">
        <div
          ref={items}
          className={`group cursor-pointer transition-all duration-2000 ease-in-out ${
            itemsinView
              ? " opacity-100 translate-x-0 translate-y-0"
              : "-translate-x-full -translate-y-full opacity-0"
          }`}
        >
          <a
            href="https://audit.cfg.ninja/book-of-duck"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="/cfg.png"
              alt="airbnb"
              className="w-28 h-28 group-hover:hidden"
              data-aos="fade-right"
            />
            <img
              src="/cfg.png"
              alt="airbnb"
              className="w-28 h-28 hidden group-hover:block"
            />
          </a>
        </div>
        {/* <div
          ref={items}
          className={`group cursor-pointer transition-all duration-2000 ease-in-out ${
            itemsinView
              ? " opacity-100 translate-x-0 translate-y-0"
              : "-translate-y-full opacity-0"
          }`}
        >
          <a href="#" target="_blank">
            <img
              src="https://cdn.xoxlabs.io/images/partners/Zellic-short.svg"
              alt="zellic"
              className="w-28 h-28 group-hover:hidden"
            />
            <img
              src="https://cdn.xoxlabs.io/images/partners/Zellic-full.svg"
              alt="zellic"
              className="w-28 h-28 hidden group-hover:block"
            />
          </a>
        </div>
        <div
          ref={items}
          className={`group cursor-pointer transition-all duration-2000 ease-in-out ${
            itemsinView
              ? " opacity-100 translate-x-0 translate-y-0"
              : "translate-x-full -translate-y-full opacity-0"
          }`}
        >
          <a href="#" target="_blank">
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
        </div> */}
      </div>
    </div>
  );
};

export default Security;
