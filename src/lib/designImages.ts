/**
 * Photography extracted from the SynC360 design files (synco360_redesign_v7,
 * scan_pay_leave, loyalty). Files live in `public/design/`, so they are
 * referenced by absolute URL rather than imported through Vite.
 */

export const img = {
  // --- shared / homepage ---
  delivery: "/design/home-01-5b3261f6.jpg",
  heroOwner: "/design/home-02-1f6a39aa.jpg",
  inventoryTablet: "/design/home-03-aaaa2500.jpg",
  inventoryFridge: "/design/home-04-665cffb9.jpg",
  inventoryApparel: "/design/home-05-2601a93a.jpg",
  onlineCheckout: "/design/home-06-28aa1142.jpg",
  onlineBrowsing: "/design/home-07-6903aded.jpg",
  contactlessPay: "/design/home-08-cb8f4601.jpg",
  appDashboard: "/design/home-09-d99f8f3a.jpg",
  bnplCustomer: "/design/home-10-bece9ecb.jpg",
  loyaltyCustomer: "/design/home-11-af6598cb.jpg",
  customerSms: "/design/home-12-91b51111.jpg",
  expensesLaptop: "/design/home-13-96c47c28.jpg",
  scanBarcode: "/design/home-14-529f44d8.jpg",
  payConfirmed: "/design/home-15-6eb2933f.jpg",
  shopperPicking: "/design/home-16-587a924f.jpg",
  marketVendor: "/design/home-17-e5408e05.jpg",

  // --- scan & pay ---
  scanAppScreen: "/design/scan-01-7dda068e.jpg",
  scanWaterBottle: "/design/scan-02-3a1f48f8.jpg",
  scanBarcodeCloseup: "/design/scan-03-67e0d041.jpg",
  scanAtTill: "/design/scan-04-5ea7e789.jpg",
  scanReviewPay: "/design/scan-05-9fe53a32.jpg",
  scanPickAndGo: "/design/scan-06-ac8eb719.jpg",
  scanAisle: "/design/scan-07-e8f85115.jpg",
  scanJuice: "/design/scan-08-e0d3eb9b.jpg",
  scanJar: "/design/scan-09-59b1c268.jpg",
} as const;

/** Where the app's real sign-up / login / demo flows live. */
export const links = {
  signup: "https://business.sync360.africa/signup",
  login: "https://business.sync360.africa",
  whatsapp: "https://wa.me/message/BEC7OOFPUWZZK1",
  appStore: "https://apps.apple.com/app/sync360/id6742539825",
  playStore: "https://play.google.com/store/apps/details?id=com.sync.sink",
} as const;
