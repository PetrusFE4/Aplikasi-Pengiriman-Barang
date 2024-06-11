import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/HeroSection.css";
import motor1 from "../assets/img/motor1-hero.svg";
import motor2 from "../assets/img/motor2-hero.svg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonStyle } from "./StyledComponents";
// import { useSpring, animated } from 'react-spring';
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const [refHero, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animasiHero1 = useSpring({
    opacity: 1,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  const animasiHero2 = useSpring({
    opacity: 1,
    transform: inView ? "translateX(0)" : "translateX(50px)",
    config: { duration: 1000 },
  });

  return (
    <section className="hero d-flex align-items-center justify-content-center pb-5 pb-sm-0">
      <div className="hero-content d-flex flex-column justify-content-center align-items-center gap-2">
        <h2 className="text-center fw-bold fs-1">
          Delivering Expeditions, <br /> <span>Safely </span>and
          <span> Swiftly</span>
        </h2>
        <p className="text-center ps-5 pe-5 mx-auto">
          Track your package delivery here easily and accurately
        </p>
        <form action="" className="track-form d-flex p-3 p-sm-0 align-items-center">
          <IoIosSearch size={35} color={"#808080"} />

          <input type="text" placeholder="Track your package now" />
          <ButtonStyle style={{ padding: "10px 15px" }} type="submit">
            <span className="d-none d-md-block">Track Now</span>
            <FaArrowRightLong />
          </ButtonStyle>
        </form>
        <div className="statistik d-flex flex-wrap justify-content-center align-item-center gap-3 gap-sm-5 mt-3 pb-5 pb-sm-0">
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Customer</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Pending</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Shipping</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Delivered</p>
          </div>
        </div>
      </div>
      <div
        ref={refHero}
        className="motor container-fluid d-flex justify-content-end justify-content-sm-between position-absolute bottom-0"
      >
        <animated.div
          style={animasiHero1}
          className="motor-1 d-none d-sm-block"
        >
          <img src={motor1} alt="motor-hero-section" />
        </animated.div>
        <animated.div style={animasiHero2} className="motor-2">
          <img src={motor2} alt="motor-hero-section" />
        </animated.div>
      </div>
    </section>
  );
}

export default HeroSection;
