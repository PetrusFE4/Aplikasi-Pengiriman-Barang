import "../assets/css/ShipmentDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ShipmentDetailPage = () =>{
    return(
        <div class="container mt-5">
        <div class="card shadow">
        <p title="title-shipment">Shipment Detail</p>
            <div class="card-header text-white" style={{margin: '0px 50px', backgroundColor: '#01AA5A', border: 'none' , borderRadius:'5px'}}>
                <div class="d-flex justify-content-between" style={{margin: '0px 10px'}}>
                    <span>Order ID</span>
                    <span>#001ABC</span>
                </div>
            </div>
            <div class="card-body" style={{margin: '0px 50px'}}>
                <div class="tracking-item row mb-4">
                    <div class="col-auto text-center">
                        <div class="time">13.00</div>
                        <div class="date">Nov 10</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle-status rounded-circle " style={{backgroundColor: '#01AA5A'}}></div>
                    </div>
                    <div class="col">
                        <div class="tracking-status"><b>Order Received</b></div>
                    </div>
                </div>
                <div class="tracking-item row mb-4">
                    <div class="col-auto text-center">
                        <div class="time">15.00</div>
                        <div class="date">Nov 10</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle rounded-circle" style={{backgroundColor: 'black'}}></div>
                    </div>
                    <div class="col">
                        <div>Your order is being processed at Jakarta, MP - Warehouse</div>
                    </div>
                </div>
                <div class="tracking-item row mb-4">
                    <div class="col-auto text-center">
                        <div class="time">16.00</div>
                        <div class="date">Nov 10</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle-status rounded-circle " style={{backgroundColor: '#01AA5A'}}></div>
                    </div>
                    <div class="col">
                        <div class="tracking-status"><b>Your Order is Shipped</b></div>
                    </div>
                </div>
                <div class="tracking-item row mb-4">
                    <div class="col-auto text-center">
                        <div class="time">20.00</div>
                        <div class="date">Nov 10</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle rounded-circle" style={{backgroundColor: 'black'}}></div>
                    </div>
                    <div class="col">
                        <div>Your order arrived at Semarang & scheduled delivery is 14 November</div>
                    </div>
                </div>
                <div class="tracking-item row mb-4">
                    <div class="col-auto text-center">
                        <div class="time">12.00</div>
                        <div class="date">Nov 14</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle rounded-circle" style={{backgroundColor: 'black'}}></div>
                    </div>
                    <div class="col">
                        <div>Your order is out for delivery</div>
                    </div>
                </div>
                <div class="tracking-item row">
                    <div class="col-auto text-center">
                        <div class="time">13.00</div>
                        <div class="date">Nov 14</div>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <div class="tracking-circle-status rounded-circle" style={{backgroundColor: '#01AA5A'}}></div>
                    </div>
                    <div class="col">
                        <div class="tracking-status"><b>Delivered</b></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ShipmentDetailPage;