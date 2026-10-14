import { Container } from "@/components/Container";

const feedback = [
  { name: "EAKHA ELECTRONICS", benefit: "Branch visibility while away", text: "Values seeing both shop branches in one place and checking shop activity while travelling away from Nairobi." },
  { name: "RAPTA SOUNDZ ENTERTAINMENT", benefit: "Documents customers can receive", text: "Values adding pictures to invoices and sharing receipts, invoices and other documents with customers through WhatsApp or email." },
  { name: "ADIA HOME ELECTRONICS", benefit: "One system across shops", text: "Values managing shops in one POS and moving stock from the main store to branches, and between branches." },
  { name: "ALFA SOUNDS ELECTRONICS", benefit: "Follow each product movement", text: "Values electronic receipts and documents, transfers between stores, and tracking the stock movements of individual products." },
  { name: "AROBISCA GROUP LTD", benefit: "Connected business records", text: "Values managing suppliers, purchases and customers together, with reporting and analytics to understand the business." },
];

export function CustomerFeedback() {
  return <section id="customer-feedback" className="bg-cream px-6 py-16 sm:px-8">
    <Container>
      <p className="text-xs font-bold tracking-[0.14em] text-green">FROM CUSTOMER CONVERSATIONS</p>
      <h2 className="mt-4 max-w-[760px] font-display text-[clamp(30px,4vw,48px)] leading-[1.1]">What shops value in their working day.</h2>
      <p className="mt-5 max-w-[800px] text-sm leading-[1.85] text-navy/80">Feedback shared with the Blue Ledger team, summarised in our words. These are paraphrases of customer conversations.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{feedback.map(item => <article key={item.name} className="border border-navy/20 bg-white p-6"><p className="text-xs font-bold leading-relaxed tracking-[0.06em] text-green">{item.name}</p><h3 className="mt-4 font-display text-[24px] leading-[1.2]">{item.benefit}</h3><p className="mt-4 text-sm leading-[1.85] text-navy/80">{item.text}</p></article>)}</div>
    </Container>
  </section>;
}