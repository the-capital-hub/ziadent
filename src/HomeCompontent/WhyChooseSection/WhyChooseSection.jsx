
import {
  FaTooth,
  FaLaptop,
  FaTeeth,
  FaComments,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

import { Sparkles } from "lucide-react";
import whychoose1 from '../../assets/home/whychoose1.png'
import whychoose2 from '../../assets/home/whychoose2.png'
import "./WhyChooseSection.css";

const benefits = [
  {
    id: "01",
    title: "Comprehensive",
    subtitle: "Prosthetic Solutions",
    description:
      "A range of dental restoration solutions for diverse clinical needs.",
    icon: FaTooth,
    theme: "blue",
  },
  {
    id: "02",
    title: "Digital",
    subtitle: "Zirconia Milling",
    description:
      "Digital zirconia milling as part of our laboratory services.",
    icon: FaLaptop,
    theme: "gold",
  },
  {
    id: "03",
    title: "Fixed and",
    subtitle: "Removable Prosthetics",
    description:
      "Solutions including crowns, bridges, dentures and partial dentures.",
    icon: FaTeeth,
    theme: "blue",
  },
  {
    id: "04",
    title: "Professional",
    subtitle: "Communication",
    description:
      "Professional communication and case coordination with dental clinics.",
    icon: FaComments,
    theme: "gold",
  },
  {
    id: "05",
    title: "Precision and",
    subtitle: "Consistent Quality",
    description:
      "A focus on precision and consistency across dental laboratory work.",
    icon: FaAward,
    theme: "blue",
  },
  {
    id: "06",
    title: "Professional",
    subtitle: "Clinic Support",
    description:
      "Working with dental professionals to support their clinical requirements.",
    icon: FaHandshake,
    theme: "gold",
  },
];

function WhyChooseSection() {
  return (
    <section className="zc-why-section">

      <div className="zc-why-bg-glow" />

      <div className="zc-why-container">

        {/* LEFT IMAGE AREA */}

        <div className="zc-why-visual">

          <div className="zc-why-image-frame">

            <img
              src={whychoose1}
              alt="Dental laboratory technician examining a dental restoration"
              className="zc-why-main-image"
              loading="lazy"
            />

            <div className="zc-why-image-overlay" />

          </div>

          {/* CROWN IMAGE CIRCLE */}

          <div className="zc-why-crown-image">
            <img
              src={whychoose2}
              alt="Dental crowns and restorations"
              loading="lazy"
            />
          </div>

          {/* IMAGE ACCENT */}

          <div className="zc-why-image-accent" />

        </div>

        {/* RIGHT CONTENT */}

        <div className="zc-why-content">

          {/* SECTION LABEL */}

          <div className="zc-why-eyebrow">
            <span className="zc-why-eyebrow-icon">
              <FaTooth />
            </span>

            <span>Why Choose Ziadent Care</span>
          </div>

          {/* HEADING */}

          <h2 className="zc-why-title">
            Your Trusted Dental
            <br />
            Laboratory <span>Partner</span>
          </h2>

          <p className="zc-why-description">
            We work with dental professionals to provide
            comprehensive prosthetic solutions, digital
            zirconia milling and professional laboratory
            support for dental practices.
          </p>

          {/* BENEFIT CARDS */}

          <div className="zc-why-grid">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className={`zc-why-card ${benefit.theme}`}
                  key={benefit.id}
                >

                  <div className="zc-why-card-icon">
                    <Icon />
                  </div>

                  <span className="zc-why-card-number">
                    {benefit.id}
                  </span>

                  <h3>
                    {benefit.title}
                    <br />
                    {benefit.subtitle}
                  </h3>

                  <span className="zc-why-card-line" />

                  <p>{benefit.description}</p>

                </article>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseSection;
