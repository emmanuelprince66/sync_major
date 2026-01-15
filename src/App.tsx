import { AccordionContent } from "./components/AccordionContent";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReachUs from "./components/ReachUs";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Content />
      <AccordionContent />
      <ReachUs />
      <Footer />
    </div>
  );
}

export default App;
