import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "We sync data from your Shopify store and make it available via zustand store, ready to be plugged into your framework (or vanilla JavaScript). We believe that the main focus of the storefront development should be on the UI, not on the data juggling. Check out the docs if you want to learn more.",
  },
  {
    question: "Is it production ready?",
    answer:
      "No, it's not. We are currently in the very early stages of development. We are working hard to make it production ready as soon as possible.",
  },
  {
    question: "What is the price?",
    answer:
      "During alpha and beta periods it's completely free to use. We will introduce paid plans once we are production ready. The pricing will be transparent and adequately mapped to the compute we use to sync and serve your data.",
  },
];

export default function Faq() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </dl>
        </div>
      </div>
    </div>
  );
}
