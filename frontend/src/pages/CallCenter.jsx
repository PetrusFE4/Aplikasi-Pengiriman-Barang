import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faSquareXTwitter, faSquareWhatsapp, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'; 

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/CallCenter.css";
import ImageCallCenter from "../assets/img/image-call-center.png";
import { StyledIcon } from "../components/StyledIcon";

const CallCenter = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <p className="title-call">Call Center</p>
        <div className="row">
          <div className="col-md-6">
            <p>We are always ready to assist You, 24/7. Contact our Call Center for fast support and accurate solutions anytime.</p>
            <hr />
            <h4>Head Office & Logistics</h4>
            <p>Jl. Kalisombo No.18, Salatiga, Kec. Sidorejo, Kota Salatiga, Jawa Tengah, 50711</p>
            <p><StyledIcon icon={faSquarePhone} size="20px" color="#01AA5A" /> 021-123-456</p>
            <p><StyledIcon icon={faSquareWhatsapp} size="20px" color="#01AA5A" /> 0818-2349-7896</p>
            <p><StyledIcon icon={faSquareEnvelope} size="20px" color="#01AA5A" /> febeexpress@gmail.com</p>
            <p><StyledIcon icon={faSquareFacebook} size="20px" color="#01AA5A" /> <a href="https://www.facebook.com/">@febeexpress</a></p>
            <p><StyledIcon icon={faSquareInstagram} size="20px" color="#01AA5A" /> <a href="https://www.instagram.com/">@febeexpress</a></p>
            <p><StyledIcon icon={faSquareXTwitter} size="20px" color="#01AA5A" /> <a href="https://twitter.com/">@febeexpress</a></p>
          </div>
          <div className="col-md-6">
            <img src={ImageCallCenter} alt="call-center" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallCenter;
