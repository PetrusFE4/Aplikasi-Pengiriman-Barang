import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ShipmentDetailsPage.css";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const ShipmentDetailsPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div class="container mt-5">
        <div class="shipment-card shadow">
          <p class="shipment-title">Shipment Details</p>
          <div
            class="card-header text-white"
            style={{ backgroundColor: "#01AA5A" }}
          >
            <div class="d-flex justify-content-between">
              <span>Order ID</span>
              <span>#001ABC</span>
            </div>
          </div>
          <div class="shipment-card-body">
            <div class="tracking-item row mb-4">
              <div class="col-auto text-center">
                <div class="time">13.00</div>
                <div class="date">Nov 10</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle-status rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status">
                  <b>Order Received</b>
                </div>
              </div>
            </div>
            <div class="tracking-item row mb-4">
              <div class="col-auto text-center">
                <div class="time">15.00</div>
                <div class="date">Nov 10</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status  ">
                  Your order is being processed at Jakarta, MP - Warehouse
                </div>
              </div>
            </div>
            <div class="tracking-item row mb-4">
              <div class="col-auto text-center">
                <div class="time">16.00</div>
                <div class="date">Nov 10</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle-status rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status">
                  <b>Your Order is Shipped</b>
                </div>
              </div>
            </div>
            <div class="tracking-item row mb-4">
              <div class="col-auto text-center">
                <div class="time">20.00</div>
                <div class="date">Nov 10</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status  ">
                  Your order arrived at Semarang & scheduled delivery is 14
                  November
                </div>
              </div>
            </div>
            <div class="tracking-item row mb-4">
              <div class="col-auto text-center">
                <div class="time">12.00</div>
                <div class="date">Nov 14</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status">
                  Your order is out for delivery
                </div>
              </div>
            </div>
            <div class="tracking-item row">
              <div class="col-auto text-center">
                <div class="time">13.00</div>
                <div class="date">Nov 14</div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <div class="tracking-circle-status rounded-circle"></div>
              </div>
              <div class="col">
                <div class="tracking-status">
                  <b>Delivered</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentDetailsPage;
