import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/BenefitSection.css";
import ImageBenefit from "../assets/img/image-benefit.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";

function BenefitSection() {
  return (
    <section className="benefit container-fluid pt-5 pb-5  d-flex align-items-center">
      <div className="benefit-container container-fluid d-flex flex-column flex-lg-row justify-content-beetwen">
        <div className="benefit-content col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center order-2 order-lg-1 pt-5 pb-1">
          <div className="header-content text-center">
            <h2 className="fs-2 fw-bold">
              Our <span>Benefit</span>
            </h2>
            <p>Discover some of the benefits of choosing us</p>
          </div>
          <div className="body-content d-flex flex-wrap ps-sm-5 pe-sm-5 pt-4 pb-4 gap-4  gap-sm-3 justify-content-center">
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            <div className="card-benefit d-flex gap-1">
              <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
              <p className="fw-semibold fs-5">Fast and reliable deelivery</p>
            </div>
            
          </div>
        </div>
        <div className="benefit-image col-12 col-lg-6 d-flex justify-content-center order-1 order-lg-2 pt-5">
          <img src={ImageBenefit} alt="benefit section" />
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
