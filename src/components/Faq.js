import React, { useState } from "react";
import SectionButton from "./SectionButton";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: " What are your office hours?",
    answer:
      "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
  },
  {
    question: "How can I make an appointment?",
    answer:
      "You can make an appointment by calling our office, using our online scheduling system, or by visiting our clinic in person.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please contact our office to verify your insurance coverage.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Our office hours are Monday to Friday, 8 AM to 5 PM. We also offer extended hours and weekend appointments by request.",
  },
  {
    question: "Do you offer telemedicine appointments?",
    answer:
      "We are located at 1234 Health St, Wellness City, ST 56789. You can find detailed directions and a map on our website.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 lg:py-12">
      <div className="space-y-4">
        <SectionButton text={"Faq"} />
        <SectionHeading text={"Frequently Asked Questions"} />
      </div>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl cursor-pointer shadow-md transition duration-300 ease-in-out"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold p-4 bg-[#fffff5]">
              {faq.question}
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 p-4   bg-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
