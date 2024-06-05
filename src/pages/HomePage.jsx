import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import BenefitSection from "../components/BenefitSection";
import ShippingRatesSection from "../components/ShippingRatesSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <BenefitSection />
      <ShippingRatesSection />
      <Footer />
    </div>
  );
}

export default HomePage;
