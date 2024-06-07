import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import CheckShippingCostsPage from "./pages/CheckShippingCostsPage";
import CallCenter from "./pages/CallCenter";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cek-ongkir" element={<CheckShippingCostsPage />} />
          <Route path="/call-center" element={<CallCenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;