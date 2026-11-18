
import { useState } from "react";

import {
  ChevronDown,
  CircleHelp,
  Sparkles,
} from "lucide-react";

import "./FAQSection.css";
import faq from '../../assets/home/faq.png'
const faqs = [
  {
    question: "Who can work with ZiaDent?",
    answer:
      "ZiaDent works with dental clinics, dentists, prosthodontists, implantologists and other dental professionals who require dental laboratory and prosthetic solutions.",
  },
  {
    question: "What products does ZiaDent manufacture?",
    answer:
      "Our product range includes Zirconia Crowns and Bridges, PFM Crowns and Bridges, Metal Crowns, Temporary PMMA Crowns, Implant Crowns, Complete Dentures, Removable Partial Dentures, Flexible Dentures and Digital Zirconia Milling.",
  },
  {
    question: "Does ZiaDent offer digital zirconia milling?",
    answer:
      "Yes. Digital Zirconia Milling is one of the services offered by ZiaDent Dental Lab.",
  },
  {
    question: "Can I discuss a case before sending it?",
    answer:
      "Yes. Dental professionals can connect with our team to discuss case requirements before proceeding.",
  },
  {
    question: "How can I become a regular client?",
    answer:
      "Connect with the ZiaDent team and discuss your clinic requirements and the services you are interested in. Our team can coordinate the next steps with you.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section className="zc-faq-section">

      <div className="zc-faq-bg-glow zc-faq-glow-one" />
      <div className="zc-faq-bg-glow zc-faq-glow-two" />

      <div className="zc-faq-container">

        {/* LEFT CONTENT */}

        <div className="zc-faq-left">

          <div className="zc-faq-eyebrow">
            <span className="zc-faq-eyebrow-icon">
              <CircleHelp size={19} />
            </span>

            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="zc-faq-title">
            Have Questions?
            <br />
            <span>We’re Here</span> to Help
          </h2>

          <p className="zc-faq-description">
            Find quick answers to common questions about
            Ziadent Care, our products, services and
            collaboration process.
          </p>

          {/* IMAGE */}

          <div className="zc-faq-image-wrap">

            <img
              src={faq}
              alt="Dental crowns and prosthetic restorations"
              className="zc-faq-image"
              loading="lazy"
            />

            <div className="zc-faq-image-overlay" />

            <div className="zc-faq-image-decoration">
              <Sparkles size={23} />
            </div>

          </div>

        </div>

        {/* RIGHT ACCORDION */}

        <div className="zc-faq-right">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`zc-faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="zc-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`zc-faq-answer-${index}`}
                >

                  <span className="zc-faq-question-icon">
                    <CircleHelp size={25} />
                  </span>

                  <span className="zc-faq-question-text">
                    {faq.question}
                  </span>

                  <span className="zc-faq-chevron">
                    <ChevronDown size={24} />
                  </span>

                </button>

                <div
                  id={`zc-faq-answer-${index}`}
                  className="zc-faq-answer-wrap"
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="zc-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;
