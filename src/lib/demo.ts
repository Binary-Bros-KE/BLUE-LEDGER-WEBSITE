export type DemoStep = { title: string; text: string; src: string; width: number; height: number };

export const DEMO_STEPS: DemoStep[] = [
  { title: "Review the counter", text: "The Command Center brings recorded sales and shop activity into one view. A remote view reflects branch changes after they sync.", src: "/screenshots/dashboard.png", width: 1357, height: 768 },
  { title: "Find a receipt", text: "Receipt history lets staff search recorded sales, review return requests and reprint a receipt. The screen brings totals and individual receipts together.", src: "/screenshots/receipts.png", width: 1366, height: 768 },
  { title: "Check storefront stock", text: "The inventory screen compares main-store allocation with stock at selling locations. Transfers and stock records help explain where units are held.", src: "/screenshots/inventory.png", width: 1365, height: 768 },
  { title: "Review the reporting period", text: "Choose a period in the sales report to review recorded revenue, expenses and profit. Use the figures alongside the transaction records for that period.", src: "/screenshots/sales_report.png", width: 1366, height: 768 },
];

// Add an approved recording and its matching caption track together.
// Until then, the public walkthrough is explicitly a screenshot tour.
export const DEMO_VIDEO: { src: string; captionsSrc: string } | null = null;
