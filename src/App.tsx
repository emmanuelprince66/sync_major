import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TawkToChat from "./components/TawkToChat";
import Home from "./pages/Home";
import Loyalty from "./pages/Loyalty";
import Privacy from "./pages/Privacy";
import ScanAndPay from "./pages/ScanAndPay";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <TawkToChat />
    </div>
  );
}

export default App;
