import BusinessServices from "@/components/website/BusinessServices";
import FeatureSection from "@/components/website/FeatureSection";
import FinalCTA from "@/components/website/FinalCTA";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import HowItWorksSteps from "@/components/website/HowItWorkSteps";
import KeyFeatures from "@/components/website/KeyFeatures";
import RequestService from "@/components/website/RequestService";
import WhyVacei from "@/components/website/WhyVacei";

export default function Website() {
  return (
    <>
      <section className="main_hero bg-white relative min-h-screen overflow-hidden">
        <Header />
        <div className="relative z-10">
          <FeatureSection />
        </div>

        <div className="max-w-[600px] w-1/2 h-[600px] bg-[#FFF8AF] blur-[1000px] absolute top-0 left-0 z-[9]"></div>
        <div className="max-w-[600px] w-1/2 h-[600px] -rotate-180 bg-[#AFFFC1] blur-[1000px] absolute top-0 right-0 z-[8]"></div>
        <div className="max-w-[600px] w-1/2 h-[600px] bg-[#AFD2FF] blur-[1000px] absolute bottom-0 left-0 z-[7]"></div>
        <div className="max-w-[600px] w-1/2 h-[600px] -rotate-180 bg-[#CAAFFF] blur-[1000px] absolute bottom-0 right-0 z-[6]"></div>
        <div className="bg-gradient-end"></div>
      </section>

      <HowItWorksSteps />
      <WhyVacei />
      <KeyFeatures />
      <BusinessServices />
      <RequestService />
      <FinalCTA />
      <Footer />
    </>
  );
}
