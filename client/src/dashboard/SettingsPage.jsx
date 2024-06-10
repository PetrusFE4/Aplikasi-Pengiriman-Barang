import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/SettingsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const SettingsPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
        <div className="settings-card shadow">
          <p className="setting-title">Settings</p>
          <form>
            <label className="label-password" style={{marginLeft: "0"}}>Change Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter new password"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
            />
            <ButtonStyle>Update</ButtonStyle>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;