import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/AddAdmin.css";
import { ButtonStyle } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

function AddAdmin() {
  return (
    <>
      <NavbarDashboard />
      <div className="container-add-admin d-flex justify-content-center mt-sm-5">
        <form
          action=""
          className="p-5 d-flex flex-column gap-5"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <div className="container-input-add-admin d-flex flex-column flex-sm-row gap-3 gap-sm-5 rounded-2 ">
            <div className="kiri-add-admin d-flex flex-column gap-2">
              <label>
                Fullname<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fullname"
                required
                autoFocus
              />
              <label>
                Username<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                required
              />
              <label>
                Password<span className="text-danger">*</span>
              </label>
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="kanan-add-admin d-flex flex-column gap-2">
              <label>
                Phone<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" placeholder="Your Phone" required />
              <label>
                Email<span className="text-danger">*</span>
              </label>
              <input type="email" className="form-control" placeholder="Email Address" required />
              <label>
                Address<span className="text-danger">*</span>
              </label>
              <textarea
                type="password"
                className="form-control"
                rows="1"
                placeholder="Your Address"
                required
              />
            </div>
          </div>
          <ButtonStyle>Add Admin</ButtonStyle>
        </form>
      </div>
    </>
  );
}

export default AddAdmin;
