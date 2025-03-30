import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Scroll } from "lucide-react";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const faqs = [
  {
    question: "How do I book a yacht?",
    answer:
      "You can book a yacht by visiting our Featured Yachts section and selecting the one you prefer. Follow the booking instructions provided.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and bank transfers. Contact support for more details.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, cancellations made 7 days in advance receive a full refund. Cancellations within 7 days may be subject to a fee.",
  },
  {
    question: "Are food and beverages included in the yacht rental?",
    answer:
      "Some yacht rentals include complimentary snacks and beverages, while others offer catering options at an additional cost. Check the yacht details for more information.",
  },
  {
    question: "Do I need a boating license to rent a yacht?",
    answer:
      "No, our yachts come with experienced captains who will handle navigation and safety. Sit back and enjoy your experience!",
  },
  {
    question: "What should I bring for my yacht trip?",
    answer:
      "We recommend bringing sunscreen, sunglasses, a hat, swimwear, and any personal items you may need. If you have specific preferences for food and drinks, feel free to bring them along.",
  },
  {
    question: "Can I bring my own food and drinks?",
    answer:
      "Yes! Most yachts allow you to bring your own food and beverages. However, some may have restrictions, so it's best to check with us beforehand.",
  },
  {
    question: "Is there a dress code for yacht rentals?",
    answer:
      "There is no strict dress code, but we recommend wearing comfortable and casual clothing. Non-marking shoes or barefoot is advised on deck to protect the yacht's surface.",
  },
  {
    question: "Do you provide life jackets?",
    answer:
      "Yes, all our yachts are equipped with life jackets and safety gear to ensure your trip is safe and enjoyable.",
  },
  {
    question: "Can I book a yacht for a special event?",
    answer:
      "Absolutely! We offer yacht rentals for birthdays, anniversaries, corporate events, and more. Contact us to customize your experience.",
  },
];

const FAQPage = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center text-gray-700 mb-12">
        Have questions? We've got answers! Browse through our FAQs to find the
        information you need.
      </p>
      <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left py-4 text-xl font-semibold"
            >
              {faq.question}
              {openIndexes.includes(index) ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </button>
            {openIndexes.includes(index) && (
              <p className="mt-3 text-gray-600 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default FAQPage;
