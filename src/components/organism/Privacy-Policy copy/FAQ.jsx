import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will be effective from the next billing cycle.",
    },
    {
      question: "How does the listing priority work?",
      answer:
        "Listing priority determines how prominently your properties appear in search results. Higher-tier plans get better visibility, appearing at the top of search results and featured sections.",
    },
    {
      question: "What's included in the digital marketing support?",
      answer:
        "Digital marketing includes social media promotion, targeted email campaigns, and search engine optimization for your listings. Higher-tier plans receive more comprehensive marketing strategies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-[#800000] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#800000] rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center bg-[#800000] text-white"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 pt-2 text-gray-700 bg-gray-50"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
