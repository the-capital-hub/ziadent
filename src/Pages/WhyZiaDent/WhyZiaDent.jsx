
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Smile,
  Layers3,
  Users,
  Settings,
  ShieldCheck,
  Monitor,
  Handshake,
  Sparkles,
  Grid2X2,
  MessageCircle,
  Target,
  BriefcaseMedical,
} from "lucide-react";

import hero from "../../assets/why-ziadent/hero.png";
import crowns from "../../assets/why-ziadent/crowns.png";
import prosthetics from "../../assets/why-ziadent/prosthetics.png";
import milling from "../../assets/why-ziadent/milling.png";
import team from "../../assets/why-ziadent/team.png";

import "./WhyZiaDent.css";

const strengths = [
  {
    icon: <Smile />,
    title: "Precision Focus",
    description: "Attention to detail in dental restorations.",
  },
  {
    icon: <Layers3 />,
    title: "Consistent Quality",
    description: "A focused approach to reliable laboratory solutions.",
  },
  {
    icon: <Users />,
    title: "Professional Support",
    description: "Clear communication and case coordination.",
  },
  {
    icon: <Settings />,
    title: "Comprehensive Solutions",
    description: "Fixed and removable prosthetic solutions.",
  },
];

const benefits = [
  {
    icon: <Smile />,
    title: "Comprehensive Prosthetics",
    description: "A range of fixed and removable prosthetic solutions.",
  },
  {
    icon: <Layers3 />,
    title: "Reliable Workflow",
    description: "A coordinated process for consistent case handling.",
  },
  {
    icon: <Monitor />,
    title: "Digital Capabilities",
    description: "Digital zirconia milling and CAD/CAM workflows.",
  },
  {
    icon: <Handshake />,
    title: "Professional Communication",
    description: "Clear communication and case coordination.",
  },
  {
    icon: <Sparkles />,
    title: "Precision Focus",
    description: "Attention to detail across laboratory work.",
  },
  {
    icon: <Grid2X2 />,
    title: "Comprehensive Range",
    description: "Fixed and removable prosthetics in one laboratory.",
  },
];

const WhyZiaDent = () => {
  return (
    <div className="why-page">

      {/* HERO */}

      <section className="why-hero">

        <div className="why-hero-content">

          <div className="why-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Why ZiaDent</span>
          </div>

          <span className="why-eyebrow">
            THE ZIADENT DIFFERENCE
          </span>

          <h1>
            Why Choose
            <br />
            <span>ZiaDent?</span>
          </h1>

          <div className="why-title-line" />

          <p className="why-hero-description">
            A dental laboratory partner focused on precision,
            consistent quality and professional support
            for dental practices.
          </p>

          <div className="why-hero-features">

            {strengths.map((item, index) => (
              <div className="why-feature" key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}

          </div>

        </div>

        <div className="why-hero-image">
          <img
            src={hero}
            alt="Dental technician examining a dental restoration"
          />
        </div>

      </section>

      {/* OUR STRENGTHS */}

      <section className="why-strengths section-padding">

        <div className="why-strength-image">
          <img
            src={crowns}
            alt="Dental crown restorations"
          />
        </div>

        <div className="why-strength-content">

          <span className="why-label">
            Our Strengths
          </span>

          <h2>
            Precision, Quality and Support
          </h2>

          <div className="why-title-line" />

          <p>
            ZiaDent brings together a comprehensive range of
            prosthetic solutions, digital zirconia milling and
            professional communication to support dental practices.
          </p>

        </div>

      </section>

      {/* SOLUTION CARDS */}

      <section className="why-solutions section-padding">

        <article className="why-solution-card">

          <div className="why-solution-content">

            <span className="why-label">
              Comprehensive Solutions
            </span>

            <h2>
              Fixed and
              <br />
              Removable Prosthetics
            </h2>

            <div className="why-title-line" />

            <p>
              A wide range of restorative solutions including
              crowns, bridges, dentures and related prosthetics.
            </p>

          </div>

          <div className="why-solution-image">
            <img
              src={prosthetics}
              alt="Fixed and removable dental prosthetics"
            />
          </div>

        </article>

        <article className="why-solution-card">

          <div className="why-solution-content">

            <span className="why-label">
              Digital Capabilities
            </span>

            <h2>
              CAD/CAM and
              <br />
              Zirconia Milling
            </h2>

            <div className="why-title-line" />

            <p>
              Digital zirconia milling as part of a focused
              workflow for dental restorations.
            </p>

          </div>

          <div className="why-solution-image">
            <img
              src={milling}
              alt="Dental CAD CAM zirconia milling"
            />
          </div>

        </article>

      </section>

      {/* COLLABORATIVE APPROACH */}

      <section className="why-approach section-padding">

        <div className="why-approach-image">
          <img
            src={team}
            alt="Dental laboratory professionals coordinating a case"
          />
        </div>

        <div className="why-approach-content">

          <span className="why-label">
            Our Approach
          </span>

          <h2>
            A Collaborative and
            <br />
            Case Focused Approach
          </h2>

          <div className="why-title-line" />

          <p>
            We work with dental professionals to understand
            case requirements, coordinate relevant information
            and maintain professional communication throughout
            the laboratory process.
          </p>

        </div>

      </section>

      {/* WHY DENTISTS CHOOSE US */}

      <section className="why-benefits section-padding">

        <div className="why-benefits-heading">

          <span className="why-label">
            Why Dentists Choose Us
          </span>

          <h2>
            A Trusted Partner for Your Practice
          </h2>

        </div>

        <div className="why-benefits-grid">

          {benefits.map((item, index) => (
            <article className="why-benefit-card" key={index}>

              <div className="why-benefit-icon">
                {item.icon}
              </div>

              <div className="why-benefit-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </article>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="why-final-cta">

        <div className="why-cta-icon">
          <Smile />
        </div>

        <div className="why-cta-content">

          <h2>Let's Work Together</h2>

          <p>
            Discover how ZiaDent can support your practice
            with prosthetic solutions and professional
            laboratory coordination.
          </p>

        </div>

        <Link
          to="/contact"
          className="why-cta-button"
        >
          <CalendarDays />
          <span>Schedule a Call with Our Team</span>
          <ArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default WhyZiaDent;
