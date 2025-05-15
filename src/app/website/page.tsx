import FeatureSection from "@/components/website/FeatureSection";
import Header from "@/components/website/Header";
import HowItWorksSteps from "@/components/website/HowItWorkSteps";
import HowItWorks from "@/components/website/HowItWorkVideo";
import KeyFeatures from "@/components/website/KeyFeatures";
import RequestService from "@/components/website/RequestService";
import WhyChooseUs from "@/components/website/WhyChooseUs";

export default function Website() {
  return (
    <>
      <div className="bg-primary py-2">
        <div className="max-w-7xl mx-auto po">
          <p className="text-white text-center">Now live! - Vecei's 2025 Founder Salary Report <i className="fi fi-rr-arrow-right align-middle ms-1"></i></p>
        </div>
      </div>
      <Header />
      <FeatureSection />
      <HowItWorks />
      <HowItWorksSteps />
      <KeyFeatures />
      <RequestService />
      {/* <WhyChooseUs /> */}
    </>
  );
}
