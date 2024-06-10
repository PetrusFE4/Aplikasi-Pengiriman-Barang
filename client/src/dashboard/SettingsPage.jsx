import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/SettingsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const SettingsPage = () => {
    return(
<div className="">
<NavbarDashboard/>
        <div class="container mt-5">
            <div class="settings-card shadow">
                <p class="setting-title">Settings</p>
                <from>
                    <label>Change Password</label>
                    <input class="form-control" type="password" placeholder="Enter new password"/>
                    <input class="form-control" type="password" placeholder="Confirm password"/>
                    <ButtonStyle>Update</ButtonStyle>
                </from>
            </div>
        </div>
</div>
    );
}

export default SettingsPage;