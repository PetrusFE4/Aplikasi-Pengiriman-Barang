import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import CheckShippingCostsPage from "./pages/CheckShippingCostsPage";
import CallCenter from "./pages/CallCenter";
import NotFoundPage from "./pages/NotFoundPage";
import TrackingPage from "./pages/TrackingPage";
import OrderPage from "./dashboard/OrderPage";
import SettingsPage from "./dashboard/SettingsPage";
import UserListPage from "./dashboard/UserListPage";
import OrderListPage from "./dashboard/OrderListPage";
import MyProfilePage from "./dashboard/MyProfilePage";
import AddAdmin from "./dashboard/AddAdmin";
import TrackingPageDashboard from "./dashboard/TrackingPageDashboard";
import Dashboard from "./dashboard/DashboardPage";
import Unauthorized from "./dashboard/Unauthorized";
import ProtectedRoute from "./Auth/ProtectedRoute";

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
          <Route path="/tracking" element={<TrackingPage />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute element={Dashboard} roles={["user", "admin","superadmin"]} />
            }
          />

          <Route
            path="/dashboard/order"
            element={<ProtectedRoute element={OrderPage} roles={["user"]} />}
          />
          <Route
            path="/dashboard/settings"
            element={
              <ProtectedRoute
                element={SettingsPage}
                roles={["user", "admin","superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/user-list"
            element={
              <ProtectedRoute element={UserListPage} roles={["admin","superadmin"]} />
            }
          />
          <Route
            path="/dashboard/order-list"
            element={
              <ProtectedRoute element={OrderListPage} roles={["admin","superadmin"]} />
            }
          />
          <Route
            path="/dashboard/add-admin"
            element={<ProtectedRoute element={AddAdmin} roles={["superadmin"]} />}
          />
          <Route
            path="/dashboard/myprofile"
            element={
              <ProtectedRoute
                element={MyProfilePage}
                roles={["user", "admin","superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/tracking"
            element={
              <ProtectedRoute
                element={TrackingPageDashboard}
                roles={["user"]}
              />
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
