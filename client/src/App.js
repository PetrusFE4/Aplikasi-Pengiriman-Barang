import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import CheckShippingCostsPage from "./pages/CheckShippingCostsPage";
import CallCenter from "./pages/CallCenter";
import NotFoundPage from "./pages/NotFoundPage";
import TrackingPage from "./pages/TrackingPage";
import OrderPage from "./dashboard/OrderPage";
import ShipmentDetailPage from "./dashboard/ShipmentDetailPage";
import SettingsPage from "./dashboard/SettingsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping-rates" element={<CheckShippingCostsPage />} />
          <Route path="/call-center" element={<CallCenter />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/tracking" element={<TrackingPage />}/>
          <Route path="/dashboard/order" element={<OrderPage/>} />
          <Route path="/shipment-detail" element={<ShipmentDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;