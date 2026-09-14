import { AccordionContent } from "../components/AccordionContent";
import Benefits from "../components/Benefits";
import BnplLoyalty from "../components/BnplLoyalty";
import Capabilities from "../components/Capabilities";
import CaseStudy from "../components/CaseStudy";
import Content from "../components/Content";
import CustomerExpenses from "../components/CustomerExpenses";
import E2EBand from "../components/E2EBand";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Industries from "../components/Industries";
import LogisticsSpotlight from "../components/LogisticsSpotlight";
import ReachUs from "../components/ReachUs";
import ShelfPriceSpotlight from "../components/ShelfPriceSpotlight";

const Home = () => (
  <>
    <Header />
    <Content />
    <Capabilities />
    <LogisticsSpotlight />
    <BnplLoyalty />
    <CustomerExpenses />
    <ShelfPriceSpotlight />
    <E2EBand />
    <Benefits />
    <Industries />
    <CaseStudy
      heading="Sync360 helps Trufoods Supermarket cut checkout time by 60%."
      columns={[
        {
          label: "Problem",
          body: "Long checkout queues during peak hours were costing Trufoods walk-in sales, especially on weekends.",
        },
        {
          label: "Solution",
          body: "Trufoods rolled out Sync360's POS with mobile checkout and synced inventory across all three branches.",
        },
        {
          label: "Results",
          body: "Average checkout time dropped from 3 minutes to under 70 seconds, with zero shelf-price mismatches since launch.",
        },
      ]}
      quote={{
        text: "Sync360 changed how our stores move. Our staff spend less time at the till and more time helping customers.",
        attribution: "Store Operations Lead, Trufoods Supermarket",
      }}
      stats={[
        { value: "60%", label: "Faster checkout" },
        { value: "0", label: "Price mismatches" },
        { value: "3", label: "Branches synced" },
      ]}
      note="Illustrative example — swap in a real customer story here."
    />
    <AccordionContent />
    <ReachUs />
    <Footer />
  </>
);

export default Home;
