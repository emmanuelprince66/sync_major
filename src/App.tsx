import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TawkToChat from "./components/TawkToChat";
import Home from "./pages/Home";
import Loyalty from "./pages/Loyalty";
import ScanAndPay from "./pages/ScanAndPay";

function App() {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-and-pay" element={<ScanAndPay />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <TawkToChat />
    </div>
  );
}

export default App;
