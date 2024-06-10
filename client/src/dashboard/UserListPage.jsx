import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/UserListPage.css";

import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const UserListPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div class="container mt-5">
        <p class="userlist-title">User List</p>
        <table class="table table-user shadow-sm">
          <thead class="table">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Fullname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Budi123</td>
              <td>Budi Setiawan</td>
              <td>08967564783</td>
              <td>budi@gmail.com</td>
              <td>Semarang, Jawa Tengah</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Budi123</td>
              <td>Budi Setiawan</td>
              <td>08967564783</td>
              <td>budi@gmail.com</td>
              <td>Semarang, Jawa Tengah</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Budi123</td>
              <td>Budi Setiawan</td>
              <td>08967564783</td>
              <td>budi@gmail.com</td>
              <td>Semarang, Jawa Tengah</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserListPage;