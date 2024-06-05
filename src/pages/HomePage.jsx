import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default HomePage;
