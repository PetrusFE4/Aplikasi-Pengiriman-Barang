import "../assets/css/SettingsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ButtonStyle } from "../components/StyledComponents";

const SettingsPage = () => {
    return(
        <div class="container mt-5">
            <div class="card shadow">
                <p>Settings</p>
            <form>
                <label htmlFor="password">Change Password</label>
                <input class="form-control" type="password" placeholder="Enter Password"/>
                <input class="form-control" type="password" placeholder="Confirm Password"/>
                <ButtonStyle>Update</ButtonStyle>
            </form>
            </div>
        </div>

    );
}

export default SettingsPage;