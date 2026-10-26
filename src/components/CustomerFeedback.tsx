import { Container } from "@/components/Container";

const feedback = [
  { name: "EAKHA ELECTRONICS", benefit: "Branch visibility while away", text: "We have two branches, and I can see both from one place. Even when I'm travelling outside Nairobi, I know what's happening in the shops." },
  { name: "RAPTA SOUNDZ ENTERTAINMENT", benefit: "Documents customers can receive", text: "I add product pictures to my invoices and send receipts and invoices to customers on WhatsApp or email. It looks professional and saves time." },
  { name: "ADIA HOME ELECTRONICS", benefit: "One system across shops", text: "All our shops run on one system. We move stock from the main store to the branches, and between branches, and everything stays on record." },
  { name: "ALFA SOUNDS ELECTRONICS", benefit: "Follow each product movement", text: "Electronic receipts, transfers between stores, and the movement history of every single product. I always know where stock went." },
  { name: "AROBISCA GROUP LTD", benefit: "Connected business records", text: "Suppliers, purchases and customers are all in one place, and the reports help us understand how the business is doing." },
];

export function CustomerFeedback() {
  return <section id="customer-feedback" className="bg-cream px-6 py-16 sm:px-8">
    <Container>
      <p className="text-xs font-bold tracking-[0.14em] text-green">WHAT OUR CUSTOMERS SAY</p>
      <h2 className="mt-4 max-w-[760px] font-display text-[clamp(30px,4vw,48px)] leading-[1.1]">What shops value in their working day.</h2>
      <p className="mt-5 max-w-[800px] text-sm leading-[1.85] text-navy/80">Shop owners who run their business on Blue Ledger, in their own words.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{feedback.map(item => <figure key={item.name} className="border border-navy/20 bg-white p-6"><h3 className="font-display text-[24px] leading-[1.2]">{item.benefit}</h3><blockquote className="mt-4 text-sm leading-[1.85] text-navy/80"><p>&ldquo;{item.text}&rdquo;</p></blockquote><figcaption className="mt-5 text-xs font-bold leading-relaxed tracking-[0.06em] text-green">{item.name}</figcaption></figure>)}</div>
    </Container>
  </section>;
}
