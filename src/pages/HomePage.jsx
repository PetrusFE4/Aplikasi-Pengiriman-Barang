import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default HomePage;
