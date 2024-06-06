import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/TestimoniSection.css";
import ImageTestimoni1 from "../assets/img/image-testimoni-1.svg";

function TestimoniSection() {
  return (
    <section
      className="testimoni-section pt-5 pb-5 ps-2 pe-2 ps-sm-5 pe-sm-5 "
      id="testimoni"
    >
      <div className="testimoni-container container-fluid d-flex flex-column justify-content-center ">
        <div className="testimoni-header text-center">
          <h2>
            Our <span style={{ color: "#01aa5a" }}>Testimonial</span>
          </h2>
          <p className="text-center">These are some testimonial from our customer.</p>
        </div>
        <div className="testimoni-body d-flex flex-wrap justify-content-center gap-5 pt-5 pb-5">
          <div
            className="card-testimoni d-flex p-3 flex-column card gap-3"
            style={{
              width: "18rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="header-card d-flex gap-3 align-items-center">
              <div
                className="image-card d-flex align-items-end justify-content-center"
                style={{
                  width: "75px",
                  height: "75px",
                  backgroundColor: "#e2e2e3",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImageTestimoni1}
                  alt="foto user testimoni"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="identitas d-flex flex-column"
                style={{ lineHeight: "0.5em" }}
              >
                <p>Dimas Pratama</p>
                <p>@dimaspratama</p>
              </div>
            </div>
            <div className="body-card">
              <p>
                Pelayanan pengiriman yang sangat cepat dan profesional. Paket
                saya sampai dalam kondisi sempurna dan tepat waktu.
              </p>
            </div>
          </div>
          <div
            className="card-testimoni d-flex p-3 flex-column card gap-3"
            style={{
              width: "18rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="header-card d-flex gap-3 align-items-center">
              <div
                className="image-card d-flex align-items-end justify-content-center"
                style={{
                  width: "75px",
                  height: "75px",
                  backgroundColor: "#e2e2e3",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImageTestimoni1}
                  alt="foto user testimoni"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="identitas d-flex flex-column"
                style={{ lineHeight: "0.5em" }}
              >
                <p>Dimas Pratama</p>
                <p>@dimaspratama</p>
              </div>
            </div>
            <div className="body-card">
              <p>
                Pelayanan pengiriman yang sangat cepat dan profesional. Paket
                saya sampai dalam kondisi sempurna dan tepat waktu.
              </p>
            </div>
          </div>
          <div
            className="card-testimoni d-flex p-3 flex-column card gap-3"
            style={{
              width: "18rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="header-card d-flex gap-3 align-items-center">
              <div
                className="image-card d-flex align-items-end justify-content-center"
                style={{
                  width: "75px",
                  height: "75px",
                  backgroundColor: "#e2e2e3",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ImageTestimoni1}
                  alt="foto user testimoni"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="identitas d-flex flex-column"
                style={{ lineHeight: "0.5em" }}
              >
                <p>Dimas Pratama</p>
                <p>@dimaspratama</p>
              </div>
            </div>
            <div className="body-card">
              <p>
                Pelayanan pengiriman yang sangat cepat dan profesional. Paket
                saya sampai dalam kondisi sempurna dan tepat waktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimoniSection;
