import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ShippingRatesSection.css";
import ImageShippingRates from "../assets/img/image-shipping-rates.svg";
import { ButtonStyle } from "./StyledComponents";
import { FaArrowRightLong } from "react-icons/fa6";

function ShippingRatesSection() {
  return (
    <section className="shipping-rates container-fluid pt-5 pb-5">
      <div className="container-rates">
        <div className="header-rates d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-2">
            Shipping <span>Rates</span>
          </h2>
          <p>This is the estimated cost of shipping the package</p>
        </div>
        <div className="body-rates d-flex p-5">
          <div className="img-rates col-6 d-flex justify-content-center align-items-center">
            <img src={ImageShippingRates} alt=" shipping rates section" />
          </div>
          <div className="form-container d-flex justify-content-center align-items-center">
            <form
              action=""
              className="form-shipping-rates col-6 d-flex flex-wrap justify-content-center p-5 "
            >
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="name">
                  TYPE OF GOODS
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="form-control"
                  placeholder="Select"
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="email">
                  WEIGHT
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="form-control"
                  placeholder="Weight"
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="address">
                  WIDTH
                </label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  className="form-control"
                  placeholder="Width"
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="city">
                  HEIGH
                </label>
                <input
                  type="number"
                  id="height"
                  name="number"
                  className="form-control"
                  placeholder="Heigh"
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="state">
                  FROM
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="d-flex flex-column col-12 col-md-6 p-2 gap-3">
                <label className="fw-bold" htmlFor="zip">
                  TO
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <ButtonStyle
                width={"100%"}
                borderRadius={"50px"}
                className="mt-4 ms-2 me-2 d-flex justify-content-between align-item-center"
              >
                Estimate <FaArrowRightLong/>
              </ButtonStyle>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingRatesSection;
