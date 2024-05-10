"use client";
import { useInView } from "react-intersection-observer";
const Newsletter = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 700,
    trackVisibility: true,
  });
  return (
    <div ref={ref} className="px-8 py-10 mb-8">
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center md:mb-4 transition-all duration-2000 ease-in-out ${
          inView ? " translate-y-0 opacity-100" : " translate-y-full opacity-0"
        }`}
        data-aos="fade-up"
      >
        {" "}
        Subscribe to the BODC Newsletter
      </h1>
      <p
        className={`text-[#fff9] text-center mb-10 transition-all duration-2000 ease-in-out ${
          inView ? " translate-y-0 opacity-100" : " translate-y-full opacity-0"
        }`}
      >
        Unsubscribe at any time.{" "}
        <a href="#" target="_blank" className="underline text-white">
          Privacy policy
        </a>
      </p>
      <form
        action=""
        className={`w-full max-w-xl mx-auto transition-all duration-2000 ease-in-out ${
          inView ? " translate-y-0 opacity-100" : " translate-y-full opacity-0"
        }`}
      >
        <label
          htmlFor="input-group"
          className=" mb-2 text-sm font-medium text-gray-900 dark:text-white hidden"
        >
          Your Email
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img
              src="https://cdn.xoxlabs.io/images/home/subscription/email.svg"
              alt="email"
              className="email-icon"
            ></img>
          </div>
          <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 15.3066H24.25"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15.5 6.55664L24.25 15.3066L15.5 24.0566"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group"
            className="bg-[#1d1c1c] text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full ps-10 px-2.5 py-3.5  outline-none border hover:border-yellow-600 border-transparent placeholder:text-lg placeholder:text-[#ffffff61] text-white"
            placeholder="Your email"
          />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
