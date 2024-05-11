"use client";
import { useInView } from "react-intersection-observer";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mx-auto min-h-fit max-h-fit "
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full min-h-fit max-h-fit">
        <CarouselItem className="grid grid-cols-2 w-full">
          <a
            // href="https://bnbchain.org/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="/p1.png"
              alt="BNBChain_logo"
              className="h-32 w-auto mb-10"
            />
          </a>
          <a
            // href="https://zksync.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="/p2.png"
              alt="zksync_logo"
              className="h-32 w-auto mb-10"
            />
          </a>
          <a
            // href="https://linea.build/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img src="/p3.png" alt="Linea_logo" className="h-32 w-auto mb-10" />
          </a>
          <a
            // href="https://www.okx.com/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img src="/p4.png" alt="OKX_logo" className="h-32 w-auto mb-10" />
          </a>
        </CarouselItem>
        {/* <CarouselItem className="grid grid-cols-2 w-full">
          <a
            href="https://bnbchain.org/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/BNBChain_logo.svg"
              alt="BNBChain_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://zksync.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/zksync_logo.svg"
              alt="zksync_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://linea.build/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Linea_logo.svg"
              alt="Linea_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.okx.com/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/OKX_logo.svg"
              alt="OKX_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://kyber.network/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/KyberNetwork_logo.svg"
              alt="KyberNetwork_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2 w-full">
          <a
            href="https://level.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Level_logo.svg"
              alt="Level_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://syncswap.xyz/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Syncswap_logo.svg"
              alt="Syncswap_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://symbiosis.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Symbiosis_logo.svg"
              alt="Symbiosis_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.pangolin.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Pangolin_logo.svg"
              alt="Pangolin_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.mummy.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/MummyFinance_logo.svg"
              alt="MummyFinance_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.orionprotocol.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Orion_logo.svg"
              alt="Orion_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2 w-full">
          <a
            href="https://quickswap.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Quickswap_logo.svg"
              alt="Quickswap_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.wombat.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Wombat_logo.svg"
              alt="Wombat_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://rubic.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Rubic_logo.svg"
              alt="Rubic_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://www.gnosis.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Gnosis_logo.svg"
              alt="Gnosis_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://swing.xyz/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Swing_logo.svg"
              alt="Swing_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            href="https://izumi.finance/home"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/iZumi_logo.svg"
              alt="iZumi_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2 w-full">
          <a
            href="https://www.chainge.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Chainge_logo.svg"
              alt="Chainge_logo"
            />
          </a>
          <a
            href="https://dexalot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Dexalot_logo.svg"
              alt="Dexalot_logo"
            />
          </a>
          <a
            href="https://odos.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/ODOS_logo.svg"
              alt="ODOS_logo"
            />
          </a>
          <a
            href="https://www.orbiter.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Orbiter_logo.svg"
              alt="Orbiter_logo"
            />
          </a>
          <a
            href="https://elk.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/ElkFinance_logo.svg"
              alt="ElkFinance_logo"
            />
          </a>
          <a
            href="https://app.velocore.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto -mb-20"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Velocore_logo.svg"
              alt="Velocore_logo"
            />
          </a>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2 w-full">
          <a
            href="https://debridge.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/debridge_logo.svg"
              alt="debridge_logo"
            />
          </a>
          <a
            href="https://bitgert.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Bitgert_logo.svg"
              alt="Bitgert_logo"
            />
          </a>
          <a
            href="https://kingpad.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/KingPad_logo.svg"
              alt="KingPad_logo"
            />
          </a>
          <a
            href="https://www.xo-dex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Xodex_logo.svg"
              alt="Xodex_logo"
            />
          </a>
          <a
            href="https://www.pinksale.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Pinksale_logo.svg"
              alt="Pinksale_logo"
            />
          </a>
          <a
            href="https://www.dexview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-32 w-auto "
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Dexview_logo.svg"
              alt="Dexview_logo"
            />
          </a>
        </CarouselItem> */}
      </CarouselContent>
    </Carousel>
  );
}

