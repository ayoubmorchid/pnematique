import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "When will my order arrive?",
      answer:
        "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.",
    },
    {
      question: "How do I make changes to an existing order?",
      answer:
        "Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email, and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it.",
    },
    {
      question: "What shipping options do you have?",
      answer:
        "We offer standard, expedited, and next-day shipping options. The availability of these options may depend on your location and the time of order placement.",
    },
    {
      question: "Can I cancel my order after it's placed?",
      answer:
        "Yes, you can cancel your order before it is shipped. Once the order status changes to 'shipped,' cancellations are no longer possible. Reach out to our team for help.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-5">
      <div className="flex flex-col items-center my-6">
        <div className="w-full sm:w-10/12 md:w-1/2 text-center mb-8">
          
          <h2 className="text-4xl font-extrabold text-gray-800 p-5">
          Frequently Asked Questions
                </h2>
          <p className="text-gray-500 font-semibold ">
            Here are answers to some of the most common questions we receive.
            If you can’t find what you’re looking for, feel free to reach out to
            our support team for help.
          </p>
        </div>
        <div className="w-full sm:w-10/12 md:w-1/2">
          <ul className="flex flex-col">
            {faqData.map((item, index) => (
              <li key={index} className="bg-white my-2 shadow-lg rounded-md">
                <h2
                  onClick={() => toggleAccordion(index)}
                  className="flex flex-row justify-between items-center font-semibold p-4 cursor-pointer text-green-800"
                >
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                    className="text-green-700"
                  />
                </h2>
                {activeIndex === index && (
                  <div className="p-4 text-gray-700 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
