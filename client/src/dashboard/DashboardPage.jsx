import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import "../assets/css/TrackingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/DashboardPage.css";
import { ButtonStyle } from "../components/StyledComponents";

function DashboardPage() {
  return (
    <>
      <NavbarDashboard />
      <div class="container mt-5">
        {/* <p class="welcome-dashboard">Welcome, Admin1!</p> */}
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="dasboard-card card no-border shadow-sm" style={{backgroundColor: '#FEF5C5', border: '1px solid   #FEF5C5'}}>
                    <div class="card-body">
                        <h2 id="userCount" class="display-6">0</h2>
                        <p class="card-text">Delivered Items</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="dasboard-card card no-border shadow-sm" style={{backgroundColor: '#C2EBD7', border: '1px solid  #C2EBD7'}}>
                    <div class="card-body">
                        <h2 id="revenue" class="display-6">0</h2>
                        <p class="card-text">Shipped Items</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="dasboard-card card no-border shadow-sm" style={{backgroundColor: '#D0F6FE', border: '1px solid  #D0F6FE'}}>
                    <div class="card-body">
                        <h2 id="dailyVisits" class="display-6">0</h2>
                        <p class="card-text">Pending Items</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mb-4">
                <div class="dasboard-card card no-border shadow-sm" style={{ border: '1px solid   white'}}>
                    <div class="card-body">
                        <p><b>Latest Order</b></p>
                        <div className="table-responsive">
                        <table class="table table-dashboard text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID Order</th>
                                <th scope="col">Username</th>
                                <th scope="col">Fullname</th>
                                <th scope="col">Total Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>#OD123</td>
                                <td>Budi</td>
                                <td>Budi Santosa</td>
                                <td>Rp 14.000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>#OD123</td>
                                <td>Budi</td>
                                <td>Budi Santosa</td>
                                <td>Rp 14.000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>#OD123</td>
                                <td>Budi</td>
                                <td>Budi Santosa</td>
                                <td>Rp 14.000</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        <ButtonStyle style={{width:'30%'}}>See Details</ButtonStyle>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="dasboard-card card no-border shadow-sm" style={{ border: '1px solid   white'}}>
                    <div class="card-body text-center">
                        <p><b>Role</b></p>
                        <p>Admin</p>
                        <hr />
                        <p><b>Order Quantity</b></p>
                        <p>10</p>
                        <hr />
                        <p><b>Number of Users</b></p>
                        <p>10</p>
                    </div>
                </div>
            </div>
      </div>
      </div>
      
    </>
  );
}
export default DashboardPage;
