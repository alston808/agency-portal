import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#0A5C7A] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "Do you deliver?",
      answer: "We focus on quality, and poke is best eaten immediately. We do not currently offer delivery through UberEats, DoorDash, or similar services. Come visit us in person for the freshest bowl! We do accept phone orders for pickup."
    },
    {
      question: "Is your Ahi really fresh?",
      answer: "Always. We built our reputation on using fresh, auction-grade Ahi and pelagic fish—never the frozen, carbon monoxide-treated cubes you see at chain restaurants. You can taste the difference in every bite."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex, Discover, JCB), Apple Pay, and cash."
    },
    {
      question: "Can I mix flavors in one bowl?",
      answer: "Yes! Our \"Two-Choice\" option allows you to split your bowl between any two flavors (for example, half Spicy Ahi and half Hawaiian Style). This is perfect if you want to try multiple profiles."
    },
    {
      question: "What comes with a poke bowl?",
      answer: "Every poke bowl includes your choice of protein and marinade over hot steamed white or brown rice, plus a complimentary canned drink (soda or Aloha Maid juice). The contrast between the cold poke and hot rice is part of the authentic experience."
    },
    {
      question: "Are there gluten-free options?",
      answer: "Our Hawaiian Style options (#3 and #4) contain no soy sauce and are naturally gluten-free. However, please note that we prepare all items in the same kitchen, so cross-contamination is possible. If you have severe allergies, please inform our staff."
    },
    {
      question: "Do you take reservations or do catering?",
      answer: "We do not take reservations for dine-in (it's fast-casual, first-come-first-served). However, we do offer catering for parties and events! Contact us directly to discuss poke platters, sashimi trays, and bulk orders."
    },
    {
      question: "Why do you close early sometimes?",
      answer: "We are committed to fresh fish. When we sell out for the day, we close rather than serving yesterday's product or switching to frozen alternatives. This is how we maintain our quality standards. We recommend calling ahead if you're visiting near closing time."
    },
    {
      question: "Can I buy just the poke without rice?",
      answer: "Absolutely! We sell poke by the pound for those who want to enjoy it at home or bring it to a potluck. Prices vary based on market rates for fresh fish."
    },
    {
      question: "What's the best time to visit to avoid lines?",
      answer: "The lunch rush (11:30 AM - 1:30 PM) is our busiest time. For a shorter wait, try visiting between 2:00 PM and 4:00 PM. Our Kalama Valley location also tends to have shorter lines than the Kapahulu flagship."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#0A5C7A]">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know before your visit
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact"
            className="inline-block bg-[#0A5C7A] hover:bg-[#084A5F] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
