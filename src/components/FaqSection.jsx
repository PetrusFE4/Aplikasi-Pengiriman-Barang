import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function FaqSection() {
  return (
    <section className="faq-section container-fluid pt-5 pb-5">
      <div className="container-faq d-flex flex-column">
      <div className="header-rates d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-2">
            Shipping <span>Rates</span>
          </h2>
          <p>This is the estimated cost of shipping the package</p>
        </div>
        <div className="body-rates d-flex flex-column flex-lg-row p-3 p-sm-5 "></div>
      </div>
    </section>
  );
}

export default FaqSection;
