import "../assets/css/CheckShippingCostsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
// import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StyledIcon } from '../components/StyledIcon';
import { faMapMarkerAlt, faMapPin, faWeightHanging, faBox } from '@fortawesome/free-solid-svg-icons';

const CheckShippingCostsPage = () => {
    return(
        <div>
        <Navbar />
        <div class="container mt-4">
            <p class="title">Cek Ongkir</p>
            <form>
                <div class="row g-3">
                    {/* Baris pertama */}
                    <div class="col-md-4">
                        <label><StyledIcon icon={faMapMarkerAlt} size="20px" color="black" /> From</label>
                        <input type="text" class="form-control form-input-shipping-cost" placeholder="City" />
                    </div>
                    <div class="col-md-4">
                        <label><StyledIcon icon={faMapPin} size="20px" color="black" /> To</label>
                        <input type="text" class="form-control form-input-shipping-cost" placeholder="City" />
                    </div>
                    <div class="col-md-4">
                        <label><StyledIcon icon={faWeightHanging} size="20px" color="black" /> Weight</label>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control form-input-shipping-cost" placeholder="1" aria-label="Weight" />
                            <span class="input-group-text">kg</span>
                        </div>
                    </div>     
                </div>
                <center>
                <ButtonStyle style={{borderRadius: '50px', alignItems: 'center', marginBottom: '20px'}}>Lihat Ongkir</ButtonStyle>
                </center>
            </form>
            <div class="input-container">
                <table class="tbl-input">
                    <tr>
                        <td>From</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>To</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="result-container">
            <table class="table">
                <thead class=" table-secondary">
                    <tr>
                        <th scope="col">Layanan</th>
                        <th scope="col">Jenis</th>
                        <th scope="col">Biaya Ongkir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Document</td>
                        <td>Document</td>
                        <td>Rp 10.000,-</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default CheckShippingCostsPage

