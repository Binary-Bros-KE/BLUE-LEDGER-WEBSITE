import {
  BarChart3,
  Building2,
  ClipboardCheck,
  FileText,
  FolderInput,
  KeyRound,
  PackageCheck,
  Receipt,
  Smartphone,
  Users,
  Wallet,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type FeaturePoint = { title: string; body: string };

export type FeatureImage = {
  /** Real screenshot path under /public, or "" to render a labelled placeholder. */
  src: string;
  alt: string;
  /** Shown inside the placeholder box until the real screenshot is dropped in. */
  label: string;
  /** Intrinsic size — drives aspect ratio. Defaults to a 360×225 landscape frame. */
  width?: number;
  height?: number;
};

export type FeatureGroup = {
  id: string;
  /** Two-digit index shown as an eyebrow number. */
  num: string;
  tone: "gold-text" | "green" | "blue";
  icon: LucideIcon;
  /** Short all-caps label for the dashed pill badge. */
  kicker: string;
  /** Keyword-rich heading — reads as an H3 on the page. */
  title: string;
  /** One-line summary used on the home-page teaser cards. */
  tagline: string;
  image: FeatureImage;
  points: FeaturePoint[];
};

// ---------------------------------------------------------------------------
// The full product tour. Shared by the home-page teaser (<ProductTour />) and
// the dedicated /features landing page (<FeatureTour />). Copy is written to
// carry the search terms Kenyan traders actually use — "offline POS", "multi
// branch", "e-receipts on WhatsApp", "POS without KRA eTIMS", "migrate POS".
// ---------------------------------------------------------------------------

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "sales-receipts",
    num: "01",
    tone: "gold-text",
    icon: Receipt,
    kicker: "SALES & E-RECEIPTS",
    title: "Faster checkout and paperless e-receipts",
    tagline: "Ring up sales offline, then print a receipt or send it on WhatsApp or email.",
    image: {
      src: "/screenshots/receipts.png",
      alt: "Blue Ledger receipts screen — searchable sales history with statuses and one-click reprint",
      label: "Receipts screen (receipts.png)",
    },
    points: [
      {
        title: "Print receipts or send e-receipts",
        body: "Hand over a thermal print or go completely paperless — deliver the receipt straight to the customer's WhatsApp or email in seconds. Lower paper costs, a tidier counter, and a receipt the customer can't lose.",
      },
      {
        title: "Sell with or without internet",
        body: "Every sale is written to a local ledger the instant you complete it, then syncs to the cloud when the connection returns. Power cuts and dead network never stop the till.",
      },
      {
        title: "Returns and voids with a full trail",
        body: "Reverse a sale, restock the item automatically, and keep an audit trail of who did what and when.",
      },
    ],
  },
  {
    id: "mobile-app",
    num: "02",
    tone: "blue",
    icon: Smartphone,
    kicker: "MOBILE APP",
    title: "Blue Ledger mobile app — your shop in your pocket",
    tagline: "Watch every branch live, and sell from a phone exactly like the desktop till.",
    image: {
      src: "",
      alt: "Blue Ledger mobile app — live shop dashboard and mobile point of sale running on a phone",
      label: "Mobile app screen (mobile-app.png) — portrait",
      width: 260,
      height: 460,
    },
    points: [
      {
        title: "See your shop from anywhere",
        body: "Live sales, stock, cash and pending approvals from every branch, on your phone — whether you are behind the counter or three towns away.",
      },
      {
        title: "A point of sale in your pocket",
        body: "Staff walk the shop floor with the mobile till: check live stock on any product, then ring up the sale on the spot without going back to a computer.",
      },
      {
        title: "Full documents, not a cut-down app",
        body: "Create sales, invoices and quotations from the phone exactly like the desktop POS — same prices, same approvals, same cloud sync.",
      },
    ],
  },
  {
    id: "invoices-quotations",
    num: "03",
    tone: "green",
    icon: FileText,
    kicker: "INVOICES & QUOTATIONS",
    title: "Invoices, quotations and delivery notes — 100% paperless",
    tagline: "Create, share and track credit sales end to end, sent by WhatsApp or email.",
    image: {
      src: "",
      alt: "Blue Ledger invoices and quotations screen — create, share and track credit sales",
      label: "Invoices & quotations screen (invoices.png)",
    },
    points: [
      {
        title: "Quotations that convert",
        body: "Draft a quotation, send it to the customer over WhatsApp or email, then turn an accepted quote into an invoice or a completed sale without re-keying a single line.",
      },
      {
        title: "Professional invoices, shared instantly",
        body: "Raise an invoice, record part-payments against it, and share it as a branded PDF on WhatsApp or email. No printer required.",
      },
      {
        title: "Delivery notes for every dispatch",
        body: "Generate a delivery note so the customer signs for exactly what left your store, with riders and delivery charges recorded against the sale.",
      },
    ],
  },
  {
    id: "inventory",
    num: "04",
    tone: "blue",
    icon: Warehouse,
    kicker: "INVENTORY CONTROL",
    title: "Multi-store inventory management with main store allocation",
    tagline: "One main store, many storefronts, and stock transfers that always reconcile.",
    image: {
      src: "/screenshots/inventory.png",
      alt: "Blue Ledger inventory — main store allocation across storefronts with low-stock alerts",
      label: "Inventory / main store screen (inventory.png)",
    },
    points: [
      {
        title: "Main store plus multiple storefronts",
        body: "Hold bulk stock in a central main store and allocate units out to each storefront. Every branch sees its own shelf count; you see the whole picture in one place.",
      },
      {
        title: "Transfers that balance both sides",
        body: "Move stock from the main store to a storefront, or directly between two branches, with a matching stock-in and stock-out record on both locations of every transfer.",
      },
      {
        title: "Low-stock visibility everywhere",
        body: "Live on-hand counts and low-stock alerts across every location, so you reorder before a shelf runs dry.",
      },
    ],
  },
  {
    id: "goods-received",
    num: "04",
    tone: "gold-text",
    icon: PackageCheck,
    kicker: "GOODS RECEIVED",
    title: "Record goods received and keep every supplier receipt",
    tagline: "Account for every unit that enters the main store or a selling branch.",
    image: {
      src: "",
      alt: "Blue Ledger goods received screen — logging a supplier delivery into the main store",
      label: "Goods received screen (goods-received.png)",
    },
    points: [
      {
        title: "Log every delivery on arrival",
        body: "Book goods into the main store or a branch against the supplier and the purchase order, with quantities checked in as they land.",
      },
      {
        title: "Keep the paperwork attached",
        body: "Store the supplier receipt with the record so stock intake is fully accounted for when it is time to audit or reconcile.",
      },
      {
        title: "Numbers frozen at the moment of receipt",
        body: "Before-and-after stock levels are captured when goods are received, so the history never shifts under you later.",
      },
    ],
  },
  {
    id: "customers-suppliers",
    num: "05",
    tone: "green",
    icon: Users,
    kicker: "CUSTOMERS & SUPPLIERS",
    title: "Customer records and supplier tracking",
    tagline: "A running history of who buys from you and who you buy from.",
    image: {
      src: "",
      alt: "Blue Ledger customer records — purchase history, statements and outstanding balances",
      label: "Customer records screen (customers.png)",
    },
    points: [
      {
        title: "Customer records and statements",
        body: "Keep contact details, full purchase history and outstanding balances for every customer, and produce a statement on demand.",
      },
      {
        title: "Supplier and purchase tracking",
        body: "Track every supplier, the purchases raised against them and what you still owe, so nothing slips through.",
      },
    ],
  },
  {
    id: "requests-approvals",
    num: "06",
    tone: "blue",
    icon: ClipboardCheck,
    kicker: "REQUESTS & APPROVALS",
    title: "Built-in request and approval workflow",
    tagline: "Cashiers raise sensitive actions; a manager signs them off.",
    image: {
      src: "",
      alt: "Blue Ledger approvals screen — a cashier's return request awaiting manager sign-off",
      label: "Requests & approvals screen (approvals.png)",
    },
    points: [
      {
        title: "Approval gates on sensitive actions",
        body: "A cashier requests a sale or an invoice return and it waits for a manager to approve or reject. Nothing sensitive happens unsupervised.",
      },
      {
        title: "Every transaction tracked",
        body: "Follow every transaction moving through the business — sales, returns, transfers, payments and expenses — with the employee's name on each one.",
      },
    ],
  },
  {
    id: "roles-permissions",
    num: "07",
    tone: "gold-text",
    icon: KeyRound,
    kicker: "ROLES & PERMISSIONS",
    title: "Role-based permissions for every employee",
    tagline: "Decide exactly what each person on the team can see and do.",
    image: {
      src: "",
      alt: "Blue Ledger roles and permissions — choosing what a cashier role can access",
      label: "Roles & permissions screen (roles.png)",
    },
    points: [
      {
        title: "Control every permission by role",
        body: "Switch individual permissions on or off per role. Cashiers can sell all day without ever seeing reports, cost prices or system settings.",
      },
      {
        title: "Team sign-in with code and PIN",
        body: "Staff clock in with a short code and a personal PIN, so every sale and every change is tied to a name and a shift.",
      },
    ],
  },
  {
    id: "expenses-salaries",
    num: "08",
    tone: "green",
    icon: Wallet,
    kicker: "EXPENSES & SALARIES",
    title: "Expense tracking and salary management",
    tagline: "Record what goes out of the business as carefully as what comes in.",
    image: {
      src: "",
      alt: "Blue Ledger expenses and salary management screen",
      label: "Expenses & salaries screen (expenses.png)",
    },
    points: [
      {
        title: "Expenses by category",
        body: "Log running costs as they happen so daily profit reflects reality, not just takings.",
      },
      {
        title: "Salaries and salary advances",
        body: "Record staff salaries and log salary advances against them, so payday adds up with no guesswork.",
      },
    ],
  },
  {
    id: "reports-analytics",
    num: "09",
    tone: "blue",
    icon: BarChart3,
    kicker: "REPORTS & ANALYTICS",
    title: "Sales reports and business analytics",
    tagline: "Daily, weekly, monthly and yearly numbers an owner actually checks.",
    image: {
      src: "/screenshots/sales_report.png",
      alt: "Blue Ledger sales report — daily, weekly, monthly and yearly analytics with charts",
      label: "Sales report screen (sales_report.png)",
    },
    points: [
      {
        title: "Sales reports, day to year",
        body: "Detailed sales analytics by day, week, month and year — revenue, payment mix, discounts and cashier performance.",
      },
      {
        title: "Inventory reports",
        body: "Know exactly what stock you are holding and what it is worth, at any location, at any time.",
      },
      {
        title: "Product reports — fast and slow movers",
        body: "See fast-moving and slow-moving products at a glance, and track the movement of any single product over any period.",
      },
      {
        title: "Customer and supplier reports",
        body: "Track purchases by customer and by supplier to see who really drives the business.",
      },
      {
        title: "Tax reports — not linked to KRA",
        body: "Clean figures for accounting and tax filing. Blue Ledger is not integrated with KRA eTIMS and never transmits your sales to KRA — the tax report is for your own books only.",
      },
    ],
  },
  {
    id: "multi-branch",
    num: "10",
    tone: "gold-text",
    icon: Building2,
    kicker: "MULTI-BRANCH",
    title: "Multi-branch support with independent branch profiles",
    tagline: "Run every branch on its own details, branding and opening hours.",
    image: {
      src: "",
      alt: "Blue Ledger branch settings — independent branch profiles and working hours",
      label: "Branch settings screen (branches.png)",
    },
    points: [
      {
        title: "Independent branches, one system",
        body: "Each branch carries its own name, contact details, document branding and working hours — many shopfronts managed from a single account.",
      },
      {
        title: "Working hours per branch",
        body: "Set opening hours for each branch and control when staff are able to sign in and sell.",
      },
    ],
  },
  {
    id: "data-migration",
    num: "11",
    tone: "green",
    icon: FolderInput,
    kicker: "DATA MIGRATION",
    title: "Data migration from your old POS",
    tagline: "Bring your products, customers and suppliers across from day one.",
    image: {
      src: "",
      alt: "Blue Ledger data import — bringing products, customers and suppliers in from CSV or Excel",
      label: "Data import screen (import.png)",
    },
    points: [
      {
        title: "Bulk import from CSV or Excel",
        body: "Import products, customers and suppliers in bulk, so you launch with your real catalogue instead of a blank screen.",
      },
      {
        title: "Hands-on migration help",
        body: "We help you move your existing data from your old point of sale into Blue Ledger as part of onboarding.",
      },
    ],
  },
];
