import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <footer className=" mt-auto">
      <div
        className="footer1 d-flex flex-column justify-content-center"
        style={{ backgroundColor: "#a0e1c3" }}
      >
        <div className="isi-footer1 d-flex flex-column flex-sm-row justify-content-around pt-4 pb-4 ps-4 pe-4 pt-lg-5 pb-lg-5 ps-lg-0 pe-lg-0">
          <div
            className="judul-deskripsi d-flex flex-column gap-3 pe-3"
            style={{ width: "350px" }}
          >
            <h2 className="fs-2 fw-bold">
              Febe<span style={{ color: "#01aa5a" }}>Express</span>
            </h2>
            <p className="fs-6">
              FebeExpress is a comprehensive delivery platform that provides
              fast, efficient, and reliable delivery services.
            </p>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">About</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">Service</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#document"
                >
                  Document
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#goods"
                >
                  Goods
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#cargo"
                >
                  Cargo
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">Support</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#callcenter"
                >
                  Call Center
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#supportcenter"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="footer2 d-flex justify-content-center align-items-center text-white fs-6 fw-bold p-3"
        style={{ backgroundColor: "#1e293b" }}
      >
        <p>&copy; 2024 FebeExpress | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
