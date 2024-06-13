import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/SettingsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
      <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page"><Link to="/dashboard" style={{color:' #4caf50'}}>Dashboard</Link></li>
                <li class="breadcrumb-item active" aria-current="page"><Link to="/dashboard/settings" style={{color:'grey'}}>Settings</Link></li>
            </ol>
        </nav>
      <div className="container-settings d-flex justify-content-center align-items-center">
     
        <div className="settings-card shadow-sm mt-2 mt-sm-5 p-4 p-sm-5">
          <p className="setting-title">Settings</p>
          <form>
            <label className="label-password" style={{marginLeft: "0"}}>Change Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter new password"
              required autoFocus
            />
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              required
            />
            <ButtonStyle>Update</ButtonStyle>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default SettingsPage;
