export type ContactIntent = "general" | "trial" | "demo" | "quote" | "support";

export const CONTACT_EMAIL = "info@blueledgerpos.com";
export const SALES_PHONE = "254742503840";
export const SALES_PHONE_DISPLAY = "0742 503 840";
export const SUPPORT_PHONE = "254792272271";
export const SUPPORT_PHONE_DISPLAY = "0792 272 271";

export const CONTACT_MESSAGES: Record<ContactIntent, string> = {
  general: "Hi, I'm interested in Blue Ledger POS.",
  trial: "Hi, I'd like to arrange the 30-day Blue Ledger POS free trial. Please help me confirm my shop setup and next steps.",
  demo: "Hi, I'd like a Blue Ledger POS product walkthrough for my shop.",
  quote: "Hi, I'd like an itemised Blue Ledger POS quote covering software, equipment, onboarding and support for my setup.",
  support: "Hi, I need help with my Blue Ledger POS setup.",
};

export const CONTACT_TITLES: Record<ContactIntent, string> = {
  general: "Talk to Blue Ledger",
  trial: "Arrange your free trial",
  demo: "Book a product walkthrough",
  quote: "Request a setup quote",
  support: "Get product support",
};

export function whatsappHref(phone: string, intent: ContactIntent = "general") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(CONTACT_MESSAGES[intent])}`;
}

export function emailHref(intent: ContactIntent = "general") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_TITLES[intent])}&body=${encodeURIComponent(CONTACT_MESSAGES[intent])}`;
}
