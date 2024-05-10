import "./App.css";
import BODCInfo from "./components/BodcInfo";
import Community from "./components/Community";
import DevelopmentMap from "./components/DevelopmentMap";
import EcosystemPartners from "./components/EcosystemPartners";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InstructionVideo from "./components/InstructionVideo";
import Newsletter from "./components/Newsletter";
import PartnerSlider from "./components/PartnerSlider";
import Security from "./components/Security";
import SupportedBlockchain from "./components/SupportedBlockchain";

function App() {
  return (
    <main className="overflow-hidden font-geomGraphic">
      <Header />
      <Hero />
      <SupportedBlockchain />
      <InstructionVideo />
      <EcosystemPartners />
      <FeatureSection />
      <BODCInfo />
      <PartnerSlider />
      <Security />
      <DevelopmentMap />
      <Community />
      <Newsletter />
      <Footer />
      <div className="bg-[#282828] py-5">
        <p className="text-sm text-center text-[#ffffffde]">
          © 2024 Bookodc. All Rights Reserved
        </p>
      </div>
    </main>
  );
}

export default App;
