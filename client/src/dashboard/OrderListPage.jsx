import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/OrderListPage.css";

const OrderListPage = () => {
    return(
        
        <div class="container-fluid mt-5">
            <p class='orderlist-title'>Order List</p>
            <table class="table  table-bordered table-order shadow">
            <thead class="table" >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID Order</th>
                    <th scope="col">Username</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Recipient Name</th>
                    <th scope="col">Recipient Address</th>
                    <th scope="col">Recipient Phone Number</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Service Type</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Action</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>#Order12345</td>
                    <td>budi123</td>
                    <td>Budi Setiawan</td>
                    <td>Eko santoso</td>
                    <td>Jl. Bima, Semarang Tengah</td>
                    <td>08987809868</td>
                    <td>Dokumen Pendaftaran</td>
                    <td>Dokumen</td>
                    <td>1kg</td>
                    <td>Rp 10.000</td>
                    <td>
                        <div className="d-flex flex-column ">
                            <button type="button" className="btn btn-success btn-sm me-1" style={{marginBottom: '5px'}}>Delivered</button>
                            <button type="button" className="btn btn-warning btn-sm me-1" style={{marginBottom: '5px'}}>Pending</button>
                            <button type="button" className="btn btn-info btn-sm">Shipment</button>
                        </div>
                    </td>
                    <td>Delivered</td>
                </tr>
            </tbody>
            </table>
        </div>
        
    );
}

export default OrderListPage;