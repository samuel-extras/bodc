import Allocation from "@/components/Allocation";
import BODCInfo from "@/components/BodcInfo";
import Community from "@/components/Community";
import DevelopmentMap from "@/components/DevelopmentMap";
import EcosystemPartners from "@/components/EcosystemPartners";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import InstructionVideo from "@/components/InstructionVideo";
import Newsletter from "@/components/Newsletter";
import PartnerSlider from "@/components/PartnerSlider";
import Security from "@/components/Security";
import SupportedBlockchain from "@/components/SupportedBlockchain";
import Tokenomics from "@/components/Tokenomics";
import Usecase from "@/components/UseCase";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <Hero />
      <SupportedBlockchain />
      <InstructionVideo />
      <EcosystemPartners />
      <FeatureSection />
      <BODCInfo />
      <Tokenomics />
      <Usecase />
      <Allocation />
      <PartnerSlider />
      <Security />
      <DevelopmentMap />
      <Community />
      <Newsletter />
    </>
  ),
});
