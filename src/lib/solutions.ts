export type SolutionSlug =
  | "offline-pos"
  | "inventory-management"
  | "multi-branch-pos"
  | "pricing"
  | "mobile-pos";

export type SolutionPageData = {
  slug: SolutionSlug;
  label: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  image?: { src: string; alt: string; width: number; height: number; portrait?: boolean };
  highlights: string[];
  sections: { id: string; title: string; body: string; points: string[] }[];
  workflow: { title: string; intro: string; steps: { title: string; body: string }[] };
  note: { title: string; body: string };
  faqs: { question: string; answer: string }[];
  related: SolutionSlug[];
};

export const SOLUTIONS: Record<SolutionSlug, SolutionPageData> = {
  "offline-pos": {
    slug: "offline-pos",
    label: "Offline POS",
    metaTitle: "Offline POS System in Kenya",
    description: "Keep selling without internet on your Windows counter. Blue Ledger records sales and stock locally, then syncs when connected. Book an offline POS demo.",
    eyebrow: "SELL THROUGH INTERNET OUTAGES",
    title: "An offline POS system for shops in Kenya.",
    intro: "A dropped connection should not stop a customer at the till. Blue Ledger runs on your Windows computer, records sales in a local ledger, and queues changes for cloud sync when your connection returns.",
    cta: "BOOK AN OFFLINE DEMO",
    image: { src: "/POS.png", alt: "Blue Ledger offline POS on a Windows counter with a receipt printer, barcode scanner and phone", width: 1536, height: 1024 },
    highlights: ["Checkout on your Windows computer", "Local sales, stock and receipt records", "Cloud sync when you reconnect"],
    sections: [
      {
        id: "offline-checkout",
        title: "Keep the counter moving without Wi-Fi.",
        body: "For a Kenyan shop dealing with unreliable internet, the important question is what a cashier can actually finish during an outage. Blue Ledger keeps checkout, local inventory records, receipts and local reports on the counter computer. Your staff can continue working with the records already available there.",
        points: ["Record a sale and keep its receipt in the local ledger.", "Print receipts with a compatible ESC/POS thermal printer.", "Check local stock and review the counter's recorded sales."],
      },
      {
        id: "cloud-sync",
        title: "Reconnect, then catch the rest of the business up.",
        body: "Changes made offline wait in a visible sync queue. When internet returns, Blue Ledger sends pending changes to the cloud and retries failed syncs. This connects the desktop counter to your wider business without making every sale wait for a network response.",
        points: ["Review pending changes so you can see what still needs to sync.", "Let remote views catch up after a branch reconnects.", "Use the inventory and branch workflows alongside offline checkout."],
      },
      {
        id: "counter-setup",
        title: "Start with a counter setup your staff can use.",
        body: "Blue Ledger runs on a Windows PC or laptop. During a walkthrough, use sample products to see a sale completed with the internet disconnected, then reconnect and check the sync queue. Test your printer and the tasks your cashier handles before moving your live counter across.",
        points: ["Review your Windows computer and receipt printer with the team.", "Bring your product catalogue across using the supported import workflow.", "Set staff roles and practise the checkout and receipt process."],
      },
    ],
    workflow: {
      title: "What happens when the internet drops?",
      intro: "Follow one sale from the counter to the cloud.",
      steps: [
        { title: "Make the sale", body: "The cashier completes checkout on the Windows counter using the local product and stock records." },
        { title: "Keep the record", body: "The sale and receipt stay in the local ledger. Pending changes wait for an internet connection." },
        { title: "Sync after reconnecting", body: "The queue sends changes when the counter is online again, allowing connected views to catch up." },
      ],
    },
    note: { title: "Offline checkout and connected services have different requirements.", body: "The counter computer must remain powered and usable. Cloud sync, remote shop visibility, and sending receipts through online channels need connectivity. Local storage also makes the computer and your backup arrangements important; ask the team to walk you through them during setup." },
    faqs: [
      { question: "Does the desktop POS need internet for every sale?", answer: "No. After setup, Blue Ledger records desktop checkout, receipts and local inventory activity on the Windows computer. Pending changes sync when the counter reconnects." },
      { question: "Can I print a receipt while offline?", answer: "Yes, with a compatible ESC/POS thermal printer connected to the counter. Test the printer connection during setup. Sending a receipt through WhatsApp or email requires the relevant online connection." },
      { question: "Will the phone dashboard show an offline branch's newest sales?", answer: "Remote views depend on data reaching the cloud. A disconnected counter's pending changes need to sync before those changes can appear on a connected phone." },
      { question: "Can I see offline selling in a demo?", answer: "Yes. Ask for a walkthrough using sample products, including checkout without internet, a printed receipt if you use one, and the sync queue after reconnecting." },
    ],
    related: ["inventory-management", "multi-branch-pos", "pricing"],
  },
  "inventory-management": {
    slug: "inventory-management",
    label: "Inventory management",
    metaTitle: "Inventory Management Software in Kenya",
    description: "Track goods received, stock movements, low-stock levels and stock value with Blue Ledger inventory management software for Kenyan retail and wholesale shops.",
    eyebrow: "KNOW WHAT IS ON THE SHELF",
    title: "Inventory management software for Kenyan shops.",
    intro: "Receiving stock, selling it and moving it between locations should leave a record you can follow. Blue Ledger connects your POS to goods received, on-hand quantities, stock movements and inventory reports, so you can review the stock behind your sales.",
    cta: "SEE STOCK MANAGEMENT",
    image: { src: "/screenshots/inventory.png", alt: "Blue Ledger inventory screen showing main store quantities, storefront allocations and stock levels", width: 1365, height: 768 },
    highlights: ["Goods received and supplier records", "Main store and storefront stock", "Low-stock visibility and valuation"],
    sections: [
      {
        id: "goods-received",
        title: "Record the delivery before it becomes shelf stock.",
        body: "Start the stock trail when a supplier delivery arrives. Book the received quantities into the main store or a branch, link the supplier and purchase order, and keep the supplier receipt with the record. Before-and-after stock levels provide a reference when you later reconcile what came in.",
        points: ["Check quantities as goods arrive.", "Keep the supplier paperwork attached to the receiving record.", "Review the intake history when reconciling stock."],
      },
      {
        id: "stock-movements",
        title: "Follow stock from the main store to the selling shelf.",
        body: "Keep bulk stock in a main store and allocate units to storefronts. Transfers between locations create matching stock-in and stock-out records, giving you a trail to inspect when a shelf count needs explaining. Checkout and stock control stay within the same business system.",
        points: ["See the stock held at each selling location.", "Review transfers between the main store and storefronts.", "Look up a product's movement history rather than relying on a remembered count."],
      },
      {
        id: "stock-reports",
        title: "Use stock levels and movement to plan the next order.",
        body: "Low-stock visibility helps you notice products that need attention. Inventory valuation shows what you are holding, while product reports help identify fast and slow movers. For a retail or wholesale shop in Kenya, those views support buying decisions with records from your own counter.",
        points: ["Check on-hand quantities and low-stock alerts.", "Review inventory value by location.", "Use product movement reports when planning replenishment."],
      },
    ],
    workflow: {
      title: "A stock trail from delivery to sale.",
      intro: "Use one product in the demo to see how the records connect.",
      steps: [
        { title: "Receive it", body: "Record the supplier delivery and the quantities entering the main store or branch." },
        { title: "Place it", body: "Allocate or transfer stock to the storefront where it will be sold, keeping a record of the movement." },
        { title: "Review it", body: "Check sales, remaining on-hand quantities and movement history when reviewing the product." },
      ],
    },
    note: { title: "Start with accurate product and opening-stock records.", body: "A stock system is most useful when the starting catalogue and physical counts are checked. Prepare your product list, agree which locations hold stock, and review imports with the team. Central and remote views depend on branch changes being synced." },
    faqs: [
      { question: "Does Blue Ledger include inventory management with the POS?", answer: "Blue Ledger connects sales with stock records, goods received, transfers and inventory reporting. Ask the team to confirm the plan and setup that cover your locations and workflows." },
      { question: "Can I move stock between shops?", answer: "Yes. The inventory workflow supports movements from a main store to a storefront and transfers between branches, with matching stock-in and stock-out records." },
      { question: "Can I import an existing product list?", answer: "The supported import workflow accepts product data from CSV or Excel. Review your export, product fields and opening quantities with the team as part of onboarding." },
      { question: "Can I see stock value and slow-moving products?", answer: "Inventory reports show stock holdings and value, and product reports show movement over time, including fast and slow movers. Ask to see those views with sample products in a demo." },
    ],
    related: ["multi-branch-pos", "offline-pos", "pricing"],
  },
  "multi-branch-pos": {
    slug: "multi-branch-pos",
    label: "Multi-branch POS",
    metaTitle: "Multi-Branch POS System in Kenya",
    description: "Run multiple shops with Blue Ledger POS: separate branch profiles, stock transfers, staff permissions and reports, with connected visibility for owners.",
    eyebrow: "EVERY BRANCH, ONE BUSINESS",
    title: "A multi-branch POS system for Kenyan businesses.",
    intro: "A second shop brings another counter, another stock count and another team to coordinate. Blue Ledger lets each branch keep its own details while you manage stock movements, permissions and business visibility from one account.",
    cta: "BOOK A BRANCH WALKTHROUGH",
    image: { src: "/screenshots/multi_branch.png", alt: "Blue Ledger branch settings with independent shop details and working hours", width: 1366, height: 768 },
    highlights: ["Independent branch profiles", "Stock transfers between locations", "Staff access and owner visibility"],
    sections: [
      {
        id: "branch-profiles",
        title: "Give each branch its own identity and working hours.",
        body: "Set the name, contact details, document branding and opening hours for each branch. Your locations can issue documents with the right shop details while remaining part of the same business account. Branch working hours also help control when staff can sign in and sell.",
        points: ["Keep branch names and contact details distinct.", "Use the appropriate branch branding on documents.", "Set working hours for each location."],
      },
      {
        id: "branch-coordination",
        title: "Coordinate stock without losing the movement trail.",
        body: "A main store can supply several storefronts, and stock can also move directly between branches. Matching stock-in and stock-out records let you follow a transfer on both sides. Each shop sees its shelf stock while an owner can review the wider stock picture.",
        points: ["Allocate stock from the main store to selling branches.", "Review branch-to-branch transfers.", "Use stock and sales reports to understand the records behind each location."],
      },
      {
        id: "branch-team",
        title: "Match access to the responsibilities of your team.",
        body: "Cashiers, storekeepers and managers need different tools. Role-based permissions let you choose what employees can see and change, while personal sign-in codes and PINs tie activity to staff. Requests and approvals provide a path for sensitive returns and voids to reach a manager.",
        points: ["Keep reports and settings available to the appropriate roles.", "Use individual staff sign-ins instead of a shared identity.", "Review pending approvals from a connected phone when you are away."],
      },
    ],
    workflow: {
      title: "Plan the rollout around your locations.",
      intro: "Bring your branch structure to the walkthrough, including any central store.",
      steps: [
        { title: "Map the locations", body: "List the selling branches, main store and counters, including the details each branch uses on documents." },
        { title: "Set the team up", body: "Review roles, personal staff sign-ins, branch hours and the approvals your managers need." },
        { title: "Test the hand-offs", body: "Follow a stock transfer and a branch sale through the records, including what an owner sees after syncing." },
      ],
    },
    note: { title: "Central visibility depends on connected branches.", body: "An offline Windows counter can keep recording local sales, but other locations and a remote owner need those changes to sync before seeing the latest activity. Include internet interruptions and data freshness in your branch walkthrough." },
    faqs: [
      { question: "Can each branch have its own details?", answer: "Yes. Branch profiles support separate names, contact details, document branding and working hours within the business account." },
      { question: "Can we transfer stock directly between branches?", answer: "Yes. Blue Ledger supports main-store allocation and transfers between branches, recording the stock movement at both locations." },
      { question: "Can cashiers be kept out of owner reports?", answer: "Role permissions determine what staff can view and change. Review the available permissions with the team and set them for each employee's responsibilities." },
      { question: "Which plan supports several branches?", answer: "The current Biashara package covers up to four storefronts, while Enterprise is listed for unlimited storefronts. Request a quote that confirms your branch count, counters, onboarding and support requirements." },
    ],
    related: ["inventory-management", "mobile-pos", "pricing"],
  },
  pricing: {
    slug: "pricing",
    label: "Pricing & setup",
    metaTitle: "POS Software Pricing in Kenya",
    description: "Compare Blue Ledger Duka, Biashara and Enterprise packages. Request a POS software quote for your branches, team, hardware needs and onboarding in Kenya.",
    eyebrow: "PLAN YOUR POS SETUP",
    title: "POS software pricing for your shop in Kenya.",
    intro: "Blue Ledger pricing is provided by quote. Start with your storefronts, counter stations and staff, then confirm the software, equipment and onboarding your business needs. The packages below are a starting point for that conversation.",
    cta: "REQUEST A QUOTE",
    highlights: ["Packages for one shop or several branches", "Quote tailored to your setup", "30-day free trial arranged with the team"],
    sections: [
      {
        id: "software-scope",
        title: "Start with the way your business operates.",
        body: "A single selling station and a multi-branch operation need different setups. List the storefronts and counter stations you expect to run, the employees who need access, and whether you hold stock in a main store. That gives the team a concrete basis for recommending a package.",
        points: ["Duka lists one storefront, one station and three employee accounts.", "Biashara lists up to four storefronts and unlimited employees.", "Enterprise lists unlimited storefronts, dedicated onboarding and priority support."],
      },
      {
        id: "hardware-and-onboarding",
        title: "Ask what is included before comparing totals.",
        body: "When comparing POS system costs in Kenya, check software, hardware and setup together. You may already have a suitable Windows computer. Receipt printing needs compatible equipment, and moving an existing catalogue may need preparation. Request an itemised quote so you can assess the complete setup.",
        points: ["List the computers, printers and other counter equipment you already own.", "Confirm any equipment you need and whether it is included in the quote.", "Discuss product imports, staff onboarding, ongoing charges and support terms."],
      },
      {
        id: "trial-and-demo",
        title: "Use the trial to check your everyday workflows.",
        body: "The site offers a 30-day free trial. Contact the team to arrange it and walk through the tasks you need: offline desktop checkout, a receipt, a stock movement, a daily report, and the staff permissions you plan to use. Include your phone and printer in the conversation if they are part of your setup.",
        points: ["Ask to see the workflows that matter to your shop.", "Check device and printer compatibility before buying equipment.", "Review the quoted package and commercial terms with the team."],
      },
    ],
    workflow: {
      title: "Get a quote you can evaluate.",
      intro: "A short setup brief helps make the conversation useful.",
      steps: [
        { title: "Describe your shop", body: "Share your number of locations, selling stations, employees and any main store." },
        { title: "Walk through the work", body: "Show the team the sales, stock, receipt and reporting tasks you need, and discuss your existing equipment." },
        { title: "Review the quote", body: "Confirm the package, hardware line items, onboarding, ongoing charges and support terms before deciding." },
      ],
    },
    note: { title: "Prices are confirmed in your quote.", body: "Blue Ledger does not publish fixed monetary prices on this site. Ask the team for the amount, billing period, applicable taxes, included equipment and any additional charges. Package descriptions help you compare scope; the quote confirms the commercial terms for your setup." },
    faqs: [
      { question: "How much does Blue Ledger POS software cost?", answer: "Contact the team for a quote based on your storefronts, stations, employees and setup requirements. Fixed monetary prices are not published on the site." },
      { question: "Does the quote include a computer or receipt printer?", answer: "Confirm the equipment line items with the team. Tell them what you already own and what you need so that software, hardware and setup costs can be assessed together." },
      { question: "Can I try Blue Ledger before choosing a package?", answer: "Yes. The site offers a 30-day free trial with no card required. Contact the team to arrange the trial and confirm the setup process for your shop." },
      { question: "Can you help move data from an existing POS?", answer: "The supported import workflow brings products, customers and suppliers across from CSV or Excel. Discuss your export and the onboarding or migration assistance included in your quote." },
    ],
    related: ["offline-pos", "inventory-management", "multi-branch-pos"],
  },
  "mobile-pos": {
    slug: "mobile-pos",
    label: "Mobile POS",
    metaTitle: "Mobile POS App for Shops in Kenya",
    description: "See synced shop sales, stock and pending approvals from your phone. Blue Ledger mobile POS also supports sales, invoices and quotations. Book a walkthrough.",
    eyebrow: "YOUR SHOP, WITH YOU",
    title: "A mobile POS app for shop owners and staff in Kenya.",
    intro: "Keep an eye on your business when you are away from the counter, and give staff a way to work on the shop floor. Blue Ledger mobile brings shop visibility, sales, invoices and quotations to a phone within the same business system.",
    cta: "SEE THE MOBILE APP",
    image: { src: "/mobile.png", alt: "Blue Ledger mobile POS dashboard on a phone showing shop sales and business activity", width: 916, height: 1717, portrait: true },
    highlights: ["Shop visibility from a phone", "Sales, invoices and quotations", "Stock checks and pending approvals"],
    sections: [
      {
        id: "owner-visibility",
        title: "Check the shop when you are away from it.",
        body: "A shop owner can use the mobile view to review sales, stock, cash and pending approvals across branches. This gives you a way to check the records available to your account without returning to the counter computer. Data freshness depends on branches sending their changes to the cloud.",
        points: ["Review shop activity from a connected phone.", "Check stock and sales information available to your role.", "Keep an eye on pending requests that need a manager's attention."],
      },
      {
        id: "selling-on-the-floor",
        title: "Bring a sales workflow onto the shop floor.",
        body: "Staff can look up a product's stock and work with the mobile till while helping a customer. Mobile sales, invoices and quotations connect to the same business system as the desktop POS. Use a walkthrough to confirm the specific checkout, receipt and device workflow your team needs.",
        points: ["Look up products and check available stock.", "Create sales, invoices and quotations from the phone.", "Work within the prices, approvals and permissions of the business account."],
      },
      {
        id: "mobile-access",
        title: "Give mobile users the access their work requires.",
        body: "An owner's view and a cashier's view have different purposes. Role-based permissions help keep business reports, settings and sensitive actions with the appropriate people. Discuss who will use a phone, what each person needs to do, and which approvals should reach a manager.",
        points: ["Plan access around the owner, manager and cashier roles.", "Review how sensitive actions move through approvals.", "Confirm your phone, connectivity and receipt requirements with the team."],
      },
    ],
    workflow: {
      title: "Choose the mobile workflow you need.",
      intro: "An owner checking a branch and a cashier serving a customer can use the same system in different ways.",
      steps: [
        { title: "Set the role", body: "Confirm whether the phone is for owner visibility, manager approvals or staff sales, and review permissions." },
        { title: "Try the task", body: "Look up stock, review an approval, or create a sample sale, invoice or quotation in the walkthrough." },
        { title: "Check the connection", body: "See how synced branch activity appears on the phone and confirm your device and receipt setup." },
      ],
    },
    note: { title: "Remote visibility follows the synced records.", body: "A connected phone cannot show a disconnected desktop counter's unsynced activity. The desktop's offline checkout and the phone's connected views have different requirements. Ask the team to confirm your mobile device and the connectivity needed for each workflow." },
    faqs: [
      { question: "Can I check shop sales from my phone?", answer: "Yes. The mobile view supports shop sales, stock, cash and pending approvals. What you can see depends on your role and the branch data that has synced." },
      { question: "Can staff make sales from the phone?", answer: "Blue Ledger mobile supports sales, invoices and quotations, as well as product stock checks. Confirm the checkout and receipt workflow on your intended device during a demo." },
      { question: "Which phone should I use?", answer: "Contact the team to check your intended device, connectivity and any printing requirements. Ask for the mobile workflow to be demonstrated on the type of phone your team will use." },
      { question: "Does mobile visibility replace the offline desktop POS?", answer: "The mobile and desktop views serve connected parts of the same business. The Windows desktop can record local sales offline; a phone's remote view needs synced records and a connection to see the latest branch activity." },
    ],
    related: ["multi-branch-pos", "offline-pos", "pricing"],
  },
};
