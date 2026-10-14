import type { StaticImageData } from "next/image";
import logo from "../../public/BLUE_LEDGER.png";
import hardware from "../../public/POS.png";
import mobile from "../../public/mobile.png";
import dashboard from "../../public/screenshots/dashboard.png";
import receipts from "../../public/screenshots/receipts.png";
import inventory from "../../public/screenshots/inventory.png";
import reports from "../../public/screenshots/sales_report.png";
import approvals from "../../public/screenshots/approvals.png";
import customers from "../../public/screenshots/customer_management.png";
import dataImport from "../../public/screenshots/data_import.png";
import expenses from "../../public/screenshots/expenses.png";
import goodsReceived from "../../public/screenshots/goods-received.png";
import invoices from "../../public/screenshots/invoices.png";
import branches from "../../public/screenshots/multi_branch.png";
import roles from "../../public/screenshots/role_management.png";

// Static imports provide exact dimensions and content-hashed asset URLs.
// Keep the public path API used by the feature catalogue and placeholders.
export const IMAGE_ASSETS: Record<string, StaticImageData> = {
  "/BLUE_LEDGER.png": logo,
  "/POS.png": hardware,
  "/mobile.png": mobile,
  "/screenshots/dashboard.png": dashboard,
  "/screenshots/receipts.png": receipts,
  "/screenshots/inventory.png": inventory,
  "/screenshots/sales_report.png": reports,
  "/screenshots/approvals.png": approvals,
  "/screenshots/customer_management.png": customers,
  "/screenshots/data_import.png": dataImport,
  "/screenshots/expenses.png": expenses,
  "/screenshots/goods-received.png": goodsReceived,
  "/screenshots/invoices.png": invoices,
  "/screenshots/multi_branch.png": branches,
  "/screenshots/role_management.png": roles,
};
