import { Container } from "@/components/Container";
import { SUPPORT_PHONE, SUPPORT_PHONE_DISPLAY, whatsappHref } from "@/lib/contact";

export function SetupChecklist() {
  return <section id="setup" className="scroll-mt-24 bg-cream-dark px-6 py-16 sm:px-8">
    <Container>
      <h2 className="font-display text-[clamp(28px,3.5vw,44px)] leading-[1.15]">Confirm the complete setup.</h2>
      <p className="mt-5 max-w-[800px] text-[15px] leading-[1.85] text-navy/80">Use these questions in the walkthrough and ask for the agreed items in your quote. Equipment, onboarding and support requirements depend on your shop.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {[
          { title: "Hardware", items: ["A powered Windows PC or laptop for the desktop counter.", "A compatible ESC/POS receipt printer if you need printed receipts.", "Confirm your barcode scanner, phone and printer connections before buying equipment."] },
          { title: "Onboarding", items: ["Review the product list and opening stock before importing data.", "Set branch details, staff roles and personal sign-ins.", "Practise a sale, a receipt, a stock movement and reconnecting after an internet outage."] },
          { title: "Quote & support", items: ["Confirm software, hardware and migration help as separate line items.", "Agree billing, ongoing charges and the support terms included in your package.", "Keep the support contact and explain the screen, device and problem when asking for help."] },
        ].map(group => <article key={group.title} className="border border-navy/20 bg-white p-6"><h3 className="font-display text-[24px] leading-[1.2]">{group.title}</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-[14px] leading-[1.8] text-navy/80">{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
      </div>
      <p className="mt-6 text-sm leading-relaxed">Existing setup? <a href={whatsappHref(SUPPORT_PHONE,"support")} target="_blank" rel="noopener noreferrer" className="font-bold text-blue underline underline-offset-4">WhatsApp support: {SUPPORT_PHONE_DISPLAY}</a></p>
    </Container>
  </section>;
}