const EcosystemPartners = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className=" px-8 py-10 mx-auto max-w-[90rem]" ref={ref}>
      <h1
        className={`text-[#ffffffde] text-2xl md:text-4xl font-bold text-center mb-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
        data-aos="fade-up"
        ref={ref}
      >
        Ecosystem Partners & Backers
      </h1>
      <p
        className={`text-[#fc8618] mb-10 text-center text-sm md:text-base transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        data-aos="fade-up"
        data-aos-duration="2300"
        ref={ref}
      >
        Backed by the Best to Deliver the Best.
      </p>
      <div
        className={`imgs mt-16 md:hidden  transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <CarouselPlugin />
      </div>
      <div
        className={`imgs md:block hidden transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-center gap-4 mb-20">
          <a
            // href="https://bnbchain.org/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="/p1.png"
              alt="BNBChain_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            // href="https://zksync.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="/p2.png"
              alt="zksync_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            // href="https://linea.build/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="/p3.png"
              alt="Linea_logo"
              className="h-32 w-auto -mb-20"
            />
          </a>
          <a
            // href="https://www.okx.com/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img src="/p4.png" alt="OKX_logo" className="h-32 w-auto -mb-20" />
          </a>
        </div>
        {/* <div className="flex justify-center gap-4 -my-12">
          <a
            href="https://bnbchain.org/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/BNBChain_logo.svg"
              alt="BNBChain_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://zksync.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/zksync_logo.svg"
              alt="zksync_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://linea.build/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Linea_logo.svg"
              alt="Linea_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.okx.com/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/OKX_logo.svg"
              alt="OKX_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://kyber.network/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/KyberNetwork_logo.svg"
              alt="KyberNetwork_logo"
              className="h-40 w-auto"
            />
          </a>
        </div>
        <div className="flex justify-center gap-4 -my-12">
          <a
            href="https://level.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Level_logo.svg"
              alt="Level_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://syncswap.xyz/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Syncswap_logo.svg"
              alt="Syncswap_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://symbiosis.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Symbiosis_logo.svg"
              alt="Symbiosis_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.pangolin.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Pangolin_logo.svg"
              alt="Pangolin_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.mummy.finance/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/MummyFinance_logo.svg"
              alt="MummyFinance_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.orionprotocol.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Orion_logo.svg"
              alt="Orion_logo"
              className="h-40 w-auto"
            />
          </a>
        </div>
        <div className="flex justify-center gap-4 -my-12">
          <a
            href="https://quickswap.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Quickswap_logo.svg"
              alt="Quickswap_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.wombat.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Wombat_logo.svg"
              alt="Wombat_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://rubic.exchange/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Rubic_logo.svg"
              alt="Rubic_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://www.gnosis.io/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Gnosis_logo.svg"
              alt="Gnosis_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://swing.xyz/"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Swing_logo.svg"
              alt="Swing_logo"
              className="h-40 w-auto"
            />
          </a>
          <a
            href="https://izumi.finance/home"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/iZumi_logo.svg"
              alt="iZumi_logo"
              className="h-40 w-auto"
            />
          </a>
        </div>
        <div className="flex justify-center gap-4 -my-12">
          <a
            href="https://www.chainge.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Chainge_logo.svg"
              alt="Chainge_logo"
            />
          </a>
          <a
            href="https://dexalot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Dexalot_logo.svg"
              alt="Dexalot_logo"
            />
          </a>
          <a
            href="https://odos.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/ODOS_logo.svg"
              alt="ODOS_logo"
            />
          </a>
          <a
            href="https://www.orbiter.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Orbiter_logo.svg"
              alt="Orbiter_logo"
            />
          </a>
          <a
            href="https://elk.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/ElkFinance_logo.svg"
              alt="ElkFinance_logo"
            />
          </a>
          <a
            href="https://app.velocore.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Velocore_logo.svg"
              alt="Velocore_logo"
            />
          </a>
        </div>
        <div className="flex justify-center gap-4 -my-12">
          <a
            href="https://debridge.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/debridge_logo.svg"
              alt="debridge_logo"
            />
          </a>
          <a
            href="https://bitgert.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Bitgert_logo.svg"
              alt="Bitgert_logo"
            />
          </a>
          <a
            href="https://kingpad.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/KingPad_logo.svg"
              alt="KingPad_logo"
            />
          </a>
          <a
            href="https://www.xo-dex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Xodex_logo.svg"
              alt="Xodex_logo"
            />
          </a>
          <a
            href="https://www.pinksale.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Pinksale_logo.svg"
              alt="Pinksale_logo"
            />
          </a>
          <a
            href="https://www.dexview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center"
          >
            <img
              className="h-40 w-auto"
              src="https://cdn.xoxlabs.io/images/dex-v2/audit/Dexview_logo.svg"
              alt="Dexview_logo"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default EcosystemPartners;
