import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ShippingRatesSection.css";
import ImageShippingRates from "../assets/img/image-shipping-rates.svg";
import { ButtonStyle } from "./StyledComponents";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from "react-intersection-observer";

function ShippingRatesSection() {
  const [refShippingRates, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animasiShippingRates = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <section className="shipping-rates container-fluid pt-5 pb-5">
      <div className="container-rates d-flex flex-column">
        <div className="header-rates d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-2">
            Shipping <span>Rates</span>
          </h2>
          <p className="text-center">This is the estimated cost of shipping the package</p>
        </div>
        <div className="body-rates d-flex flex-column flex-lg-row p-3 p-sm-5 ">
          <animated.div
            ref={refShippingRates}
            style={animasiShippingRates}
            className="img-rates d-flex justify-content-center align-items-center col-12 col-lg-6"
          >
            <img src={ImageShippingRates} alt=" shipping rates section" />
          </animated.div>
          <div className="form-container d-flex justify-content-center align-items-center col-12 col-lg-6">
          <animated.div
            ref={refShippingRates}
            style={animasiShippingRates}>
            <form
              action=""
              className="form-shipping-rates  d-flex flex-wrap justify-content-center p-5 "
            >
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="name">
                  TYPE OF SERVICE
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="Select"
                  required
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="email">
                  WEIGHT
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="Weight"
                  required
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="address">
                  WIDTH
                </label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="Width"
                  required
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="city">
                  HEIGH
                </label>
                <input
                  type="number"
                  id="height"
                  name="number"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="Heigh"
                  required
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="state">
                  FROM
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="City"
                  required
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                <label className="fw-bold" htmlFor="zip">
                  TO
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  className="form-control input-form-shipping-rate-section"
                  placeholder="City"
                  required
                />
              </div>
              <ButtonStyle
                style={{ width: "100%" }}
                className="mt-4 ms-2 me-2 d-flex justify-content-between align-item-center"
              >
                Estimate <FaArrowRightLong />
              </ButtonStyle>
            </form>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingRatesSection;
